import React, { useState } from "react";
import { RiMenu4Fill } from "@remixicon/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = gsap.timeline();
  const toggleNav = () => {
    if (!isOpen) {
      tl.to(".animated", {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        display: "flex",
      });
    } else {
      gsap.to(".animated", {
        y: "-100%",
        duration: 0.7,
        ease: "power4.in",
        display: "none",
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="navitems fixed top-0 left-0 px-[3vw] py-[.4vw] flex justify-between items-center w-full  z-30">
        <h1 className="mango text-[4vw] leading-[4vw] text-black">Retro</h1>
        <h1 onClick={toggleNav} className="cursor-pointer">
          <RiMenu4Fill className="text-black" size={36} />
        </h1>
      </div>
      <div
        className="animated translate-y-[-100%] z-20 w-full fixed h-screen justify-center lg:gap-0 gap-4 flex-col
       items-center bg-[#d96f55] overflow-hidden"
      >
        {[
          { link: "about", href: "#about" },
          { link: "features", href: "#features" },
          { link: "moodboard", href: "#moodboard" },
          { link: "context", href: "#context" },
          { link: "workshop", href: "#workshop" },
        ].map((obj, index) => (
          <div key={index} className="linkwrapper overflow-y-hidden px-[1vw]">
            <a
              href={obj.href}
              className="animate-a uppercase inline-block italic font-bold text-[6vw] lg:text-[3vw] mango"
            >
              {obj.link}
            </a>
          </div>
        ))}
        <h1 className="text-[3vw] helvetica italic" onClick={toggleNav}>
          Close
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
