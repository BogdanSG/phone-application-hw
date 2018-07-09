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

            if($scope.cartPhones){

                $scope.phones = CartService.getFullPhones($scope.phones);

                $scope.PlusOne = phoneIndex => {

                    let phone = $scope.phones[phoneIndex];

                    let cartPhone = $scope.cartPhones.find(elem => {return elem.id === phone.id });

                    cartPhone.amount = phone.amount = ++phone.amount;

                    CartService.setCartToCookie();

                };

                $scope.MinusOne = phoneIndex => {

                    if(phone.amount > 1){

                        let phone = $scope.phones[phoneIndex];

                        let cartPhone = $scope.cartPhones.find(elem => {return elem.id === phone.id });

                        cartPhone.amount = phone.amount = --phone.amount;

                        CartService.setCartToCookie();

                    }//if

                };

                CartService.onRemovePhone(phone => {

                    for(let i = 0; i < $scope.phones.length; i++){

                        if($scope.phones[i].id === phone.id){

                            $scope.phones.splice(i, 1);

                            return;

                        }//if

                    }//for

                });

                CartService.onClearCart(() => {

                    $scope.phones = [];

                });

                $scope.deletePhone = phoneIndex => {

                    $scope.phones.splice(phoneIndex, 1);

                    CartService.removePhone(phoneIndex);

                };

            }//if

        }]

    }//return

}//PhonesList