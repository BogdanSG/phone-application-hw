import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<any>;
  private onRemovePhoneCallBack: any;
  private onClearCartCallBack: any;

  constructor(private CookieService: CookieService) {

    let cart = JSON.parse(this.CookieService.get('cart'));

    if(cart && Array.isArray(cart)){
      this.cart = cart;
    }//if
    else{
      this.cart = [];
    }//else

    this.onRemovePhoneCallBack = phone => {};

    this.onClearCartCallBack = () => {};

  }//constructor

  getCart(){

    return this.cart;

  }//getCart

  addPhone( phone ){

    let exists = this.cart.some( p => {
      return p.id === phone.id;
    } );

    if(!exists){
      this.cart.push( this._getSimplePhone( phone ) );
    }//if
    else{

      for ( let i = 0 ; i < this.cart.length ;  i++ ){

        let p = this.cart[i];

        if(p.id === phone.id){

          p.amount++;

          break;

        }//if

      }//for i

    }//else

    this.setCartToCookie();

  }//addPhone

  _getSimplePhone( phone ){

    return {
      'id' : phone.id,
      'amount' : phone.amount || 1,
      'name' : phone.name,
    };

  }//_getSimplePhone

  getFullPhones(phones){

    let fullPhones;

    fullPhones = phones.filter(phone => {

      return this.cart.some( p => {
        return p.id === phone.id;
      } );

    });

    //amount

    fullPhones.forEach(phone => {

      phone.amount = this.cart.find(elem => { return elem.id === phone.id }).amount;

    });

    return fullPhones;

  }//getFullPhones

  clearCart(){

    this.CookieService.set('cart', JSON.stringify([]));
    this.cart.length = 0;
    this.onClearCartCallBack();

  }//clearCart

  setCartToCookie(){

    this.CookieService.set('cart', JSON.stringify(this.cart));

  }//setCartToCookie

  onRemovePhone(callback){

    this.onRemovePhoneCallBack = callback;

  }//callback

  onClearCart(callback){

    this.onClearCartCallBack = callback;

  }//onClearCart

  removePhone(index){

    let phone = this.cart.splice( index , 1 );

    this.onRemovePhoneCallBack(phone[0]);

    this.CookieService.set('cart', JSON.stringify(this.cart));

  }//removePhone

}//CartService
