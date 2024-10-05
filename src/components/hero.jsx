import React from "react";
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const timeline = new gsap.timeline();
    timeline
      .from(".page1 div p", {
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.4,
        ease: "bounce.inOut",
      })
      .from(".name div", {
        opacity: 0,
        x: "-100%",
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    // Page 1 scroll-based opacity animation
    gsap.to(".page1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "bottom 50%",
        scrub: 2,
      },
    });
  })
  return (
    <div className="page1 sticky top-0 w-[100%] h-[100%] min-h-screen z-[80] pt-[6rem]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
        <p className="text-[#b7b7b7] text-sm sm:text-xl">I am </p>
        <h1
          className="name text-[5.1rem] mx-auto z-[20] text-[#d6d6d6] overflow-hidden "
          style={{
            lineHeight: "4rem",
          }}
        >
          <div className="text-center">V</div>
          <div className="text-center">A</div>
          <div className="text-center">I</div>
          <div className="text-center">B</div>
          <div className="text-center">H</div>
          <div className="text-red-500 text-center">A</div>
          <div className="text-center">V</div>
        </h1>
        <p className="text-[#b7b7b7] text-sm sm:text-xl">
          a full stack web developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
