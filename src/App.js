import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
