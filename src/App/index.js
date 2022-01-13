import React from "react";
import { FilmsProvider } from "../components/FilmsContext";
import { AppUI } from "./AppUI";

function App() {
    return(
        <FilmsProvider>
            <AppUI />
        </FilmsProvider>
    );
}

export default App;