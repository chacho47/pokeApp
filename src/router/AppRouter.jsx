import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../components/Home";
import PokeData from "../components/PokeData";

const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pokeData/:pokeName' element={<PokeData />} />
            </Routes>
        </BrowserRouter>
     );
}

export default AppRouter;