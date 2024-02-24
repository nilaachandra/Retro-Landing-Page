import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const container = useRef();
  let myMarquee = useRef(null);

  useGSAP(
    () => {
      myMarquee.current = gsap.to(".run", {
        x: "-100%",
        repeat: 10000,
        ease: "none",
        duration: 5,
      });

      return () => {
        // Clean up function to pause the animation when component unmounts
        if (myMarquee.current) {
          myMarquee.current.pause();
        }
      };
    },
    { scope: container }
  );

  const stopAnimate = () => {
    if (myMarquee.current) {
      myMarquee.current.pause();
    }
  };

  const resumeAnimate = () => {
    if (myMarquee.current) {
      myMarquee.current.resume();
    }
  };

  return (
    <div ref={container} className="w-full wrapper">
      <div
        onMouseEnter={stopAnimate}
        onMouseLeave={resumeAnimate}
        className="marquee whitespace-nowrap overflow-x-auto overflow-y-hidden w-full flex bg-black p-[1vw]"
      >
        <h1 className="run text-white text-[2.5vw] uppercase helvetica pr-[3vw]">
          Vintage Retro Style Workshop
        </h1>
        <h1 className="run text-white text-[2.5vw] uppercase helvetica pr-[3vw]">
          Vintage Retro Style Workshop
        </h1>
        <h1 className="run text-white text-[2.5vw] uppercase helvetica pr-[3vw]">
          Vintage Retro Style Workshop
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
