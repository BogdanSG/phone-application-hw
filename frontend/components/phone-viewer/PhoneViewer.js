"use strict";

import template from './template.hbs';

import Component from '../component/component';

export default class PhoneViewer extends Component{

    constructor( options ){
        super(options);

        this._basket = options.basket;

    }//constructor

    setPhone( phone ){

        this._phone = phone;
        this._render();

    }//setPhone

    _render(){

        this._element.innerHTML = template({
            'phone': this._phone
        });

        this.on('click' , this._goBack.bind(this) , '[data-element="button-back"]' );
        this.on('click' , this._onAddToBasket.bind(this) , '[data-element="button-add-basket"]' );

    }//_render

    _goBack( ){
        
        this._phone = null;

        let backEvent = new CustomEvent('moveBack');
        this._element.dispatchEvent(backEvent);

    }//_goBack

    _onAddToBasket(){

        this._basket.AddToBasket(this._phone);

    }//_onAddToBasket

}