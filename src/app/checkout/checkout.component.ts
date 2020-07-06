import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StripeService, Elements } from "ngx-stripe";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  items: any;

  checkoutForm: FormGroup;
  elements: Elements;
  card: any;

  constructor(
    public cartService: CartService,
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService,
    public dialog: MatDialog
  ) {
    if (this.cartService.checkoutItems) {
      this.items = this.cartService.checkoutItems;
    } else {
      this.router.navigateByUrl("/store/cart");
    }
  }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      street: ["", Validators.required],
      apt: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
    });
    this.stripeService.elements({ locale: "en" }).subscribe((elements) => {
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create("card", {
          style: {
            base: {
              iconColor: "#666EE8",
              color: "#31325F",
              lineHeight: "40px",
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: "18px",
              "::placeholder": {
                color: "##495057",
              },
            },
          },
        });
        this.card.mount("#card-element");
      }
    });
  }

  pay(templateRef, amount) {
    let dialogRef = this.dialog.open(templateRef, {
      width: "250px",
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.sendIt(amount);
    });
  }

  sendIt(amount) {
    this.cartService.processPayment(
      this.checkoutForm.value,
      amount,
      this.items,
      this.card
    );
  }
}
