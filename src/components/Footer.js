import React from "react";

function Footer() {
    return(
        <footer>
            <section className="about">
                <p>
                    Hecho con ❤️ por Hugo Tranquilino
                </p>
            </section>
            <section className="socialMedia">
                    <a href="https://twitter.com/H_TranquiS" target="_blank" className="link-social">Saludame en Twitter</a>
                    <a href="https://github.com/HugoTranquilino/ghibli-films" target="_blank" className="link-social">Repositorio del proyecto</a>
            </section>
        </footer>
    );    
}

export { Footer }