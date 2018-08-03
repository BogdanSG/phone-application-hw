import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatalogComponent} from "./components/catalog/catalog.component";
import {SinglePhoneComponent} from "./components/single-phone/single-phone.component";

const routes: Routes = [
  { path: '', component: CatalogComponent},
  { path: 'cart', component: CatalogComponent},
  { path: 'phone/:phoneID', component: SinglePhoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
