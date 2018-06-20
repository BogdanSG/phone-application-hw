"use strict";
import template from './template.hbs';
import Component from '../component/component';

export default class PhoneCatalogue extends Component{

    constructor( options ){

        super( options );
        this._phones = options.phones;

        this._phoneSelectedEvent = new CustomEvent('phoneSelected',{
            detail: {
                phoneID: -1
            }
        });

        this._render();

    }//constructor

    _render(){

        this._element.innerHTML = template({
            'phonesArray': this._phones
        });

        this.on( 'click' , this._phoneSelected.bind(this) , '[data-element="phone"]');

    }//_render

    _phoneSelected( event ){

        let target = event.target;


        if( target.matches('a') || target.matches('img') ){

            let parent = target.closest('[data-element="phone"]');

            if(parent){

                console.log( parent.dataset);
                this._phoneSelectedEvent.detail.phoneID = parent.dataset.phoneId;
                this._element.dispatchEvent(this._phoneSelectedEvent);

            }//if

        }//if

    }//_phoneSelected

}
