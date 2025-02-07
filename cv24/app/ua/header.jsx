import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [burMenu, setBurMenu] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Alert if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setBurMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-[100%] top-0 z-10">
      <section
        ref={wrapperRef}
        className="text-right items-center max-w-4xl mx-auto p-2 "
      >
        <nav
        onClick={() => {
          setBurMenu(!burMenu);
        }}
          className={` ${
            burMenu
              ? `absolute w-[80%] bg-[#185486f0] flex flex-col [&>a]:text-right origin-top  animate-open-menu

                sm:relative sm:w-auto sm:h-auto sm:[&>a]:text-center sm:animate-none sm:bg-transparent`
              : `hidden `
          }
                sm:inline-block sm:[&>a]:text-center m-0-1 [&>a]:px-1 [&>a]:border-r-2 [&>a]:border-slate-600 [&>a]:inline-block md:[&>a]:min-w-24 [&>a]:opacity-70 [&>a:hover]:opacity-100 [&>a:hover]:[text-shadow:_3px_4px_7px_rgba(255,255,255,0.77)]`}
        >
          <a  href="#aboutme">Home</a>
          <a  href="#skils">Skils</a>
          <a href="#education">Education</a>
          <a href="#experience">Work experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="border-none">
            Contact
          </a>
        </nav>
        <button
        
          onClick={() => {
            setBurMenu(!burMenu);
          }}
          id="hamburger-button"
          className={`text-3xl sm:hidden cursor-pointer relative w-8 h-8 ${
            burMenu && "toggle-btn"
          }`}
        >
          <div
            className="bg-white w-8 h-1
            rounded absolute top-4 -mt-0.5 transition-all
            duration-500 
            before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500
            after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500
            "
          ></div>
        </button>
      </section>
    </header>
  );
}
