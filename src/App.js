import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Icons from './Help/Icons/Icons';
import NewRegistration from './components/NewRegistration/NewRegistration';
import ContactUs from './pages/ContactUs/ContactUs';
import MentorRequest from './components/MentorRequest/MentorRequest';
import CloseMentor from './pages/PageCloseMentor/CloseMentor';
import Search from './pages/search/Search';
import Mentoring_opportunity_Form from './components/Mentoring_opportunity_Form/Mentoring_opportunity_Form';
import Login from './pages/Login/Login';
import Profile from './pages/Pofile/Profile';
import Profile2 from './pages/Profile2/Mentee';
import Mentor_Request_Form from './components/Mentor_Request_Form/Mentor_Request_Form';

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
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Profile2" element={<Profile2 />} />
                <Route path="/Mentoring_opportunity_Form"
                    element={<Mentoring_opportunity_Form />} />
                <Route path="/Mentor_Request_Form"
                    element={<Mentor_Request_Form />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
