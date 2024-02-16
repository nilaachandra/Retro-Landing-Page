import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center gap-[8vw] items-center border-b-2 border-[#871515] py-[2vw] bg-[#ead6c8]">
      {[
        "about",
        "features",
        "moodboard",
        "context",
        "examples",
        "workshop",
      ].map((elem, index) => (
        <a key={index} className="uppercase helvetica text-[#871515]" href="">
          {elem}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
