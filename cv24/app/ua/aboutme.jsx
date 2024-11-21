export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="flex flex-col-reverse justify-center sm:flex-row items-center gap-8 p-6"
      // widescreen:section-min-height tallscreen:section-min-height
    >
      <article className="sm:w-1/2">
      <h1>Hi I'm Pasha</h1>
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
    </section>
  );
}
