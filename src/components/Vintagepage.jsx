import React from "react";

const Vintagepage = () => {
  return (
    <div className="w-full lg:h-[80vh] h-[70vh] px-[4vw] flex flex-col lg:flex-row border-b-2 border-black bg-[#f4f0ef]">
      <div className="rightside w-full lg:w-1/2 flex flex-col justify-center items-center mt-[8vw]">
        <h1 className="mango text-[40vw] leading-[28vw] lg:text-[20vw] lg:leading-[14vw]">'70s</h1>
        <h3 className="helvetica font-bold uppercase lg:text-[6vw] text-[12vw]">Vintage</h3>
      </div>

      <div className="leftside w-full lg:w-1/2 h-full flex justify-center items-center flex-col">
        <div className="relative flex justify-center items-center right-[15%] -top-[28%]">
          <div className="absolute border-4 bg-[#d3e9de] border-black h-[25vw] w-[60vw] lg:h-[10vw] lg:w-[25vw] z-10 p-[1vw] rounded-[2vw] lg:rounded-[1vw]">
            <p className="Helvetica italic lg:text-[1.2vw] text-[3vw]">
              The 70s retro-style flat illustrations with outlining also paved
              their way up the charts modernized with futuristic, less Saturated
              color palettes.
            </p>
          </div>
          <div className="bg-black absolute h-[25vw] w-[60vw] lg:h-[10vw] lg:w-[25vw] translate-x-[2vw] translate-y-[2vw] rounded-[2vw] lg:rounded-[1vw]
          lg:translate-x-3 lg:translate-y-3"></div>
        </div>
        
        <div className="relative flex justify-center items-center right-[0%] top-[15%] lg:right-[-15%] lg:top-[18%]">
          <div className="absolute border-4 bg-[#d3e9de] border-black h-[30vw] w-[75vw] lg:h-[15vw] lg:w-[25vw] z-10 p-[1vw] rounded-[2vw] lg:rounded-[1vw]">
            <p className="Helvetica italic text-[3vw] lg:text-[1.2vw]">
              Typography is also a part of the overall art composition putting attention-seeking bulky,
              rounded letter types in the spotlight. In fact, Typography here often a main element of the
              design composition. A popular practice is to add a 3D effect, thick border line to make the 
              letters pop.
            </p>
          </div>
          <div className="bg-black absolute h-[30vw] w-[75vw] lg:h-[15vw] lg:w-[25vw] translate-x-[2vw] translate-y-[2vw] rounded-[2vw] lg:rounded-[1vw]
          lg:translate-x-3 lg:translate-y-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Vintagepage;
