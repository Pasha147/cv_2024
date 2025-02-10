"use client";
import Image from "next/image";

export default function Proj_card(props) {
  return (
    <li className="w-44">
      <div
        className="border border-gray-300 rounded-lg  bg-slate-700   overflow-hidden shadow-md hover:shadow-lg transition p-4 cursor-pointer m-2"
        onClick={() => toggleCheck(project.id)}
      >
        <div className="relative w-full h-24">
          <Image
            src={`/img/projects/${props.imgSrc}`}
            alt="IMG"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-semibold">{props.name}</span>
          <input
            type="checkbox"
            checked={props.checked}
            onChange={() => props.handleClickProj(props.ind)}
            className="w-5 h-5 accent-indigo-600"
            onClick={(e) => e.stopPropagation()} // Щоб не спрацьовував батьківський клік
          />
        </div>
      </div>
    </li>
  );
}
