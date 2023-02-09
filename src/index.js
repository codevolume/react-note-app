import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBar from './components/SideBar-component/sidebar.component';
import SingleNote from './components/Notes-component/singleNote.component'

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <SideBar />
  
    <BrowserRouter>
      <Routes>
        <Route path='/note/:id' element={<SingleNote />}/>
      </Routes>
    </BrowserRouter>
  </div>
);