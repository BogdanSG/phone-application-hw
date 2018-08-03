import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SinglePhoneComponent } from './components/single-phone/single-phone.component';
import { CartComponent } from './components/cart/cart.component';

import { CookieService } from 'ngx-cookie-service';
import {FormsModule} from "@angular/forms";
import {CartService} from "./services/cart.service";
import {CatalogService} from "./services/catalog.service";
import { searchPhonesPipe } from './pipes/search-phones.pipe';
import { sortPhonesePipe } from './pipes/sort-phonese.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SinglePhoneComponent,
    CartComponent,
    searchPhonesPipe, searchPhonesPipe, sortPhonesePipe, HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService, CartService, CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
