import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  items: any;

  constructor(private cartService: CartService, private router: Router) {
    if (this.cartService.checkoutItems) {
      this.items = this.cartService.checkoutItems;
    } else {
      this.router.navigateByUrl("/store/cart");
    }
  }

  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

  pay(amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_aeUUjYYcx4XNfKVW60pmHTtI",
      locale: "auto",
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert("Token Created!!");
      },
    });

    handler.open({
      name: "Health Inspector",
      description: `Your order to purchase ${this.items.items}`,
      amount: amount * 100,
    });
  }
}
