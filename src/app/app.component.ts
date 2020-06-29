import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Health-Inspector-Records";
  visible = false;

  constructor(private router: Router) {}

  openNav() {
    document.getElementById("myNav").style.opacity = "100%";
    document.getElementById("myNav").style.zIndex = "2";
    this.visible = true;
  }

  closeNav() {
    document.getElementById("myNav").style.opacity = "0%";
    document.getElementById("myNav").style.zIndex = "-1";
    this.visible = false;
  }

  navigate(route) {
    this.router.navigateByUrl(route);
    this.closeNav();
  }
}
