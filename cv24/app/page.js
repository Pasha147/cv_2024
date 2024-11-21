"use client";

import Header from "./ua/header.jsx";
import Aboutme from "./ua/aboutme.jsx";
import Skils from "./ua/skils.jsx";
import Education from "./ua/education.jsx";
import Experience from "./ua/experience.jsx";
import Projects from "./ua/projects.jsx";
import Contact from "./ua/contact.jsx";
import Footer from "./ua/footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto [&>section]:pt-10  [&>section]:min-h-[100vh] [&>section]:bg-resume-section [&>section]:bg-gradient-cover-grid [&>section]:bg-no-repeat-grid [&>section]:bg-center-grid dark:[&>section]:bg-resume-section_d">
       <Aboutme/>
       <Skils/>
       <Education/>
       <Experience/>
       <Projects/>
       <Contact/>

      </main>
       <Footer/>
      
    </>
  );
}
