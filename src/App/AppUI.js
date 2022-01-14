import React from "react";
import { Search } from "../components/Search";
import logo from '../assets/img/Studio_Ghibli.png';
// import logo from '../assets/img/ghibli.png';
import { Films } from "../components/Films";
import { Cards } from '../components/Cards' 
import { FilmsContext } from "../components/FilmsContext";

function AppUI() {
    const {
        searchFilms
    } = React.useContext(FilmsContext);

    return(
        <React.Fragment>
            <header className="banner">
                <img className="ghibli_logo" src={logo} alt="ghibli films" />
                <Search />
            </header>
            <Films>
                <div className="films__container">
                    {searchFilms.map(film => (
                        <Cards
                            key = {film.id} 
                            image = {film.image}
                        />
                    ))}
                </div>
            </Films>
        </React.Fragment>
    );
}

export { AppUI };