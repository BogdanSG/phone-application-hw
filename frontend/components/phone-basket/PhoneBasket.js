"use strict";

import template from './template.hbs';

import Component from '../component/component';

export default class PhoneBasket extends Component{

    constructor( options ){
        super(options);

        this._title = options.title;

        this._basket = [];

        this._element.innerHTML = template({
            'title': this._title
        });

    }//constructor

    AddToBasket(phone){

        this._basket.push(phone);

        let ul = this._element.querySelector('ul');

        if(ul){

            ul.innerHTML += `<li>${phone.name}</li>`;

        }//if

    }//AddToBasket

    ClearBasket(){

        this._basket = [];

        let ul = this._element.querySelector('ul');

        if(ul){

            while(ul.firstChild){

                ul.firstChild.remove();

            }//while

        }//if

    }//ClearBasket

}//PhoneBasket