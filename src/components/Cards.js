import React from "react";
import { Link } from "react-router-dom";
import '../styles/cardUI.css'

function Cards(props) {
    const id = props.id;
    
    return(    
        <Link to={`/details/${id}`}>    
            <div className="films__card">
                <img className="films__card-image" src={props.image} alt="image film"/>
                <h1 className="card__body-title">{props.title}</h1>
            </div>
        </Link>
    );
}

export { Cards }