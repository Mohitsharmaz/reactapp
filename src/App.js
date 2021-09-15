
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";
import reactDom from "react-dom";



function App() {
  return (
    <>
      <Navbar title='Text Utils' about='About TU' />
      <div className="container my-5 ">
      </div>

      <About />

      <Textform heading='Enter Text To Analyse' />


    </>
  );
}

export default App;
