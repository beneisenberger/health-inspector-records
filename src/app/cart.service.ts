import { Injectable } from '@angular/core';
import forSale from './forSale';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

itemsForSale: Object[] = forSale;
addedItem: Object[] = [];
checkoutItems: any;

  constructor() { }

  addItem(addItem) {
    let itemAdded = {
      artist: addItem.artist,
      album: addItem.album,
      type: addItem.item[0].type,
      price: addItem.item[0].price,
      quantity: 1,
      imageUrl: addItem.imageUrl
    }
    this.addedItem.push(itemAdded);
    localStorage.setItem('cartItems', JSON.stringify(this.addedItem));
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
