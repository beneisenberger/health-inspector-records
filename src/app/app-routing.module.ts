import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DiscographyComponent } from "./discography/discography.component";
import { ContactComponent } from "./contact/contact.component";
import { StoreComponent } from "./store/store.component";
import { ArtistsComponent } from "./artists/artists.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ArtistInfoComponent } from "./artists/artist-info/artist-info.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "releases", component: DiscographyComponent },
  { path: "contact", component: ContactComponent },
  { path: "store", component: StoreComponent },
  { path: "artists", component: ArtistsComponent },
  { path: "artists/:id", component: ArtistInfoComponent },
  { path: "store/cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "**", redirectTo: "news" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
