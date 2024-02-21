import React from "react";
import { RiGithubFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react";

function Footer() {
  return (
    <div className="w-full bg-black h-[45vh] flex flex-col justify-center items-center gap-[1.4vw] px-[10vw] py-[1.3vw]">
      <p className="helvetica italic text-[1.2vw] text-white">
        Design Inspiration taken from Lera Zhurbenko
      </p>
      <div className="w-full links flex justify-center items-center gap-[2vw]">
        {[
          "about",
          "features",
          "moodboard",
          "context",
          "examples",
          "workshop",
        ].map((elem, index) => (
          <a
            key={index}
            className="uppercase helvetica text-white text-[1.2vw] p-2"
            href=""
          >
            {elem}
          </a>
        ))}
      </div>
      <div className="socials flex gap-[1vw]">
        <RiTwitterFill className="text-white" size={36} href="" />
        <a href="https://github.com/nilaachandra">
          <RiGithubFill className="text-white" size={36} />
        </a>
        <RiInstagramFill className="text-white" size={36} />
      </div>
      <p className="text-white helvetica italic">
        <span className="font-bold">Disclaimer:</span> This website, inspired by a Behance project, is for
        educational purposes. The design and images used belong to their
        respective owners. I neither claim ownership nor intend to profit from
        them. If any concerns arise, kindly contact me. Thank you for
        understanding.
      </p>
      <p className="text-white text-[1.2vw] helvetica">Developed with &#x2764; | Nila Laishram | &#169;2024 | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
