import React from "react";

function CardUI(props) {

    const films = props.films;
    const pelis = films.map((item,index)=>(
        <div key={index} className="films__card">
            <img src={item.image} alt="image film"/>
            <h1 className="films__cards-title">{item.title}</h1>
            <p>Año de lanzamiento: {item.release_date}</p>
            <div className="">
                <p className="films__cards-description">{item.description}</p>
            </div>
        </div>
    )); 
    
    return(
        <div className="films">
            {pelis}
        </div>
    ); 
}

export { CardUI }