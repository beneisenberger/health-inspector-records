import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ArtistsComponent } from "./artists/artists.component";
import { StoreComponent } from "./store/store.component";
import { DiscographyComponent } from "./discography/discography.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { ArtistInfoComponent } from "./artists/artist-info/artist-info.component";
import { NewsComponent } from "./news/news.component";
import { NewPostComponent } from "./news/new-post/new-post.component";
import { FadeDirective } from "./directives/fade.directive";
import {
  environment,
  stripe_publishable_key,
} from "src/environments/environment";
import { NgxStripeModule } from "ngx-stripe";

import * as firebase from "firebase";
firebase.initializeApp(environment.firebase);

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtistsComponent,
    StoreComponent,
    DiscographyComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    ArtistInfoComponent,
    NewsComponent,
    NewPostComponent,
    FadeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxStripeModule.forRoot(stripe_publishable_key),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
