import React, { useRef,useState } from "react";
import "../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Form = () => {
  
  useGSAP(() => {
    // Page5 form animation
    const formTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5 form",
        start: "top 80%",
        end: "top center",
        scrub: 1.2,
      },
    });
    formTimeline
      .from(".page5 form>div h1", {
        x: "-100%",
        opacity: 0,
      })
      .from(".page5 form>div p", {
        x: "100%",
        opacity: 0,
      })
      .from([".page5 form div input", ".page5 form div textarea"], {
        opacity: 0,
        duration: 2,
      })
      .from('.page5 form input[type="submit"]', {
        opacity: 0,
      });
  });
  const form = useRef();
  const [submitting,setSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm("service_pn25os2", "template_dczrpf4", form.current, {
        publicKey: "_G24MM8H4iI9eBs8J",
      })
      .then(
        () => {
          alert('connected');
        },
        (error) => {
          alert("failed to connect");
        },
      )
      .then(
        () => {
          setSubmitting(false)
        }
      );
  };
  return (
    <div className="page5 connectme sticky top-0 z-[93] w-full h-screen text-white bg-black flex items-center justify-center flex-col">
      <h1 className="slef-start work-text flex text-white text-3xl sm:text-5xl font-bolder w-full grow-0 shrink-0 h-32 items-center justify-center pt-[6rem] ">
        <span>L</span>
        <span>e</span>
        <span>t</span>
        <span>'</span>
        <span>s </span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
        <span>T</span>
        <span>o</span>
        <span>g</span>
        <span>e</span>
        <span>t</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
      </h1>
      <form ref={form} onSubmit={sendEmail} className="w-[80%] h-auto py-8 px-2 my-4 flex items-center justify-center flex-col items-center justify-center flex mx-auto flex-col gap-[1.2rem] border border-white overflow-hidden px-4 py-4 sm:w-[60%]">
        <div className="slef-start">
          <h1 className="text-lg underline">Send me message</h1>
          <p className="text-xs w-full text-center ">
            <span className="text-orange-400">or</span> connect via{" "}
            <a className="text-blue-500" href="/">
              vbhvgupta15@gmail.com
            </a>
          </p>
        </div>
        <div className="name flex flex-col gap-2  w-full sm:flex-row">
          <input
            className="bg-white text-[#2A2A2C] px-2 py-1  w-full outline-0 border-0 mx-1 sm:my-1 rounded"
            name="from_name"
            placeholder="your name"
            required={true}
            
            type="text"
          />
          <input
            className=" w-full bg-white text-[#2A2A2C] px-2 py-1 outline-0 border-0 mx-1 sm:my-1 rounded"
            required={true}
            id=""
            name="sirname"
            placeholder="sirname"
            type="text"
          />
        </div>
        <div className="email w-full">
          <input
            className=" w-full bg-white text-[#2A2A2C] px-2 py-1 outline-0 border-0 mx-1 h-auto w-ful sm:my-1 rounded"
            id=""
            name="from_email"
            placeholder="your email"
            required={true}
            type="text"
          />
        </div>
        <div className="message w-full">
          <textarea
            className="px-1 py-2 text-[#2A2A2C]  outline-0 w-[100%] border-0 mx-1 sm:my-1 rounded"
            id=""
            name="message"
            placeholder="your message"
            required={true}
          />
        </div>
        <input
          className="bg-gradient-to-r from-red-500 to-orange-500 border border-white px-2 py-2 text-white hover:opacity-[0.9] rounded"
          type="submit"
          value={`${submitting?"Connecting":"Let's connect"}`}
          disabled={submitting}
        />
      </form>
    </div>
  );
};

export default Form;
