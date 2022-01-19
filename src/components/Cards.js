import React from "react";
import { Link } from "react-router-dom";
import { FilmsContext } from "./FilmsContext";
import '../styles/cardUI.css'

function Cards(props) {
    const id = props.id;
    const {idFilm, setIdFilm} = React.useContext(FilmsContext)

    const pushDetails = (event) => {
        console.log('id :',id);
        setIdFilm(id);
    };

    return(    
        <Link to={`/details/${id}`} onClick={pushDetails}>    
            <div className="films__card">
                <img className="films__card-image" src={props.image} alt="image film"/>
                <h1 className="card__body-title">{props.title}</h1>
            </div>
        </Link>
    );
}

export { Cards }