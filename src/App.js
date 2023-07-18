import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Icons from './Help/Icons/Icons';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/icons" element={<Icons />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
