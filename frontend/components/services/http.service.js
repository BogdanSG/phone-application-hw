"use strict";


export default class HttpService{


    static send(url , METHOD = 'GET'){

           return new Promise( ( resolve , reject )=>{

               let request = new XMLHttpRequest();
               request.open(METHOD , url , true);

               request.send();

               request.onerror = ()=>{
                   reject(
                       {
                            status: request.status,
                            statusText: request.statusText
                       }

                   );
               };

               request.onreadystatechange = ()=>{

                   if(request.status === 200 && request.responseText){
                        resolve( JSON.parse(request.responseText) );
                   }//if

               };

           } );

    }//send

}