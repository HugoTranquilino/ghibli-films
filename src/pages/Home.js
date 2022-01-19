import React from "react";
import { Search } from "../components/Search";
import logo from '../image/logoStudioGhibli.svg';
import { Films } from "../components/Films";
import { Cards } from '../components/Cards' 
import { FilmsContext } from "../components/FilmsContext";
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom";

function Home() {
    const {
        searchFilms,
        responseFilms
    } = React.useContext(FilmsContext);

    return(
        <React.Fragment>
            <div className="container">
                <header className="banner">
                    <img className="ghibli_logo" src={logo} alt="Home films" />
                    <div className="searchFilm">
                        <Search />
                            {!searchFilms.length && ''}
                            {searchFilms && searchFilms.map((searchFilms, i)=>
                                    <Link to={`/details/${searchFilms.id}`} key={i} className="searchItem">
                                        {searchFilms.title}
                                    </Link>
                            )}
                    </div>
                </header>
                <Films>
                    {!responseFilms.length && <p className="not-found">No fue posible cargar los films</p> }

                    <div className="films__container">
                        {responseFilms.map(film => (
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