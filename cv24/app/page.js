"use client";

import Header from "./ua/header.jsx";
import Footer from "./ua/footer.jsx";
import { text } from "./appdata";
import { useState} from "react";
import ColorMenu from "./ua/color_menu.jsx";
import Main from "./ua/main.jsx";

export default function Home() {
  
  const [colorMenu, setColorMenu] = useState(
    text.bulletMenu.map((item) => {
      return { ...item, ratio: 0 };
    })
  );




  return (
    <>
      <Header />
      <ColorMenu colorMenu={colorMenu} />
     <Main colorMenu={colorMenu} setColorMenu={setColorMenu} />
    
      <Footer />
    </>
  );
}
