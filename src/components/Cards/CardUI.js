import React from "react";
import './CardUI.css'

function CardUI(props) {

    const films = props.films;
    const pelis = films.map((item,index)=>(
        <div key={index} className="films__card">
            <img className="films__card-image" src={item.image} alt="image film"/>
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
    )); 
    
    return(
        <div className="films__container">
            {pelis}
        </div>
    ); 
}

export { CardUI }