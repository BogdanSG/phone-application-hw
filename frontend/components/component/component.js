"use strict";


export default class Component{

    constructor( options ){

        this._element = options.element;

    }

    show(){
        this._element.classList.remove('js-hidden');
    }

    hide(){
        this._element.classList.add('js-hidden');
    }

    on(eventName , callback , selector ){


        if(selector){

            let target = this._element.querySelectorAll( selector );

            if(target){
                target.forEach( ( elem )=>{
                    elem.addEventListener( eventName , callback );
                } );
            }//if

        }//if


    }//on

}