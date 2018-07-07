"use strict";


export default function PhonesList(){

    return {

        restrict: 'EAC',
        scope:{
            queryObject: '=searchObject',
            phones: '=phonesListArray',
            cartPhones: '='
        },//scope
        templateUrl: 'templates/directives/phones-list.html',
        controller: ['$scope' , 'CartService', function ( $scope, CartService ){

            $scope.PlusOne = phone => {

                let cartPhone = $scope.cartPhones.find(elem => {return elem.id === phone.id });

                cartPhone.amount = phone.amount = ++phone.amount;

                CartService.setCartToCookie();

            };

            $scope.MinusOne = phone => {

                if(phone.amount > 1){

                    let cartPhone = $scope.cartPhones.find(elem => {return elem.id === phone.id });

                    cartPhone.amount = phone.amount = --phone.amount;

                    CartService.setCartToCookie();

                }//if

            };

            $scope.deletePhone = phone => {

                let cartPhoneIndex = $scope.cartPhones.findIndex(elem => {return elem.id === phone.id });

                let phoneIndex = $scope.phones.findIndex(elem => {return elem.id === phone.id });

                $scope.phones.splice(0, 1);

                CartService.removePhone(cartPhoneIndex);

            };

        }]

    }//return

}//PhonesList