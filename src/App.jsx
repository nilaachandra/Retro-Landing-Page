import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AboutPage from "./components/AboutPage";
import Featurespage from "./components/Featurespage";
import Vintagepage from "./components/Vintagepage";
import Context from "./components/Context";
import BottomHero from "./components/BottomHero";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Landingpage/>
        <AboutPage/>
        <Featurespage/>
        <Vintagepage/>
        <Context/>
        <BottomHero/>
      </div>
    </>
  );
};

export default App;
