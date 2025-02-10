"use client";
import React, { useState } from "react";
import { skilCard, skillsProjects } from "../appdata";
import Proj_card from "./proj_card";
import { projCard } from "../appdata";
import SkilCard from "./skil_card";

export default function Skils() {
  const skPr = skillsProjects;

  const pr = skPr.map((item, ind) => {
    return { ind: ind - 1, name: item[0], checked: false };
  });
  pr.shift();

  let sk = [...skPr[0]];
  sk.shift();
  sk = [
    ...sk.map((skill, ind) => {
      return { ind: ind, name: skill, checked: false };
    }),
  ];

  const [projects, setProjects] = useState([...pr]);
  const [skills, setSkills] = useState([...sk]);
  const [skOrPr, setSkOrPr] = useState(false);

  const handleClickProj = (index) => {
    setSkOrPr(false);
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
    setSkOrPr(true);
    const newSkills = [...skills];
    newSkills[index].checked = !newSkills[index].checked;
    setSkills([...newSkills]);

    const newProjects = [...projects];

    newProjects.forEach((item, ind) => {
      newProjects[ind].checked = false;
    });

    newSkills.forEach((item, ind) => {
      if (item.checked) {
        for (let row = 0; row < newProjects.length; row++) {
          newProjects[row].checked =
            newProjects[row].checked || skPr[row + 1][ind + 1];
        }
      }
    });
    setProjects([...newProjects]);
  };

  return (
    <section
      id="skils"
      className="widescreen:section-min-height tallscreen:section-min-height w-full flex flex-col"
    >
      <h2 className="text-center text-2xl mb-4">My Skills and Projects</h2>
      <section className="flex w-full border-indigo-600 rounded-md border-2 flex-1">
        <div className="max-w-50 flex flex-col flex-1">
          <div className="flex justify-center">
            <input
              type="radio"
              checked={!skOrPr}
              onChange={() => {}}
              className="mb-2 w-5 h-5 cursor-pointer"
            />
            <h2 className="inline-block">My projects</h2>
          </div>

          <ul className="flex flex-col items-center h-[40rem] overflow-auto">
            {projects.map((pr, ind) => (
              <Proj_card
                key={`proj${ind}`}
                ind={ind}
                imgSrc={projCard[ind].img}
                name={pr.name}
                checked={pr.checked}
                handleClickProj={handleClickProj}
              />
            ))}
          </ul>
        </div>



    {/* ===================================== */}    
        <div className="w-[65%] h-full shrink">


        <div className="flex justify-center">
            <input
              type="radio"
              checked={skOrPr}
              onChange={() => {}}
              className="mb-2 w-5 h-5 cursor-pointer"
            />
            <h2 className="inline-block">My skills</h2>
          </div>

          <ul className="flex flex-wrap">
          {skills.map((item, ind) => (
              <SkilCard
                key={`skill${ind}`}
                ind={ind}
                imgSrc={skilCard[ind].img}
                name={item.name}
                checked={item.checked}
                handleClickSkil={handleClickSkil}
              />
            ))}
          </ul>
{/* ===================================== */}



          
          {/* <input
            type="radio"
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
          </ul> */}
        </div>
      </section>
    </section>
  );
}
