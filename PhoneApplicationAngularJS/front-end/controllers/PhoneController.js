"use strict";

export  default class PhoneController{

    constructor($scope, $routeParams, CartService, PhoneService){

        let id = $routeParams.phoneID;

        this.$scope = $scope;

        this.$scope.addPhoneToCart = phone => { CartService.addPhone(phone) };

        PhoneService.getSinglePhone(`./phones/${id}.json`)
            .then(phone => {
                    $scope.phone = phone;
                    $scope.thumbnail = phone.images[0];
                    $scope.$apply();
                }
            )
            .catch( error => {
                console.log('error' , error);
            });

        this.$scope.setThumbnail = this._setThumbnail.bind(this);

    }

    _setThumbnail(photo){

        this.$scope.thumbnail = photo;

    }//_setThumbnail

}