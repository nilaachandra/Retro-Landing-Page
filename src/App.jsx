import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AboutPage from "./components/AboutPage";
import Featurespage from "./components/Featurespage";
import Vintagepage from "./components/Vintagepage";
import Context from "./components/Context";
import BottomHero from "./components/BottomHero";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Moodboard from "./components/Moodboard";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar/>
        <Landingpage/>
        <AboutPage/>
        <Featurespage/>
        <Vintagepage/>
        <Moodboard/>
        <Context/>
        <Marquee/>
        <BottomHero/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
