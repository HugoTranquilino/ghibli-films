import React from "react";
import './CardUI.css'

function Cards(props) {
    return(        
        <div className="films__card">
            <img className="films__card-image" src={props.image} alt="image film"/>
            <h1 className="card__body-title">{props.title}</h1>
        </div>
    );
}

export { Cards }