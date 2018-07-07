"use strict";

export  default class PhoneController{

    constructor($scope , phone ){

        $scope.phone = phone;
        $scope.thumbnail = `${phone.images[0]}`;

    }

}