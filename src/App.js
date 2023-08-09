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
  function homePageEntered() {
    console.log('home page has been entered')
    document.querySelector(".navigation__home-link").classList.remove('active-logo')
    document.querySelector(".about__nav-link").classList.remove('active')
    document.querySelector(".master__nav-link").classList.remove('active')
    document.querySelector(".culture__nav-link").classList.remove('active')
    document.querySelector(".career__nav-link").classList.remove('active')
  }
  function aboutPageEntered() {
    console.log('about page has been entered')
    document.querySelector(".navigation__home-link").classList.add('active-logo')
    document.querySelector(".about__nav-link").classList.add('active')
    document.querySelector(".master__nav-link").classList.remove('active')
    document.querySelector(".culture__nav-link").classList.remove('active')
    document.querySelector(".career__nav-link").classList.remove('active')
  }
  function masterplanPageEntered() {
    console.log('master-plan page has been entered')
    document.querySelector(".navigation__home-link").classList.add('active-logo')
    document.querySelector(".about__nav-link").classList.remove('active')
    document.querySelector(".master__nav-link").classList.add('active')
    document.querySelector(".culture__nav-link").classList.remove('active')
    document.querySelector(".career__nav-link").classList.remove('active')
  }
  function culturePageEntered() {
    console.log('culture page has been entered')
    document.querySelector(".navigation__home-link").classList.add('active-logo')
    document.querySelector(".about__nav-link").classList.remove('active')
    document.querySelector(".master__nav-link").classList.remove('active')
    document.querySelector(".culture__nav-link").classList.add('active')
    document.querySelector(".career__nav-link").classList.remove('active')
  }
  function careerPageEntered() {
    console.log('career page has been entered')
    document.querySelector(".navigation__home-link").classList.add('active-logo')
    document.querySelector(".about__nav-link").classList.remove('active')
    document.querySelector(".master__nav-link").classList.remove('active')
    document.querySelector(".culture__nav-link").classList.remove('active')
    document.querySelector(".career__nav-link").classList.add('active')
  }

  return (
    <>
      {<Navbar/>}
      <Routes>
          <Route path="/" element={<EnteredDiv element={<Home/>} threshold={0} whenDivIsentered={homePageEntered}/>} />
          <Route path="/about-us" element={<EnteredDiv element={<About/>} threshold={0} whenDivIsentered={aboutPageEntered}/>} />
          <Route path="/master-plan" element={<EnteredDiv element={<Masterplan/>} threshold={0} whenDivIsentered={masterplanPageEntered}/>} />
          <Route path="/culture" element={<EnteredDiv element={<Culture/>} threshold={0} whenDivIsentered={culturePageEntered}/>} />
          <Route path="/careers" element={<EnteredDiv element={<Careers/>} threshold={0} whenDivIsentered={careerPageEntered}/>} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/accessibility-statement" element={<Statement/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App