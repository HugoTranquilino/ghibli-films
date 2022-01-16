import React from "react";

const FilmsContext = React.createContext();

function FilmsProvider(props) {
   
    const [searchValue, setSearchValue] = React.useState('');
    const ghibli_api = 'https://ghibliapi.herokuapp.com/';
    const [films, setFilms] = React.useState([]);

    const [filmsDetails, setFilmsDetails] = React.useState([]);
    const [filmsPeople, setFilmsPeople] = React.useState([]);

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
            const films = await fetch(`${ghibli_api}films/`)
            const ghibli_films = await films.json()
            
            const filmsDetails = await fetch(`${ghibli_films[1].url}`)
            const responseDetails = await filmsDetails.json();

            const people = responseDetails.people;
            // console.log(responseDetails)
            // for (let r = 0; r < people.length; r++) {
                const filmsPeople = await fetch(`${people[0]}`)
                const data = await filmsPeople.json();
                setFilmsPeople(data)
            // }

            setFilmsDetails(responseDetails)
            setFilms(ghibli_films)
        } catch (error) {
            console.log(error)
            console.log('fallo la carga')
        }
    }

    React.useEffect(() => {
        ghibli_films(ghibli_api)
    }, []);

    return(
        <FilmsContext.Provider value={{
            searchValue,
            setSearchValue,
            searchFilms,
            filmsDetails,
            filmsPeople
        }}>
            {props.children}
        </FilmsContext.Provider>
    );
}

export { FilmsContext, FilmsProvider }