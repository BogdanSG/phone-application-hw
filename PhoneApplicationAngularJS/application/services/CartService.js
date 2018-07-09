"use strict";


export default class CartService{

    constructor( localStorageService, PhoneService){

       if(localStorageService.get('cart')){
           this.cart = localStorageService.get('cart');
       }//if
       else{
           this.cart = [];
       }//else

       this.localStorageService = localStorageService;

       this.PhoneService = PhoneService;

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

        this.localStorageService.set( 'cart' , this.cart );

        this.removePhoneCallBack = phone => {};

        this.onClearCartCallBack = () => {};

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

        this.localStorageService.clearAll();
        this.cart.length = 0;
        this.onClearCartCallBack();

    }//clearCart

    setCartToCookie(){

        this.localStorageService.set( 'cart' , this.cart );

    }//setCartToCookie

    onRemovePhone(callback){

        this.removePhoneCallBack = callback;

    }//callback

    onClearCart(callback){

        this.onClearCartCallBack = callback;

    }//onClearCart

    removePhone( index ){

        let phone = this.cart.splice( index , 1 )

        this.removePhoneCallBack(phone[0]);

        this.localStorageService.set( 'cart' , this.cart );

    }//removePhone

}//CartService
