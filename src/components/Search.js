import React from "react";
import { FilmsContext } from "./FilmsContext";
import '../styles/search.css';

function Search() {
    const {searchValue,setSearchValue} = React.useContext(FilmsContext);
    
    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input
            className="search"
            placeholder="Buscar ..."
            value={ searchValue }
            onChange={ onSearchValue }
        />
    );
}

export { Search }