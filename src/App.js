import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { API_URL } from './constants';
import axios from 'axios';

import Contact from './components/Contact';
import Home from './components/Home';
import NewMCUCharacter from './components/NewMCUCharacter';
import RemoveCharacter from './components/RemoveCharacter';
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import NoPage from './components/NoPage';
import McuHero from './components/McuHero';
import UpdateCharacter from './components/UpdateCharacter';
import GetOneCharacter from './components/GetOneCharacter';

function App() {

    return (

      <Routes>

        <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />
          
          <Route path='newCharacter' element={<NewMCUCharacter />} />
          
          <Route path='removeCharacter' element={<RemoveCharacter/>} />
          
          <Route path='getOneCharacter/:name' element={<McuHero />} />
          
          <Route path='getOneCharacter' element={<GetOneCharacter />} />
          
          <Route path='updateMcuCharacter' element={<UpdateCharacter/>}/>
          
          <Route path='gallery' element={<Gallery />} />
          
          <Route path='contact' element={<Contact />} />
          
          <Route path='*' element={<NoPage/>} />

        </Route>
        
      </Routes>

    );
}

export default App;