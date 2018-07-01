"use strict";

const NavLink = ReactRouterDOM.NavLink;

export default class CatalogueComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = { 'phones': [] };

        this._GetPhones('./phones/phones.json');

    }//constructor

    render(){

        return <div className="col-md-10">
            <ul className="phones">
                {
                    this.state.phones.map(phone => {

                        return <li className="thumbnail">
                            <NavLink to={`single-phone/${phone.id}`} className="thumb">
                                <img alt={phone.name} src={phone.imageUrl}/>
                            </NavLink>
                            <NavLink to={`single-phone/${phone.id}`}>{phone.name}</NavLink>
                            <p>{phone.snippet}</p>
                        </li>;

                    })
                }
            </ul>
        </div>;

    }//render

    _GetPhones(url){

        axios.get(url)
            .then(phones => {

                this.state.phones = phones.data;

                this.setState(this.state.phones);

            }).catch(error => {
            console.log(error);
        });

    }//_GetPhones

}//CatalogueComponent