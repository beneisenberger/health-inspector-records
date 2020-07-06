const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const stripe = require("stripe")(functions.config().stripe.secretkey);

exports.stripeCharge = functions.database
  .ref("payments/{userId}/{paymentId}")
  .onWrite((change: any, context: any) => {
    const payment = change.after.val();
    const userId = context.params.userId;
    const paymentId = context.params.paymentId;

    if (!payment || payment.charge) return;

    const amount = payment.amount;
    const idempotencyKey = paymentId;
    const source = payment.token.id;
    const currency = "usd";
    const charge = { amount, currency, source };

    return stripe.charges.create(charge, { idempotencyKey }).then(() => {
      admin
        .database()
        .ref(`/payments/${userId}/${paymentId}`)
        .update({ charge: charge });
    });
  });
