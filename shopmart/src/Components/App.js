import '../Assets/css/App.css';
import '../Assets/css/utilities.css'
import Header from './Header';
import Footer from './Footer';
import ResortList from './ResortList';
import Hero from './Hero'

import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    {/* <Routes> */}
    <div className="grid grid-row-3" id="main-container">
      <Header/>
        <main>
          <Hero/>
          <ResortList/>
        </main>    
      <Footer/>
    </div>
    {/* </Routes>  */}
   </BrowserRouter>

  )
}

export default App;
