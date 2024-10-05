import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const NavBar = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animating the navigation items
    timeline
      .from("nav ul li p", {
        opacity: 0.2,
        duration: 0.4,
        stagger: 0.2,
        delay: 0.2,
        ease: "power2.inOut",
      })
  });
  return (
    <div className="nav fixed top-0 left-0 w-full z-[110]">
      <nav className="">
        <ul className=" px-4 py-4 flex justify-center items-center gap-4 sm:gap-8 bg-[rgba(255,255,255,0.05)] text-[#b7b7b7] text-sm">
          <li className="group relative px-2 py-2 shrink-0 overflow-hidden">
            <p>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `${!isActive ? "opacity-[0.9]" : "opacity-[1]"} text-white`;
                }}
              >
                Home
              </NavLink>
            </p>
            <div className="line w-0 h-[0.1rem] bg-white absolute bottom-0 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative px-2 py-2 shrink-0 overflow-hidden">
            <p>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `${!isActive ? "opacity-[0.9]" : "opacity-[1]"} text-white`;
                }}
              >
                About Me
              </NavLink>
            </p>
            <div className="line w-0 h-[0.1rem] bg-white absolute bottom-0 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative px-2 py-2 shrink-0 overflow-hidden">
            <p>
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return `${!isActive ? "opacity-[0.9]" : "opacity-[1]"} text-white`;
                }}
              >
                Projects
              </NavLink>
            </p>
            <div className="line w-0 h-[0.1rem] bg-white absolute bottom-0 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative px-2 py-2 shrink-0 overflow-hidden">
            <p>
              <NavLink
                to="/connect"
                className={({ isActive }) => {
                  return `${!isActive ? "opacity-[0.9]" : "opacity-[1]"} text-white`;
                }}
              >
                Connect Me
              </NavLink>
            </p>
            <div className="line w-0 h-[0.1rem] bg-white absolute bottom-0 transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
