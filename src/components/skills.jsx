import React from "react";
import "../App.css";
import Python from "../assets/python.svg";
import AI from "../assets/ai.svg";
import CSS from "../assets/css.png";
import Git from "../assets/git.svg";
import GitHub from "../assets/github-square.svg";
import GSAP from "../assets/gsap-greensock.svg";
import HTML from "../assets/html.png";
import Java from "../assets/java.png";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongodb.svg";
import Node from "../assets/nodejs.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Skills = () => {
  useGSAP(() => {
    // Work text span animation
    gsap.from(".work-text span", {
      y: "-100%",
      background: "#fff",
      border: "1px solid #fff",
      color: "#000",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".work-text span",
        start: "top 70%",
        end: "top center",
        scrub: 1,
      },
    });
  });
  return (
    <div className="page4 sticky top-0 z-[92] w-full flex h-screen text-white bg-black">
      <div className="skills-text flex text-white text-5xl font-bolder w-full grow-0 shrink-0 h-32 items-center justify-center pt-[6rem] ">
        <div>S</div>
        <div>K</div>
        <div>I</div>
        <div>L</div>
        <div>L</div>
        <div>S</div>
      </div>
      <div className="">
        <marquee
          className="marqueeSlider px-2 w-full py-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          direction="left"
          scrollamount="25"
        >
          <div className="flex items-center w-full h-16 ">
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="Python"
                className="w-[100%] h-auto object-cover shrink-0"
                src={Python}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="AI"
                className="w-[100%] h-auto object-cover shrink-0"
                src={AI}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="CSS"
                className="w-[100%] h-auto object-cover shrink-0"
                src={CSS}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="Git"
                className="w-[100%] h-auto object-cover shrink-0"
                src={Git}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="GitHub"
                className="w-[100%] h-auto object-cover shrink-0"
                src={GitHub}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="GSAP"
                className="w-[100%] h-auto object-cover shrink-0"
                src={GSAP}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="HTML"
                className="w-[100%] h-auto object-cover shrink-0"
                src={HTML}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="Java"
                className="w-[100%] h-auto object-cover shrink-0"
                src={Java}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="JavaScript"
                className="w-[100%] h-auto object-cover shrink-0"
                src={JavaScript}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="MongoDB"
                className="w-[100%] h-auto object-cover shrink-0"
                src={MongoDB}
              />
            </div>
            <div className="img w-[5rem] h-[6rem] flex bg-white mx-2 rounded-sm items-center justify-center p-4 shrink-0 ">
              <img
                alt="Node.js"
                className="w-[100%] h-auto object-cover shrink-0"
                src={Node}
              />
            </div>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Skills;
