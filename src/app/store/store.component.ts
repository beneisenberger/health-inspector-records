import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import forSale from "../forSale";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  itemsForSale = forSale;
  selectedItem = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    await this.itemsForSale;
    this.selectedItem.length === this.itemsForSale.length;
  }

  addToCart(item, product) {
    if (product.status === "active") {
      this.cartService.addItem(item);
    }
  }
}
