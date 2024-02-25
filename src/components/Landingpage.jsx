import React from "react";
import ImageCard from "./ImageCard";

const Landingpage = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col bg-[#eecbd7] lg:flex-row">
      <div className="leftside w-full h-full border-2 border-black flex flex-col items-center justify-center gap-[1.5vw]
      lg:w-1/2">
        <div className="herotext w-full flex flex-col justify-center items-center">
          {["think", "retro,", "think", "bigger."].map((elem, index) => (
            <h1
              key={index}
              className="uppercase mango font-bold text-[16vw] leading-[16vw] lg:text-[7vw] lg:leading-[7vw]"
            >
              {elem}
            </h1>
          ))}
        </div>
        <div className="px-[8vw]">
          <p className="text-justify helvetica italic text-[3.6vw] lg:text-[1.3vw]">
            Are you a fan of retro design? Retro and Vintage are becoming a new
            trend. Join our workshop to figure out how to design interface in
            this styles!
          </p>
        </div>
      </div>
      <div className="rightside w-full h-full border-2 border-black lg:w-1/2">
        <ImageCard
        image="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default Landingpage;
