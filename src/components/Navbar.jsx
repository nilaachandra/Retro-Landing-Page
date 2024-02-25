import React from "react";
import { RiTwitterFill } from "@remixicon/react";
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
        <a key={index} className="uppercase dv-none helvetica border rounded-xl border-white text-[white] p-2" href="">
          {elem}
        </a>
      ))}
      <a href="">
          <RiTwitterFill className="text-white" size={36} />
        </a>
    </div>
  );
}

export default Navbar;
