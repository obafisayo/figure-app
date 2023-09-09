import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Masterplan from "./Pages/Masterplan";
import Culture from "./Pages/Culture";
import Careers from "./Pages/Careers";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Statement from "./Pages/Statement";
import EnteredDiv from "./Components/EnteredDiv";

function App() {
  // the parameters here are in true and false to determine which event is to be carried out
  function removeAndAdd(removeLogo, addLogo, removeAbout, addAbout, removeMasterPlan, addMasterPlan, removeCulture, addCulture, removeCareer, addCareer) {
    removeLogo &&  document.querySelector(".navigation__home-link").classList.remove('active-logo')
    removeAbout && document.querySelector(".about__nav-link").classList.remove('active')
    removeMasterPlan && document.querySelector(".master__nav-link").classList.remove('active')
    removeCulture && document.querySelector(".culture__nav-link").classList.remove('active')
    removeCareer && document.querySelector(".career__nav-link").classList.remove('active')
    addLogo && document.querySelector(".navigation__home-link").classList.add('active-logo')
    addAbout && document.querySelector(".about__nav-link").classList.add('active')
    addMasterPlan && document.querySelector(".master__nav-link").classList.add('active')
    addCulture && document.querySelector(".culture__nav-link").classList.add('active')
    addCareer && document.querySelector(".career__nav-link").classList.add('active')
  }

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<EnteredDiv element={<Home/>} threshold={0} whenDivIsentered={() => removeAndAdd(true, false, true, false, true, false, true, false, true, false)}/>} />
          <Route path="/about-us" element={<EnteredDiv element={<About/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true, false, true, true, false, true, false, true, false)}/>} />
          <Route path="/master-plan" element={<EnteredDiv element={<Masterplan/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true, true, false, false, true, true, false, true, false)}/>} />
          <Route path="/culture" element={<EnteredDiv element={<Culture/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true, true, false, true, false, false, true, true, false)}/>} />
          <Route path="/careers" element={<EnteredDiv element={<Careers/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true, true, false, true, false, true, false, false, true)}/>} />
          <Route path="/terms-and-conditions" element={<EnteredDiv element={<Terms/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true)}/>} />
          <Route path="/privacy-policy" element={<EnteredDiv element={<Privacy/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true)}/>} />
          <Route path="/accessibility-statement" element={<EnteredDiv element={<Statement/>} threshold={0} whenDivIsentered={() => removeAndAdd(false, true)}/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App