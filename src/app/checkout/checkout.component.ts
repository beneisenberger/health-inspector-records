import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  items: any = this.cartService.checkoutItems;

  ngOnInit() {
    console.log(this.items)
  }
}
