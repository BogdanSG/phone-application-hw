"use strict";

export default class CartController{

    constructor($scope, CartService){

        $scope.cart = CartService.getCart();

        $scope.RemoveItem = CartService.removePhoneByIndex.bind(CartService);

    }//constructor

}//CartController