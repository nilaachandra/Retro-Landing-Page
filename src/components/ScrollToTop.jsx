import { RiArrowUpWideLine, RiArrowUpLine } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#d3e9de] text-black p-3 rounded-full ${isVisible ? 'block' : 'hidden'}`}
    >
        <RiArrowUpWideLine size={36}/>
    </button>
  );
};

export default ScrollToTopButton;
