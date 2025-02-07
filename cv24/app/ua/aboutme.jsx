
import Assist from "./assist.jsx";


export default function Aboutme() {

    return (
    <section
      id="aboutme"
      className="relative flex flex-col-reverse justify-center md:flex-row items-center gap-8 p-6"
      // widescreen:section-min-height tallscreen:section-min-height
    >
      <article className="md:w-1/2">
        <h1 className="text-center">Hi I&apos;m Pasha!!</h1>
        <h2 className="text-center mb-2">Frontend Developer</h2>
        <p className="text-justify">Experienced front-end developer with knowledge of back-end technologies. Additionally, I have a strong background in scientific research and data analysis, as well as proficiency in mathematical software.</p>
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
  <Assist/>
     
    </section>
  );
}
