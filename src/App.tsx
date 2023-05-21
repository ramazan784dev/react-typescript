import React from 'react';
import './App.css';
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./compenents/Home";
import About from "./compenents/About";
import Contact from "./compenents/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={ <Home/> }/>
        <Route path={"/about"} element={ <About/> }/>
        <Route path={"/contact"} element={ <Contact/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
