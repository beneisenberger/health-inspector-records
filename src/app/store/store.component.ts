import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import forSale from '../forSale';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  itemsForSale = forSale;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(item) {
    this.cartService.addItem(item);
  }

}
