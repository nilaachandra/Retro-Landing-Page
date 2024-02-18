import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AboutPage from "./components/AboutPage";
import Featurespage from "./components/Featurespage";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Landingpage/>
        <AboutPage/>
        <Featurespage/>
      </div>
    </>
  );
};

export default App;
