"use client";

import Header from "./ua/header.jsx";
import Footer from "./ua/footer.jsx";
import { text } from "./appdata";
import { useState} from "react";
import ColorMenu from "./ua/color_menu.jsx";
import Main from "./ua/main.jsx";
import Assist from "./ua/assist.jsx";

export default function Home() {
  
  const [colorMenu, setColorMenu] = useState(
    text.bulletMenu.map((item) => {
      return { ...item, ratio: 0 };
    })
  );

  const [assBtn, setAssBtn]=useState(true)


  return (
    <>
      <Header />
      <ColorMenu colorMenu={colorMenu} />
     <Main colorMenu={colorMenu} setColorMenu={setColorMenu}/>
     {assBtn && <Assist/>}
      <Footer />
    </>
  );
}
