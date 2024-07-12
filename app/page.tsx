"use client";
import { useAppSelector, useAppDispatch } from "./hooks";
import Link from "next/link";
import { decrement, increment } from "./features/data/dataSlice";

export default function Home() {
  const count = useAppSelector((state) => state.data.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      <div className="bg-primary-dark m-4 p-4 rounded-lg">
        <div className="container flex items-center">
          <span className="text-4xl font-semibold mr-10">
            Manoj Nandakumar.
          </span>
          <Link href="/About-me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
        <div className="">
          I'm Manoj Nandakumar, an MS CS graduate from SUNY at Stony Brook with
          a year of software engineering experience. Passionate about creating
          seamless user experiences, I've worked on projects involving Flutter
          apps, SaaS products, and responsive web design. I enjoy solving
          complex problems and continuously learning new technologies.
          Currently, I'm focused on refining my skills in front-end development
          and technical support.
        </div>
      </div>
      <div className="bg-primary-dark m-4 p-4 rounded-lg">
        
      </div>
      <div className=" bg-primary-dark m-4 p-4 rounded-lg">
        <div className="container flex flex-row items-center">
          <div className="flex-1">2</div>
          <div className="flex-1">2</div>
          <div className="flex-1">2</div>
        </div>
      </div>
    
    </div>
  );
}
