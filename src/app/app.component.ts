import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Health-Inspector-Records";
  visible = false;

  constructor(public router: Router, public cartSerivce: CartService) {}

  openNav() {
    this.visible = true;
  }

  closeNav() {
    this.visible = false;
  }

  navigate(route) {
    this.router.navigateByUrl(route);
    this.closeNav();
  }

  onBack(x: string) {
    if (x === "artists") {
      this.router.navigateByUrl("/artists");
    }
    if (x === "cart") {
      this.router.navigateByUrl("/store");
    }
    if (x === "checkout") {
      this.router.navigateByUrl("/store/cart");
    }
  }
}
