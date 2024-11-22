"use client";

import Header from "./ua/header.jsx";
import Aboutme from "./ua/aboutme.jsx";
import Skils from "./ua/skils.jsx";
import Education from "./ua/education.jsx";
import Experience from "./ua/experience.jsx";
import Projects from "./ua/projects.jsx";
import Contact from "./ua/contact.jsx";
import Footer from "./ua/footer.jsx";
import { text } from "./appdata";
import { useEffect, useState, useRef } from "react";
import ColorMenu from "./ua/color_menu.jsx";

export default function Home() {
  const itemEls = useRef([]);
  const [colorMenu, setColorMenu] = useState(
    text.bulletMenu.map((item) => {
      return { ...item, ratio: 0 };
    })
  );

  useEffect(() => {
    const artSt = text.bulletMenu.map((art, n) => {
      return { id: `artId${n}`, intersect: false, ratio: 0 };
    });

    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [],
    };

    for (let i = 0; i <= 1.0; i += 0.01) {
      observerOptions.threshold.push(i);
    }

    let intersectionCallback = (entries) => {
      let newSecSt = [...artSt];
      entries.forEach((entry) => {
        
        let articleId = entry.target.id;
        let isIntersecting = entry.isIntersecting;
        let n = artSt.findIndex((el) => el.id === articleId);

        newSecSt[n].intersect = isIntersecting;
        newSecSt[n].ratio = Math.floor(entry.intersectionRatio * 100);
      });

      const newColorMenu = [...colorMenu];
      newColorMenu.forEach((item, n) => {
        newColorMenu[n].ratio = newSecSt[n].ratio;
      });

      setColorMenu(newColorMenu);
    };

    const observers = [];
    artSt.forEach(() => {
      observers.push(
        new IntersectionObserver(intersectionCallback, observerOptions)
      );
    });

    observers.forEach((observer, n) => {
      observer.observe(itemEls.current[n]);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      <Header />
      <ColorMenu colorMenu={colorMenu} />
      <main className="max-w-4xl mx-auto [&>section]:pt-10  [&>div]:min-h-[100vh] [&>section]:bg-resume-section [&>section]:bg-gradient-cover-grid [&>section]:bg-no-repeat-grid [&>section]:bg-center-grid dark:[&>section]:bg-resume-section_d">
        <div id={`artId${0}`} ref={(element) => (itemEls.current[0] = element)}>
          <Aboutme />
        </div>
        <div id={`artId${1}`} ref={(element) => (itemEls.current[1] = element)}>
          <Skils />
        </div>
        <div id={`artId${2}`} ref={(element) => (itemEls.current[2] = element)}>
          <Education />
        </div>
        <div id={`artId${3}`} ref={(element) => (itemEls.current[3] = element)}>
          <Experience />
        </div>
        <div id={`artId${4}`} ref={(element) => (itemEls.current[4] = element)}>
          <Projects />
        </div>
        <div id={`artId${5}`} ref={(element) => (itemEls.current[5] = element)}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
