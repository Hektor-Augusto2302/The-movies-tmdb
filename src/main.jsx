import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import App from './App.jsx';
import Home from '../src/pages/Home';
import Movies from '../src/pages/Movies';
import Search from '../src/pages/Search';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movies />}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
