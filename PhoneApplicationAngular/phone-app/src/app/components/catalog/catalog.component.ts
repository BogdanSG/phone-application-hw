import { Component, OnInit } from '@angular/core';

import { CatalogService } from '../../services/catalog.service'
import { CartService } from '../../services/cart.service'
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  phones: any = [];
  cartPhones: any = false;
  searchObject: any;

  constructor(private CatalogService: CatalogService, private CartService : CartService, private ActivatedRoute: ActivatedRoute) {

    this.searchObject = this.CatalogService.getSearchObject();

    if(this.ActivatedRoute.snapshot.routeConfig.path === 'cart'){

      this.cartPhones = this.CartService.getCart();

      this.CartService.onRemovePhone(phone => {

        for(let i = 0; i < this.phones.length; i++){

          if(this.phones[i].id === phone.id){

            this.phones.splice(i, 1);

            let phones = this.phones.splice(0);

            this.phones = [];

            this.phones = phones;

            return;

          }//if

        }//for

      });

      this.CartService.onClearCart(() => {

        this.phones = [];

      });

    }//if

  }//constructor

  ngOnInit() {

    this.CatalogService.getPhones().subscribe(phones => {

      if(this.cartPhones){

        this.phones = this.CartService.getFullPhones(phones);

      }//if
      else{

        this.phones = phones;

      }//esle

    });

  }//ngOnInit

  PlusOne(phoneIndex) {

    let phone = this.phones[phoneIndex];

    let cartPhone = this.cartPhones.find(elem => {return elem.id === phone.id });

    cartPhone.amount = phone.amount = ++phone.amount;

    this.CartService.setCartToCookie();

  };

  MinusOne(phoneIndex) {

    let phone = this.phones[phoneIndex];

    if(phone.amount > 1){

      let cartPhone = this.cartPhones.find(elem => {return elem.id === phone.id });

      cartPhone.amount = phone.amount = --phone.amount;

      this.CartService.setCartToCookie();

    }//if

  };

  deletePhone(phoneIndex) {

    this.phones.splice(phoneIndex, 1);

    let phones = this.phones.splice(0);

    this.phones = [];

    this.phones = phones;

    this.CartService.removePhone(phoneIndex);

  };

}//CatalogComponent
