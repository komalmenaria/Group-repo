import Header from "./Component/Header";
import {} from "./Css/Styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/ContuctUs";
import Footer from "./Component/Footer";



function App() {
  return (
    <Router>
      <Header />
      <Routes  >
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact /> 
        <Route path="/contactus" element={<Contact />} exact />  
      </Routes >
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
