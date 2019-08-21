import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  itemsForSale = this.cartService.itemsForSale;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(addItem) {
    this.cartService.addItem(addItem);
  }

}
