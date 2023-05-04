import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage';
import ResortListPage from '../Pages/ResortListPage';
import LoginPage from '../Pages/LoginPage'
import RegistrationPage from '../Pages/RegistrationPage'
import ResortDescriptionPage from '../Pages/ResortDescriptionPage'

import '../Assets/css/App.css';
import '../Assets/css/utilities.css'



function App() {
  return (
    <BrowserRouter>
     <Routes>     
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/resorts' element={<ResortListPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegistrationPage/>}/>
    <Route path='/resorts/:id' element={<ResortDescriptionPage/>}/>
     </Routes>  
   </BrowserRouter>

  )
}

export default App;
