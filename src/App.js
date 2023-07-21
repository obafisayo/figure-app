import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Component from "./Components/Component"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Masterplan from "./Pages/Masterplan";
import Culture from "./Pages/Culture";
import Careers from "./Pages/Careers";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Statement from "./Pages/Statement";

function App() {
  return (
    <>
      {<Navbar/>}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/master-plan" element={<Masterplan/>} />
          <Route path="/culture" element={<Culture/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/accessibility-statement" element={<Statement/>} />
      </Routes>
      {/* <Component/> */}
      <Footer/>
    </>
  )
}
export default App