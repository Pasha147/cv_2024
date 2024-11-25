import { useState } from "react";
import Assist from "./assist.jsx";


export default function Aboutme() {

  const [assBtn, setAssBtn]=useState(true)

  return (
    <section
      id="aboutme"
      className="relative flex flex-col-reverse justify-center sm:flex-row items-center gap-8 p-6"
      // widescreen:section-min-height tallscreen:section-min-height
    >
      <article className="sm:w-1/2">
        <h1>Hi I&apos;m Pasha</h1>
        <h2>Frontend Developer & Applied Mathematics PhD</h2>
        <p>Creating impactful web experiences with precision and style.</p>
      </article>

      <img
        src="./img/me2.png"
        alt="Your Image"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent)",
          maskImage: "linear-gradient(to bottom, black 85%, transparent)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        className="w-56"
      />
 {assBtn && <Assist/>}
      <button onClick={()=>setAssBtn(!assBtn)} className="absolute right-4 bottom-4 flex items-center justify-center w-24 h-24 bg-black rounded-full shadow-neon-gradient transition-shadow duration-300 hover:shadow-neon-gradient-hover">
        <img
          src="assist.webp"
          alt="Assistant Icon"
          className="w-4/5 h-4/5 rounded-full"
          
        />
      </button>
    </section>
  );
}
