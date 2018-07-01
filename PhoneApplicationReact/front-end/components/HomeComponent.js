"use strict";

import SearchSortComponent from './SearchSortComponent';
import ShoppingCartComponent from './ShoppingCartComponent';
import CatalogueComponent from './CatalogueComponent';
import PhoneComponent from './PhoneComponent';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

export default class HomeComponent extends React.Component{

    constructor(props){

        super(props);

        this._ShoppingCartComponent = <ShoppingCartComponent title="Shopping Cart" emptyCart="Cart is empty!"/>;

    }//constructor

    render() {

        return <div>

            <div>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-md-2">

                            <SearchSortComponent/>

                            {this._ShoppingCartComponent}

                        </div>

                        <Router>
                            <Switch>
                                <Route exact path="/PhoneApplicationReact/public/" component={CatalogueComponent}/>
                                <Route exact path="/PhoneApplicationReact/public/single-phone/:id" component={PhoneComponent}/>
                            </Switch>
                        </Router>

                    </div>
                </div>
            </div>

        </div>;

    }//render

}//HomeComponent