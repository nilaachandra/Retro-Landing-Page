import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Landingpage/>
        <AboutPage/>
      </div>
    </>
  );
};

export default App;
