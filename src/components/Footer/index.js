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
                <a className="link-social" href="#">twitter</a>
                <a className="link-social" href="#">ghithub</a>
                {/* <Link to="">Twitter</Link>
                <Link to="">Ghithub</Link> */}
            </section>
        </footer>
    );    
}

export { Footer }