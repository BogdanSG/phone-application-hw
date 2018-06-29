"use strict";

export default class CatalogueController{

    constructor($scope, CatalogueService, PhoneService){

        CatalogueService.AddScope($scope);

        PhoneService.getPhones(`./phones/phones.json`)
            .then(phones => {

                $scope.phones = phones;
                $scope.$apply();

            })
            .catch( error => {
                console.log("EXCEPTION: " , error)
            })


    }//constructor

}//CatalogueController