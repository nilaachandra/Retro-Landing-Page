import React from "react";
import ImageCard from "./ImageCard";

const Landingpage = () => {
  return (
    <div className="w-full h-[90vh] flex bg-[#ead6c8]">
      <div className="leftside w-1/2 h-full border-2 border-[#871515] flex flex-col items-center justify-center gap-[1.5vw]">
        <div className="herotext text-[#871515] w-full flex flex-col justify-center items-center">
          {["think", "retro,", "think", "bigger."].map((elem, index) => (
            <h1
              key={index}
              className="uppercase mango font-bold text-[7vw] leading-[7vw] "
            >
              {elem}
            </h1>
          ))}
        </div>
        <div className="px-[12vw] text-center helvetica italic text-[1.3vw]">
          <p className="text-[#871515]">
            Are you a fan of retro design? Retro and Vintage are becoming a new
            trend. Join our workshop to figure out how to design interface in
            this styles!
          </p>
        </div>
      </div>
      <div className="rightside w-1/2 h-full border-2 border-[#871515]">
        <ImageCard
        image="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default Landingpage;
