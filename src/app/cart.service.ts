import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cart {
  artist: string,
  album: string,
  type: string,
  price: number,
  quantity: number,
  imageUrl: string
}

let startingCart = JSON.parse(localStorage.getItem('cartItems'));


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _cart = new BehaviorSubject<Cart[]>(startingCart);
  readonly cart$ = this._cart.asObservable();

  addedItem: Cart[] = [];
  checkoutItems: any;

  constructor() { }

  get cart(): Cart[] {
    return this._cart.getValue();
  }

  set cart(updatedCart: Cart[]) {
    this._cart.next(updatedCart);
  }

  addItem(addItem) {
    let newItem = {
      artist: addItem.artist,
      album: addItem.album,
      type: addItem.item[0].type,
      price: addItem.item[0].price,
      quantity: 1,
      imageUrl: addItem.imageUrl
    }
    this.cart = [...this.cart, newItem];
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  pullItems() {
    return JSON.parse(localStorage.getItem('cartItems'));
  }

  checkout(addedItems, sub, tot, ship) {
    this.checkoutItems = {
      items: addedItems,
      total: tot,
      subtotal: sub,
      shipping: ship
    }
  }

}
