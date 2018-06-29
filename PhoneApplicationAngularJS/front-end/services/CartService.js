"use strict";

export default class CartService{

    constructor($cookies){

       this.cart = [];

       this.$cookies = $cookies;

       try {

           let cookies = JSON.parse(this.$cookies.get('cart'));

           if(cookies && Array.isArray(cookies)){

               this.cart = cookies;

           }//if

       }//try
       catch (Exception) {

           console.log('Exception: ', Exception);

       }//catch

    }//constructor

    getCart(){
        return this.cart;
    }//getCart

    addPhone(phone){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        });

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for (let i = 0; i < this.cart.length; i++){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        this.$cookies.put('cart', JSON.stringify(this.cart));

    }//addPhone

    _getSimplePhone(phone){

        return {
            'id' : phone.id,
            'amount' : 1,
            'name' : phone.name,
        };

    }//_getSimplePhone

    removePhoneByIndex(index){

        this.cart.splice(index, 1);

        this.$cookies.put('cart', JSON.stringify(this.cart));

    }//removePhone

}//CartService
