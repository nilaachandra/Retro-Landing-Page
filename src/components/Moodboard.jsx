import React from "react";
import Moodcard from "./Moodcard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Moodboard() {
  const container = useRef();
  let myMarquee = useRef(null);

  useGSAP(
    () => {
      myMarquee.current = gsap.to(".mood", {
        x: "-100%",
        repeat: -1,
        ease: "none",
        yoyo:true,
        duration: 7,
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
    <div className="w-full flex flex-col border-2 border-black h-screen" ref={container}>
      <div className="title w-full pl-[8vw]">
        <h1 className="mango text-[6vw]">Moodboard</h1>
      </div>

      <div className="moodcontainer flex w-full ">
        {[
          "https://plus.unsplash.com/premium_photo-1687609112034-ac2149e8ea06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1544129564-b07b639606bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587731556938-38755b4803a6?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ].map((link, index) => (
          <div key={index} className="mood"><Moodcard image={link} className="mood pr-[5vw]"/></div>
        ))}
      </div>
    </div>
  );
}

export default Moodboard;
