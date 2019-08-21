import { Injectable } from '@angular/core';
import forSale from './forSale';

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
    console.log(this.addedItem);
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
