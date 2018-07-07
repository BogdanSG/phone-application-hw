"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService , phones, cart){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

        $scope.cartPhones = false;

        if(cart){

            $scope.cartPhones = cart;

            $scope.phones = $scope.phones.filter(phone => {

                return cart.some( p => {
                    return p.id === phone.id;
                } );

            });

            //amount

            $scope.phones.forEach(phone => {

                phone.amount = cart.find(elem => { return elem.id === phone.id }).amount;

            });

        }//if

    }//constructor

}