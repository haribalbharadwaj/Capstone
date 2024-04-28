import React from 'react';
import {createRoot} from 'react-dom/client';
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './bcomponent/Home';
import Movies from './pages/Movies';
import Notfound from './pages/404';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
