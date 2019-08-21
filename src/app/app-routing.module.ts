import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DiscographyComponent } from './discography/discography.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent } from './store/store.component';
import { ArtistsComponent } from './artists/artists.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'releases', component: DiscographyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'store', component: StoreComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'store/cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: '/artists'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
