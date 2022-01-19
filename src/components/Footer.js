import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return(
        <footer>
            <section className="about">
                <p>
                    Hecho con ❤️ por Hugo Tranquilino
                </p>
            </section>
            <section className="socialMedia">
                <div>
                    <a href="https://twitter.com/H_TranquiS" className="link-social">Saludame en Twitter</a>
                </div>
                <div>
                    <a href="https://github.com/HugoTranquilino/ghibli-films" className="link-social">Repositorio del proyecto</a>
                </div>
            </section>
        </footer>
    );    
}

export { Footer }