import React from "react";

const FilmsContext = React.createContext();

function FilmsProvider(props) {
   
    const [searchValue, setSearchValue] = React.useState('');
    const ghibli_api = 'https://ghibliapi.herokuapp.com/';
    const [films, setFilms] = React.useState([]);

    let searchFilms = [];

    if (!searchValue.length >= 1) {
        searchFilms = films;
    } else {
        searchFilms = films.filter(film => {
            const NameFilm = film.title.toLowerCase();
            const SearchFilm = searchValue.toLowerCase();
            return NameFilm.includes(SearchFilm);
        })
    }

    const ghibli_films = async (ghibli_api) => {
        try {
            const films = await fetch(ghibli_api+'films/')
            const ghibli_films = await films.json()
            setFilms(ghibli_films)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        ghibli_films(ghibli_api)
    }, []);

    return(
        <FilmsContext.Provider value={{
            searchValue,
            setSearchValue,
            searchFilms
        }}>
            {props.children}
        </FilmsContext.Provider>
    );
}

export { FilmsContext, FilmsProvider }