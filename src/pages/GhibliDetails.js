import React from "react";
import "../components/css/ghibliDetails.css"
import { useParams } from "react-router-dom";

function GhibliDetails(props) {
    const {id} = useParams();
    const ghibli_api = 'https://ghibliapi.herokuapp.com/';

    const [filmsDetail, setFilmsDetail] = React.useState([]);
   
    const ghibli_films = async (ghibli_api) => {
        try {
            const films = await fetch(`${ghibli_api}films/${id}`)
            const ghibli_films = await films.json()
                       
            setFilmsDetail(ghibli_films)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        ghibli_films(ghibli_api)
    }, []);
    
    return(
        <section className="container__details">
            <section className="details__banner">
                <img className="details__banner-img" src={filmsDetail.movie_banner}/>
                <h1 className="details__banner-title">{filmsDetail.title}</h1>
            </section>
            
            <section className="section-info">
                <h2 className="details-age">Año de lanzamiento: {filmsDetail.release_date}</h2>

                <section className="container__info">
                    <section className="container__info-description">
                        <p className="description">{filmsDetail.description}</p>
                    </section>
                    <section className="container__info-film">
                        <h3 className="details_subtitle">Director: {filmsDetail.director}</h3>
                        <h3 className="details_subtitle">Productor: {filmsDetail.producer}</h3>
                    </section>
                </section>

                <section className="container__people">
                    {/* <p className="people_name">{filmsPeople.name}</p> */}
                </section>
            </section>
        </section>
    );
}

export { GhibliDetails }