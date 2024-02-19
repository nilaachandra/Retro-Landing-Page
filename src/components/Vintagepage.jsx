import React from "react";

const Vintagepage = () => {
  return (
    <div className="w-full h-[80vh] flex border-b-2 border-black">
      <div className="rightside w-1/2 flex flex-col justify-center items-center mt-[8vw]">
        <h1 className="mango text-[20vw] leading-[14vw]">'70s</h1>
        <h3 className="helvetica font-bold uppercase text-[6vw]">Vintage</h3>
      </div>
      <div className="leftside w-1/2 relative h-full flex justify-center items-center">
        
        <div class="bottomd bg-black absolute h-[8vw] w-[25vw] translate-x-3 translate-y-3 z-0"></div>
        <div class="absolute border-4 border-black h-[8vw] w-[25vw] z-15">
          <p>
            The 70s retro-style flat illustrations with outlining also paved
            their way up the charts modernized with futuristic, less Saturated
            color palettes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vintagepage;
