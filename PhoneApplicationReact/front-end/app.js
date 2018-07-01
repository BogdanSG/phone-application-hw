"use strict";

import HomeComponent from './components/HomeComponent';

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <HomeComponent/>,
        document.querySelector('#root')
    );

});