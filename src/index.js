import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CharactersFunctional, CharactersClass, Events, Forms, API, JSX, Liste, NPMPaketi } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/API' element={<API />} />
                <Route path='/CharactersClass' element={<CharactersClass />} />
                <Route path='/CharactersFunctional' element={<CharactersFunctional />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/Forms' element={<Forms />} />
                <Route path='/JSX' element={<JSX />} />
                <Route path='/Liste' element={<Liste />} />
                <Route path='/NPMPaketi' element={<NPMPaketi />} />
            </Routes>
    </BrowserRouter>
);
