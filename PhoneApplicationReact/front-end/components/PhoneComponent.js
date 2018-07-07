"use strict";

const NavLink = ReactRouterDOM.NavLink;

export default class PhoneComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = { 'phone': null, 'thumbnail': null };

        this._GetPhone(`../phones/${this.props.match.params.id}.json`);

    }//constructor

    render(){

        return <div>

            {
                this.state.phone ? <div>

                    <img className="phone" src={`../${this.state.thumbnail}`}/>

                    <NavLink to="/PhoneApplicationReact/public/">Home</NavLink>
                    <button onClick={this.addPhoneToCart.bind(this, this.state.phone)}>Add to basket</button>

                    <h1>{this.state.phone.name}</h1>

                    <p>{this.state.phone.description}</p>

                    <ul className="phone-thumbs">

                        {
                            this.state.phone.images.map(photo => {
                                return <li>
                                    <img onClick={this.setThumbnail.bind(this, photo)} src={`../${photo}`}/>
                                </li>
                            })
                        }
                    </ul>

                </div> : ''
            }

        </div>;

    }//render

    addPhoneToCart(phone){

        this.props.addToCart({
            'id' : phone.id,
            'amount' : 1,
            'name' : phone.name,
        });

    }//addPhoneToCart

    setThumbnail(photo){

        this.state.thumbnail = photo;

        this.setState(this.state);

    }//setThumbnail

    _GetPhone(url){

        axios.get(url)
            .then(phone => {

                this.state.phone = phone.data;

                this.state.thumbnail = this.state.phone.images[0];

                this.setState(this.state);

            }).catch(error => {
            console.log(error);
        });

    }//_GetPhone

}//PhoneComponent