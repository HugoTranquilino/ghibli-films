import React from "react";
import { Search } from "../components/Search";
import logo from '../assets/img/Studio_Ghibli.png';
import { Cards } from '../components/Cards' 

function AppUI() {
    return(
        <React.Fragment>
            <img 
                className="ghibli_logo"
                src={logo} 
                alt="ghibli films"
            />
            <Search />
            <h1> hello world</h1>
            <Cards/>
        </React.Fragment>
    );
}

export { AppUI };