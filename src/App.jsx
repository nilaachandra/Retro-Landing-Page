import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Landingpage/>
      </div>
    </>
  );
};

export default App;
