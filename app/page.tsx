"use client";
import { useAppSelector, useAppDispatch } from "./hooks";
import Link from "next/link";
import { decrement, increment } from "./features/data/dataSlice";
import  { AboutMe,HorizontalTimeline  } from "./component/home";

export default function Home() {
  const count = useAppSelector((state) => state.data.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      <div className="bg-primary-dark m-4 p-4 rounded-lg">
      <AboutMe/>
      </div>
      <div className="bg-primary-dark m-4 p-4 rounded-lg">
      <HorizontalTimeline/>
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
