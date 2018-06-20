"use strict";

import PhoneCatalogue from '../phone-catalogue/PhoneCatalogue';
import HttpService from '../services/http.service';
import PhoneViewer from '../phone-viewer/PhoneViewer';
import PhoneBasket from '../phone-basket/PhoneBasket';
import Component from "../component/component";


export default class PhonePage extends Component{

    constructor( options ){

        super( options );

        this._load();


    }//constructor

    async onPhoneSelected( event ){


        let phoneID = event.detail.phoneID;

        let phone = await HttpService.send(`public/phones/${phoneID}.json`);

        this._phoneViewer.setPhone(phone);
        this._phoneViewer.show();
        this._catalogue.hide();


    }//onPhoneSelected

    onButtonBack(){

        this._phoneViewer.hide();
        this._catalogue.show();

    }//onButtonBack

    async _load(){


        try{

            this._phoneBasket = this._phoneViewer = new PhoneBasket({
                element: document.querySelector('[data-component="phone-basket"]'),
                title: 'Phone Basket'
            });

            this._phoneViewer = new PhoneViewer({
                element: document.querySelector('[data-component="phone-viewer"]'),
                basket: this._phoneBasket
            });

            let phones = await  HttpService.send( 'public/phones/phones.json');
            this._catalogue = new PhoneCatalogue({
                element: document.querySelector('[data-component="phone-catalogue"]'),
                phones: phones,
            });

            this.on('phoneSelected' , this.onPhoneSelected.bind(this) , '[data-component="phone-catalogue"]');
            this.on('moveBack' , this.onButtonBack.bind(this) , '[data-component="phone-viewer"]');

        }//try
        catch(ex){
            console.log('HTTP SERVICE ERROR: ' , ex);
        }//catch

    }

}