import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Icons from './Help/Icons/Icons';
import MentorRequest from './components/MentorRequest/MentorRequest';
import HorizontalCard from './components/HorizontalCard/HorizontalCard';

import NewRegistration from './components/New/New';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/MentorRequest" element={<MentorRequest />} />
                <Route path="/NewRegistration" element={<NewRegistration />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/horizontalcard" element={<HorizontalCard />} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;
