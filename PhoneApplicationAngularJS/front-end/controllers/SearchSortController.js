"use strict";

export default class SearchSortController {

    constructor($scope, CatalogueService, PhoneService){

        $scope.sortSelectedItem = 'age';

        $scope.search = '';

        $scope.$watch('search', (text) => {

            if(text){

                PhoneService.getPhones(`./phones/phones.json`)
                    .then(phones => {

                        let Lowertext = text.toString().toLocaleLowerCase();

                        let resultPhones = phones.filter( ( phone )=>{

                            return phone.name.toLowerCase().indexOf( Lowertext ) !== -1;

                        } );

                        CatalogueService.ApplyPhones(resultPhones);

                    })
                    .catch( error => {
                        console.log("EXCEPTION: " , error)
                    })

            }//if

        });

        $scope.sortSelectedChange = () => {

            $scope.search = '';

            PhoneService.getPhones(`./phones/phones.json`)
                .then(phones => {

                    let resultPhones = phones;

                    if($scope.sortSelectedItem === 'name'){

                        resultPhones = phones.sort( ( left , right )=>{

                            if( left.name > right.name ){
                                return 1;
                            }//if
                            else if( left.name === right.name ){
                                return 0;
                            }//else if

                            return -1;

                        } );

                    }//if
                    else if($scope.sortSelectedItem === 'age'){

                        resultPhones = phones.sort( ( left , right )=>{

                            if( +left.age > +right.age ){
                                return 1;
                            }//if
                            else if( +left.age === +right.age ){
                                return 0;
                            }//else if

                            return -1;

                        } );

                    }//else if

                    CatalogueService.ApplyPhones(resultPhones);

                })
                .catch( error => {
                    console.log("EXCEPTION: " , error)
                })

        };

    }//constructore

}//SearchSortController