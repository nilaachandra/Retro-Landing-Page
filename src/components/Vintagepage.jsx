import React from "react";

const Vintagepage = () => {
  return (
    <div className="w-full h-[80vh] px-[4vw] flex border-b-2 border-black bg-[#f4f0ef]">
      <div className="rightside w-1/2 flex flex-col justify-center items-center mt-[8vw]">
        <h1 className="mango text-[20vw] leading-[14vw]">'70s</h1>
        <h3 className="helvetica font-bold uppercase text-[6vw]">Vintage</h3>
      </div>

      <div className="leftside w-1/2 h-full flex justify-center items-center flex-col">
        <div className="relative flex justify-center items-center right-[15%] -top-[28%]">
          <div className="absolute border-4 bg-[#d3e9de] border-black h-[10vw] w-[25vw] z-10 p-[1vw] rounded-[1vw]">
            <p className="Helvetica italic text-[1.2vw]">
              The 70s retro-style flat illustrations with outlining also paved
              their way up the charts modernized with futuristic, less Saturated
              color palettes.
            </p>
          </div>
          <div className="bg-black absolute h-[10vw] w-[25vw] translate-x-3 translate-y-3 rounded-[1vw]"></div>
        </div>
        
        <div className="relative flex justify-center items-center right-[-15%] top-[18%]">
          <div className="absolute border-4 bg-[#d3e9de] border-black h-[15vw] w-[25vw] z-10 p-[1vw] rounded-[1vw]">
            <p className="Helvetica italic text-[1.2vw]">
              Typography is also a part of the overall art composition putting attention-seeking bulky,
              rounded letter types in the spotlight. In fact, Typography here often a main element of the
              design composition. A popular practice is to add a 3D effect, thick border line to make the 
              letters pop.
            </p>
          </div>
          <div className="bg-black absolute h-[15vw] w-[25vw] translate-x-3 translate-y-3 rounded-[1vw]"></div>
        </div>
      </div>
    </div>
  );
};

export default Vintagepage;
