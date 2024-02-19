import React from "react";

const Featurespage = () => {
  return (
    <div className="w-full h-screen flex bg-[#75b079]">
      <div className="leftside w-1/2 h-full border-2 border-black">
        <div className="features w-full border-2 border-b-0 border-black px-[8vw] pt-[4vw] pb-[2vw] flex flex-col">
          <h1 className="mango text-left text-[6vw] leading-[6vw]">Features</h1>
          <p className="Helvetica italic text-[1.5vw]">
            Key Elements of 70s Retro design
          </p>
        </div>
        {[
          "Bold, Flashy, Saturated colors that look aesthetically pleasing together.",
          "All design elements are bordered by thin colored borders",
          "Bulky, rounded letter types with 3D effect or simple black outlining",
        ].map((elem, index) => (
          <div
            key={index}
            className="w-full border-2 border-b-0 border-black flex justify-center items-center px-[8vw] py-[2.8vw]"
          >
            <p key={index} className="helvetica text-left text-[1.5vw] italic">
              {elem}
            </p>
          </div>
        ))}
      </div>
      <div className="rightside leftside w-1/2 h-full border-2 border-black bg-black flex flex-col justify-center items-center">
        <div className="colorholder w-full flex justify-evenly mx-[3vw]">
          {["#d96f55", "#dea350", "#75b079", "#d3e9de", "#ead6c8"].map(
            (color, index) => (
              <div
                key={index}
                className="h-[6vw] w-[6vw] border rounded-3xl my-[6vh] border-black"
                style={{ backgroundColor: color }}
              ></div>
            )
          )}
        </div>
        <div className="logo w-[25vw] mt-[3vw] flex justify-center items-center">
          <img
            src="https://i.pinimg.com/564x/32/36/9e/32369eacbae35abb1e640fb2ff84c8c8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featurespage;
