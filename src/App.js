import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Icons from './Help/Icons/Icons';

import NewRegistration from './components/NewRegistration/NewRegistration';
import ContactUs from './pages/ContactUs/ContactUs';
import MentorRequest from './pages/Page13MentorRequst/MentorRequest';
import CloseMentor from './pages/PageCloseMentor/CloseMentor';
import Search from './pages/search/Search';
import MentoringOpportunityForm from './pages/Mentoring_opportunity_Form/Mentoring_opportunity_Form';
import Login from './pages/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/icons" element={<Icons />} />

                <Route path="/NewRegistration" element={<NewRegistration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/MentorRequest" element={<MentorRequest />} />
                <Route path="/closementor" element={<CloseMentor />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mentoringopportunityform " element={<MentoringOpportunityForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
