"use strict";

export default class SearchSortComponent extends React.Component{

    render() {

        return <div>
            <p>
                Search:
                <input/>
            </p>

            <p>
                Sort by:
                <select>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                </select>
            </p>
        </div>;

    }//render

}//SearchSortComponent