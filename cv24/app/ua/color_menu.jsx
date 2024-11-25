import React from "react";

export default function ColorMenu(props) {
  const colMenu = props.colorMenu;
  const href=['#aboutme', '#skils', '#education', '#experience', '#projects', '#contact']
  
    return (
    <nav className="fixed right-2 bottom-[18%] z-10">
      <ul>
        {colMenu.map((item, n) => {
          return <li key={`colMenu${n}` }
          className='contents'>
            <a 
            href={href[n]}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 my-4 p-2 rounded-full w-8 h-8 flex items-center justify-center 
           shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.6)] dark:[text-shadow:0_0_3px_rgba(255,255,255,0.95)]"
            style={{opacity:`${(item.ratio+25)/150}`}}
            >{`${item.textEn.slice(0, 2)}`}</a>
          </li>
        })}
      </ul>
     
    </nav>
  );
}
