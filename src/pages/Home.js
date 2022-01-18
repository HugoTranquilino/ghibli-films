import React from "react";
import { Search } from "../components/Search";
import logo from '../image/Studio_Ghibli.png';
import { Films } from "../components/Films";
import { Cards } from '../components/Cards' 
import { FilmsContext } from "../components/FilmsContext";
import { Footer } from "../components/Footer"

function Home() {
    const {
        searchFilms
    } = React.useContext(FilmsContext);

    return(
        <React.Fragment>
            <div className="container">
                <header className="banner">
                    <img className="ghibli_logo" src={logo} alt="Home films" />
                    <Search />
                </header>
                <Films>
                    {!searchFilms.length && <p className="not-found">No se encontro el film buscado</p> }

                    <div className="films__container">
                        {searchFilms.map(film => (
                            <Cards
                                key = {film.id} 
                                image = {film.image}
                                id = {film.id}
                                title = {film.title}
                            />
                        ))}
                    </div>
                </Films>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export { Home };