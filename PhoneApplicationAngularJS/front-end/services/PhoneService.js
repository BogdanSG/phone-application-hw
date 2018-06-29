"use strict";

export default class PhoneService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getPhones(url){

        try{

            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return [];

        }//catch

    }//getPhones

    async getSinglePhone(url){

        try{

            let result = await this.$http.get(url);
            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return null;

        }//catch

    }//getSinglePhone

}//PhoneService
