import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="marqueWrapper w-full">
      <div className="marquee whitespace-nowrap overflow-x-auto overflow-y-hidden w-full flex bg-black p-[1vw]">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
          className="text-white text-[2.5vw] uppercase helvetica  pr-[3vw]"
        >
          Vintage Retro Style Workshop
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
          className="text-white text-[2.5vw] uppercase helvetica pr-[3vw]"
        >
          Vintage Retro Style Workshop
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
          className="text-white text-[2.5vw] uppercase helvetica pr-[3vw]"
        >
          Vintage Retro Style Workshop
        </motion.h1>
        

      </div>
    </div>
  );
}

export default Marquee;
