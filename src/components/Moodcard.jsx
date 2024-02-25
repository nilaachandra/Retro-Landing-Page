import React from "react";

const Moodcard = (props) => {
  return (
      <div className="relative mr-[60vw] lg:mr-[30vw]">
        <div className="image absolute border-t-4 border-black h-[50vw] w-[50vw] lg:h-[25vw] lg:w-[25vw] z-10 object-center">
          <img src={props.image} className="h-full w-full" />
        </div>
        <div className="h-[50vw] w-[50vw] lg:h-[25vw] lg:w-[25vw] absolute translate-x-[2vw] translate-y-[2vw]
         lg:translate-x-[1.2vw] lg:translate-y-[1.2vw] bg-black"></div>
      </div>
  );
};

export default Moodcard;
