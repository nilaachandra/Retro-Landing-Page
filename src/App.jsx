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
import Moodcard from "./components/Moodcard";
import Marquee from "./components/Marquee";

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
        <Marquee/>
        <BottomHero/>
        <Footer/>
        
        <Moodcard image="https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </>
  );
};

export default App;
