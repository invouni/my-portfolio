import React from "react";
import "../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Projects = () => {
  useGSAP(() => {
    // Project heading animation
    gsap.from(".projects h1 div", {
      y: "-100%",
      background: "#fff",
      color: "#000",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".projects h1 div",
        start: "top center",
        end: "top 30%",
        scrub: 1,
      },
    });

    // Skills text animation
    gsap.from(".skills-text div", {
      y: "-100%",
      background: "#fff",
      color: "#000",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-text div",
        start: "top center",
        end: "top 30%",
        scrub: 1,
      },
    });

    // Page4 opacity animation
    gsap.from(".page4", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".page4",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="page3 w-[100vw] sticky top-0 h-[100vh] overflow-hidden z-[91] text-white bg-black">
      <div className="projects h1 ">
        <h1 className="text-4xl text-white w-full  text-center pt-[6rem] flex items-center justify-center">
          <div>P</div>
          <div>R</div>
          <div>O</div>
          <div>J</div>
          <div>E</div>
          <div>C</div>
          <div>T</div>
          <div>S</div>
        </h1>
      </div>
      <div className="rotation w-full  h-screen flex items-center justify-center">
        <div className="slider w-[6rem] relative h-[6rem] bg-transparet sm:h-[12rem] sm:w-[12rem]">
          <div
            style={{
              "--i": "1",
            }}
          ></div>
          <div
            style={{
              "--i": "2",
            }}
          ></div>
          <div
            style={{
              "--i": "3",
            }}
          ></div>
          <div
            style={{
              "--i": "4",
            }}
          ></div>
          <div
            style={{
              "--i": "5",
            }}
          ></div>
          <div
            style={{
              "--i": "6",
            }}
          ></div>
          <div
            style={{
              "--i": "7",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
