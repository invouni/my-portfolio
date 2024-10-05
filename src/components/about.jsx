import React from "react";
import "../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const About = () => {
  useGSAP(() => {
    // Page-2 section horizontal scroll animation
    gsap.to(".page-2 .section", {
      x: "-100%",
      duration: 6,
      ease: "steps(7)",
      scrollTrigger: {
        trigger: ".page-2 .section",
        start: "center 50%",
        end: "bottom -50%",
        scrub: 1.2,
        pin: true,
      },
    });

    // Page-2 text opacity animation
    gsap.from(".page-2 .section p", {
      opacity: 0,
      duration: 6,
      ease: "steps(7)",
      scrollTrigger: {
        trigger: ".page-2 .section",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3,
      },
    });
  });
  return (
    <>
      <div className="page-2 sticky top-0 z-[90] h-screen bg-[#000] overflow-hidden w-full text-white flex justify-start items-center">
        <div className="section flex items-center  shrink-0  bg-black text-white">
          <div className="flex  flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] px-[1rem]">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I'm Vaibhav, a passionate web developer{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              {" "}
              specializing in the MERN stack.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I have a strong focus on React for{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              {" "}
              dynamic web applications.
            </p>
          </div>
          <div className="flex  flex-col justify-center items-center gap-[0.1rem] px-[1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              My expertise extends across multiple programming languages,{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              including Java and JavaScript.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              Java is my top strength, while JavaScript is my go-to language.
            </p>
          </div>
          <div className="flex px-[1rem] flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I'm well-versed in data structures and algorithms.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I have solved over 900 questions on{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              LeetCode, enhancing my problem-solving abilities.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              This experience drives my passion for{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              {" "}
              efficient coding.
            </p>
          </div>
          <div className="flex px-[1rem] flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I create engaging, user-friendly web{" "}
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              {" "}
              experiences with advanced animations.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I utilize GSAP and Tailwind CSS for visually stunning designs.
            </p>
          </div>
          <div className="flex px-[1rem] flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              My skills in MongoDB enhance my ability to build robust, scalable
              applications.
            </p>
          </div>
          <div className="flex px-[1rem] flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I have a deep understanding of AI and its applications.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              This allows me to explore innovative solutions and implement
              intelligent systems.
            </p>
          </div>
          <div className="flex px-[1rem] flex-col justify-center items-center gap-[0.1rem] shrink-0 w-[100vw] ">
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              My work blends creativity with performance, ensuring smooth and
              functional web experiences.
            </p>
            <p className="text-center sm:text-[1.4rem] md:text-[2rem]">
              I strive to push the boundaries of web development in every
              project I undertake.
            </p>
          </div>
        </div>
      </div>
      <div className="temp w-[100vw] sticky top-0 h-[100vh] bg-gray-500 z-[-1] text-white"></div>
    </>
  );
};

export default About;
