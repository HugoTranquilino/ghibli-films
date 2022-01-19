import React from "react";
import { Link } from "react-router-dom";
import imagen from "../image/404.png"
import "../styles/pageNotFound.css"

function PageNotFound() {
    console.log('404')
    return(
        <div className="container">
            <section className="section__notFound">
                <img src={imagen} className="img-notfound" />
                <section className="set__info">
                    <h1 className="section__notFound-Oops">Ooops...</h1>
                    <p className="section__notFound-subtitle">No se ha encontrado página solicitada</p>
                </section>
                <Link to="/" className="btn-home">Regresar al Inicio</Link>
            </section>
        </div>
    );
}

export { PageNotFound }