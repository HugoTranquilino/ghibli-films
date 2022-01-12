import React from "react";
import { Search } from "../components/Search";
import logo from '../assets/img/Studio_Ghibli.png';
import { Cards } from '../components/Cards' 

function AppUI() {
    return(
        <React.Fragment>
            <header className="banner">
                <img className="ghibli_logo" src={logo} alt="ghibli films" />
                <Search />
            </header>
            <Cards/>
        </React.Fragment>
    );
}

export { AppUI };