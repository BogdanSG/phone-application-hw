"use strict";

export default class CatalogueService {

    constructor(){

        this.phones = [];

    }//constructor

    AddScope($scope){

        this.$scope = $scope;

    }//AddScope

    ApplyPhones(phones){

        if(this.$scope){

            this.$scope.phones = phones;
            this.$scope.$apply();

        }//if

    }//GetPhones

}//CatalogueService