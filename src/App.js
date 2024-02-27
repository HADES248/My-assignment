import React from 'react';
import Navbar from './componets/Navbar.js';
import About from './componets/About.js';
import './App.css';
import Home from './componets/Home.js';
import Community from './componets/Community.js';
import Purchase from './componets/Purchase.js';
import {
   Routes,
   Route,
   BrowserRouter
 } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}></Route> 
          <Route path='/community' element={<Community/>}></Route>
          <Route path='/purchase' element={<Purchase/>}></Route>
          <Route path="/" element={<Home/>}></Route>	 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
