"use strict";

export default function SortPhonesFilter(){

    return function ( phones , sortString ){

        let resultPhones = [];

        if(sortString === 'name'){

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
        else if(sortString === 'age'){

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

        return resultPhones;

    }// fd

}//SearchPhonesFilter