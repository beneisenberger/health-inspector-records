import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.scss"],
})
export class ArtistsComponent implements OnInit {
  isVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToArtist(url: string) {
    this.router.navigateByUrl(url);
  }
}
