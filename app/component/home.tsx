import Link from "next/link"
import {  ScriptProps } from "next/script"

export const AboutMe = ()=>{
    return <div>
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
          a year of software engineering experience. 
        </div>
    </div>
}
import { Timeline } from "../../public/details";
export const HorizontalTimeline = () => {
  return (
    <div className="timeline flex">
      {Timeline.map((event, index) => (
        <div key={index} className="timelineEvent flex-grow">
          <div className="circle bg-primary-light"></div>
          <div className="timelineContent">
            <h3>{event.date}</h3>
            <p>{event.description}</p>
          </div>
          <div className="line bg-primary-light"></div>
        
        </div>
      ))}
    </div>
  );
}
 