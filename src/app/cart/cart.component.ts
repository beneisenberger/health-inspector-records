import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  addedItems: Object[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  

  get subtotal() {
    let total = 0;
    this.addedItems.forEach(x => {
      total += x["quantity"] * x["price"];
    })
    return total;
  }

  get shipping() {
    let total = 0;
    this.addedItems.forEach(x => {
      total += x["quantity"] * 1.5;
    })
    return total;
  }

  get total() {
    let total = 0;
    total += this.subtotal + this.shipping;
    return total;
  }

  sendToCheckout() {
    this.cartService.checkout(this.addedItems, this.subtotal, this.total, this.shipping);
    this.router.navigate(['checkout']);
  }

  removeItem(i) {
    JSON.parse(localStorage.getItem('cartItems')).splice(i, 1);
    this.addedItems.splice(i, 1);
  }



  ngOnInit() {
    this.addedItems = this.cartService.pullItems();
  }

}
