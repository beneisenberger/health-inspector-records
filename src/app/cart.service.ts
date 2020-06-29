import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { loadStripe } from "@stripe/stripe-js";

export interface Cart {
  artist: string;
  album: string;
  type: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private readonly _cart = new BehaviorSubject<Cart[]>(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  readonly cart$ = this._cart.asObservable();

  addedItem: Cart[] = [];
  checkoutItems: any;
  stripe: any;
  session: any;

  handler;
  confirmation;

  constructor() {}

  // async createSession() {
  //   this.session = await (await stripe).createSource().then(res => {

  //   })
  // }

  get cart(): Cart[] {
    if (this._cart) {
      return this._cart.getValue();
    } else if (JSON.parse(localStorage.getItem("cartItems"))) {
      return JSON.parse(localStorage.getItem("cartItems"));
    } else {
      return [];
    }
  }

  set cart(cart: Cart[]) {
    localStorage.setItem("cartItems", JSON.stringify(cart));
    this._cart.next(cart);
  }

  addItem(addItem) {
    let newItem = {
      artist: addItem.artist,
      album: addItem.album,
      type: addItem.item[0].type,
      price: addItem.item[0].price,
      quantity: 1,
      imageUrl: addItem.imageUrl,
    };
    if (this.cart && this.cart.length > 0) {
      if (this.cart.some((item) => item.album === newItem.album)) {
        let item = this.cart.find((item) => item.album === newItem.album);
        item.quantity++;
      } else {
        this.cart.push(newItem);
      }
    } else {
      const newCart = [];
      newCart.push(newItem);
      this.cart = newCart;
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cart));
  }

  checkout(addedItems, sub, tot, ship) {
    this.checkoutItems = {
      items: addedItems,
      total: tot,
      subtotal: sub,
      shipping: ship,
    };
  }
}
