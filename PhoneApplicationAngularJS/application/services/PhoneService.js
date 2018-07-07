"use strict";

export default class PhoneService{

    constructor( $http ){

        this.$http = $http;
        this.searchObject = {
            'searchString': '',
            'sortString': 'age'
        };

    }

    async getPhones( url ){

        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return [];

        }//catch
    }

    getSearchObject(){
        return this.searchObject;
    }//getSearchObject

    async getSinglePhone( url ){

        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getSinglePhone: " , ex);
            return null;

        }//catch

    }

}
