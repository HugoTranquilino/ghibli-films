import React from "react";
import { FilmsContext } from "../FilmsContext";
import './Search.css';

function Search() {
    const {searchValue,setSearchValue} = React.useContext(FilmsContext);
    
    const onSearchValue = (event) => {
        console.log(event.target.value);
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