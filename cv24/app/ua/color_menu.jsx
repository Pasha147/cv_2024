import React from "react";

export default function ColorMenu(props) {
  const colMenu = props.colorMenu;
    return (
    <nav className="fixed right-2 bottom-[10%] ">
      <ul>
        {colMenu.map((item, n) => {
          return <li key={`colMenu${n}`}
          className="bg-slate-50 text-green-500 m-1"
          style={{opacity:`${item.ratio/100}`}}
          >{`${item.textEn}`}</li>;
        })}
      </ul>
    </nav>
  );
}
