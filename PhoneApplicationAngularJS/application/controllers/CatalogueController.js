"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService , phones, cart){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

        $scope.cartPhones = cart;

    }//constructor

}