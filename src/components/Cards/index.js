import React from "react";
import { CardUI } from "./CardUI";

function Cards() {
    const ghibli_api = 'https://ghibliapi.herokuapp.com/';
    const [films, setFilms] = React.useState([]);

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
        <CardUI films={films} />
    );
}

export { Cards }