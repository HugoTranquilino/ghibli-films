import React from "react";
// import { CardUI } from "./CardUI";
import './CardUI.css'

function Cards(props) {
    // const ghibli_api = 'https://ghibliapi.herokuapp.com/';
    // const [films, setFilms] = React.useState([]);

    // const ghibli_films = async (ghibli_api) => {
    //     try {
    //         const films = await fetch(ghibli_api+'films/')
    //         const ghibli_films = await films.json()
    //         setFilms(ghibli_films)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // React.useEffect(() => {
    //     ghibli_films(ghibli_api)
    // }, []);

    return(
        // <CardUI films={films} />
        
        <div className="films__card">
            <img className="films__card-image" src={props.image} alt="image film"/>
            {/* <div className="card__body">
                <h1 className="card__body-title">{item.title}</h1>
                <div className="card__body_description">
                    <p className="card__body_description-date">Año de lanzamiento: {item.release_date}</p>
                    <p className="card__body_description-description">
                        Descripcion: {item.director}
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export { Cards }