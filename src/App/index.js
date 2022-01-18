import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsProvider } from "../components/FilmsContext";
import { GhibliDetails } from "../pages/GhibliDetails";
import { PageNotFound } from "../pages/PageNotFound"
import { Home } from "../pages/Home";

function App() {
    return(
        <BrowserRouter>
            <FilmsProvider>
                <Routes>
                    <Route path="/" exact element={< Home />}/> 
                    <Route path="/details/:id" exact element={<GhibliDetails />}/> 
                    <Route path="/*" element={<PageNotFound />}/> 
                </Routes>
            </FilmsProvider>
        </BrowserRouter>
    );
}

export default App;