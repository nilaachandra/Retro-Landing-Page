import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center gap-[8vw] items-center border-black py-[2vw] bg-black">
      {[
        "about",
        "features",
        "moodboard",
        "context",
        "examples",
        "workshop",
      ].map((elem, index) => (
        <a key={index} className="uppercase helvetica border rounded-xl border-white text-[white] p-2" href="">
          {elem}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
