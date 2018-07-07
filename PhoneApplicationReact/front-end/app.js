"use strict";

import HomeComponent from './components/HomeComponent';
import { Provider } from  'react-redux';
import { createStore } from 'redux';

let cookieCart = Cookies.get('cart');

const cartState = cookieCart ? cookieCart : [];

const reducer = (state = cartState, action) => {

    if(action.type === 'ADD_TO_CART'){

        let exists = cartState.some( p => {
            return p.id === phone.id;
        });

        let copy = state.slice(0);

        if(!exists){
            copy.push( action.phone );
        }//if
        else{

            for (let i = 0; i < this.cart.length; i++){

                let p = copy[i];

                if(p.id === action.phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        Cookies.set('cart', copy);

        return copy;

    }//if

    return state;

};

const cartStore = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <Provider store={cartStore}>
            <HomeComponent/>
        </Provider>,
        document.querySelector('#root')
    );

});