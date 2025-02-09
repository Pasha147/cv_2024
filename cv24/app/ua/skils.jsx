"use client";
import React, { useState } from "react";

export default function Skils() {
  // const skils = ["HTML", "CSS", "JS", "React", "NextJS", "Angular", "Git"];
  // const Projects = ["CV2025", "NCUTAM", "Conference", "OVLower"];

  const skPr = [
    ["", "HTML", "CSS", "JS", "React", "NextJS", "Angular", "Git"],
    ["CV2025", true, true, false, false, true, false, true],
    ["NCUTAM", true, true, false, true, false, false, true],
    ["Conference", true, true, false, true, false, false, true],
    ["OVLower", true, true, false, false, false, true, true],
  ];

  const pr = skPr.map((item, ind)=>{
    return{ind: ind-1, name: item[0], checked: false }
  });
  pr.shift()

  let sk = [...skPr[0]];
  sk.shift();
  sk=[
    ...sk.map((skill, ind) => {
      return { ind: ind, name: skill, checked: false };
    }),
  ]

  const [projects, setProjects] = useState([...pr]);
  const [skills, setSkills] = useState([...sk]);
  const [skOrPr, setSkOrPr]=useState(false)


  const handleClickProj = (index) => {
    setSkOrPr(false)
    const newProjects = [...projects];
    newProjects[index].checked = !newProjects[index].checked;
    setProjects(newProjects);

    let newSkills = [...skills];
    newSkills.forEach((item, ind) => {
      newSkills[ind].checked = false;
    });

    newProjects.forEach((item, indRow) => {
      if (item.checked) {
         for (let indCol = 1; indCol < skPr[0].length; indCol++) {
         newSkills[indCol - 1].checked =
            skPr[indRow + 1][indCol] || newSkills[indCol - 1].checked;
        }
      }
    });
    setSkills(newSkills);
    
  };

  const handleClickSkil = (index) => {
    setSkOrPr(true)
    const newSkills=[...skills]
    newSkills[index].checked=!newSkills[index].checked
    setSkills([...newSkills])

    

   const newProjects=[...projects]
    

    newProjects.forEach((item, ind)=>{
      newProjects[ind].checked=false
    })

   newSkills.forEach((item, ind)=>{
    if(item.checked){
      for(let row=0; row<newProjects.length; row++){
        newProjects[row].checked=newProjects[row].checked || skPr[row+1][ind+1]
      }
    }
   })
   setProjects([...newProjects])
  }

  return (
    <section
      id="skils"
      className="widescreen:section-min-height tallscreen:section-min-height w-full flex"
    >
      <section className="flex w-full border-indigo-600 rounded-md border-2 flex-1">
        <div className="w-[30%] h-full bg-slate-400 flex-none">
        <input
                type="checkbox"
                checked={!skOrPr}
                onChange={() => {}}
                className="mb-2 w-5 h-5 cursor-pointer"
               
              />
          <h2>My projects</h2>
          <ul>
            {projects.map((pr, ind) => (
              <li key={`proj${ind}`} 
              // onClick={() => handleClick(ind)}
              >
                <input
                
                  type="checkbox"
                  checked={pr.checked}
                  onChange={() => handleClickProj(ind)}
                  className="mb-2 w-5 h-5 cursor-pointer"
                  // onClick={(e) => e.stopPropagation()} // Щоб клік на чекбокс не триггерив картку
                />
                <span> {`${ind} ${pr.ind} ${pr.name}`}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[65%] h-full bg-slate-600 shrink">
        <input
                type="checkbox"
                checked={skOrPr}
                onChange={() => {}}
                className="mb-2 w-5 h-5 cursor-pointer"
               
              />
          <h2>My skils</h2>
          <ul>
            {skills.map((item, ind) => (
              <li
                key={`skill${ind}`}
                // onClick={() => handleClickSkil(ind)}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleClickSkil(ind)}
                  className="mb-2 w-5 h-5 cursor-pointer"
                  // onClick={(e) => e.stopPropagation()} // Щоб клік на чекбокс не триггерив картку
                />
                <span> {`${ind} ${item.ind} ${item.name}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
