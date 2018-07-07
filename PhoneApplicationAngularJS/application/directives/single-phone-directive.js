"use strict";

export default function SinglePhoneDirective(){

    return {

        restrict: 'EA',
        scope:{
            phone: '=',
            thumbnail: '='
        },
        templateUrl: 'templates/directives/single-phone-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.addPhoneToCart = function ( phone ){
                CartService.addPhone( phone );
            };

            $scope.setThumbnail = function (photo){
                $scope.thumbnail = photo;
            };

        } ],
        link: function ( scope, element, attrs, controller ){

            $(document).ready( ()=>{

                $('#PhonesOwlCarousel').owlCarousel({
                    items: 2,
                    nav: true,
                    autoWidth: true,
                    margin: 10
                });

            } );

        },

    }

} //SinglePhoneDirective