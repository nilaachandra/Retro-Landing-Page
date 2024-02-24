import React from "react";

const Moodcard = (props) => {
  return (
      <div className="relative mr-[30vw] pr-[5vw]">
        <div className="image absolute border-t-4 border-black h-[25vw] w-[25vw] z-10 object-center">
          <img src={props.image} className="h-full w-full" />
        </div>
        <div className="h-[25vw] w-[25vw] absolute translate-x-4 translate-y-4 bg-black"></div>
      </div>
  );
};

export default Moodcard;
