"use strict";

export default class ShoppingCartComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = { 'cart': this.props.cart };

    }//constructor

    render(){

        let EmptyStyle = { 'color': 'red' };

        let XStyle = { 'color': 'red', 'fontSize': '18px', 'cursor': 'pointer' };

        return <div>
            <p>{this.props.title}</p>

            {this.state.cart.length === 0 ? <div style={EmptyStyle}>{this.props.emptyCart}</div> : ''}

            <ul>

                {
                    this.state.cart.map(cartItem => {

                        return <li>

                            <span>{cartItem.name}</span>
                            <span>{`Amount: (${cartItem.amount})`}</span>
                            <span style={XStyle}>X</span>

                        </li>;

                    })
                }

            </ul>
        </div>;

    }//render

}//ShoppingCartComponent