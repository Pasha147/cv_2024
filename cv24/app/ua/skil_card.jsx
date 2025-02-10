"use client";
import Image from "next/image";

export default function SkilCard(props) {
  return (
    <li className="w-20">
      <div
        className="border border-gray-300 rounded-lg  bg-slate-700   overflow-hidden shadow-md hover:shadow-lg transition p-1 cursor-pointer m-2 flex flex-col items-center"
        onClick={() => toggleCheck(project.id)}
      >
        <div className="relative w-12 h-12">
          <Image
            src={`/img/skills/${props.imgSrc}`}
            alt="IMG"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        <span className="font-semibold text-xs">{props.name}</span>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() => props.handleClickSkil(props.ind)}
          className="w-5 h-5 accent-indigo-600"
          onClick={(e) => e.stopPropagation()} // Щоб не спрацьовував батьківський клік
        />
      </div>
    </li>
  );
}
