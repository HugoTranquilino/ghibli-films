import React from "react";
import { Cards } from "../Cards";

function Films(props) {
    return(
        <section>
            {props.children}
        </section>
    );
}

export { Films }