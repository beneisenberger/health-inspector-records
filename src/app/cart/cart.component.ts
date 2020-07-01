import { Component, OnInit } from "@angular/core";
import { CartService, Cart } from "../services/cart.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart: Cart[];

  constructor(
    public cartService: CartService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((val) => (this.cart = val));
  }

  get subtotal() {
    let total = 0;
    this.cart.forEach((x) => {
      total += x["quantity"] * x["price"];
    });
    return total;
  }

  get shipping() {
    let quantity = 0;
    this.cart.forEach((x) => {
      quantity += x["quantity"];
    });
    let total = 0;
    if (quantity === 0) {
      total = 0;
    } else if (quantity === 1) {
      total = 3;
    } else if (quantity === 2 || quantity === 3) {
      total = 5;
    } else if (quantity === 4 || quantity === 5) {
      total = 8;
    } else {
      total = 10;
    }
    return total;
  }

  get total() {
    let total = 0;
    total += this.subtotal + this.shipping;
    return total;
  }

  onBack() {
    this.location.back();
  }

  sendToCheckout() {
    this.cartService.checkout(
      this.cart,
      this.subtotal,
      this.total,
      this.shipping
    );
    this.router.navigate(["checkout"]);
  }

  removeItem(i) {
    JSON.parse(localStorage.getItem("cartItems")).splice(i, 1);
    this.cartService.cart.splice(i, 1);
    localStorage.setItem("cartItems", JSON.stringify(this.cart));
  }
}
