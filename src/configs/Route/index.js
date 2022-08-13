import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "../../Pages/Main/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path="/" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;