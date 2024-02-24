import React from "react";
import ImageCard from "./ImageCard";

const Context = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="leftside w-1/2 h-full border-2 border-black">
        <ImageCard image="https://images.unsplash.com/photo-1575584803762-e75aa6231f8a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="rightside bg-[#d96f55] leftside w-1/2 h-full border-2 border-black p-[6vw]">
        <h1 className="mango text-[9vw] leading-[9vw]">Context</h1>
        <div className="flex flex-col gap-4">
          {[
            "Retro design not only conveys the feeling of hope but also creates a specific connection with the viewer. The reason is simple but powerfull - it provokes nostalgia.",
            "Designers take full advantage of this effect not only regarding a target audience who has lived through the original retro designs",
            "Everything new is a well-forgotten old, so retro design appeals to the young, too.",
          ].map((par, index) => (
            <p key={index} className="italic text-[1.6vw]">{par}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Context;
