"use strict";

export default function SearchPhonesFilter(){

    return function ( phones , searchString ){

        return phones.filter(
                p =>
                    p.name.toLowerCase()
                          .indexOf( searchString.toLowerCase() ) !== -1
        );

    }// fd

}//SearchPhonesFilter
