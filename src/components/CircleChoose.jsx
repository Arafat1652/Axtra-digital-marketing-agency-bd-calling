import React from "react";
import "../App.css";
import { MdArrowOutward } from "react-icons/md";

const CircleChoose = () => {
  return (
    <div className="p-10 mt-24">
      <div className="flex items-center justify-between gap-60">
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-10">
          <p className="text-gray-900 uppercase font-semibold mb-8">
            why <br /> choose us
          </p>
          {/* <p className="text-gray-900 uppercase font-semibold">why
        choose us</p> */}
          <h1 className="text-7xl leading-[0.2] font-medium text-gray-900 dark:text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal uppercase">
            Keword,Research
          </h1>
          <h1 className="text-7xl leading-[0.2] font-medium text-gray-900 dark:text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal uppercase">
            Strategy, Survey,
          </h1>
          <h1 className="text-7xl leading-[0.2] font-medium text-gray-900 dark:text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal uppercase">
            {" "}
            & Analytics
          </h1>
          <p className="mt-20 mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-900 ml-10 w-[410px] font-medium">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          {/* buttn */}
          <div className="mt-10 ml-10">
            <a
              role="button"
              className="font-medium btn-outline hover:bg-black text-black text-sm px-4 py-2  border rounded-full"
            >
              GOOGLE
            </a>
            <a
              role="button"
              className="font-medium btn-outline hover:bg-black text-black text-sm px-4 py-2  border rounded-full"
            >
              PINTEREST
            </a>
            <a
              role="button"
              className="font-medium btn-outline hover:bg-black text-black text-sm px-4 py-2  border rounded-full"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
        <div>
            {/* right circle side */}
          <div>
            {/* 60% */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="#"
                className="text-black btn btn-outline w-[200px] h-[200px] border-4 border-black rounded-[1000px] text-5xl font-normal"
              >
                60%
              </a>
               <div>
               <h1 className="text-4xl font-medium text-black uppercase">strategy</h1>
               <p className=" text-black w-[80%] mt-5">Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
               </div>
            </div>
            {/* 60% end */}
            {/* 95% */}
            <div className="flex items-center justify-center gap-8 my-5 -translate-x-28">
              <a
                href="#"
                className="text-black btn btn-outline w-[200px] h-[200px] border-4 border-black rounded-[1000px] text-5xl font-normal"
              >
                95%
              </a>
               <div>
               <h1 className="text-4xl font-medium text-black uppercase">Audience</h1>
               <p className=" text-black w-[80%] mt-5">Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
               </div>
            </div>
            {/* 95% end */}
            {/* 70% */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="#"
                className="text-black btn btn-outline w-[200px] h-[200px] border-4 border-black rounded-[1000px] text-5xl font-normal"
              >
                70%
              </a>
               <div>
               <h1 className="text-4xl font-medium text-black uppercase">Keyword</h1>
               <p className=" text-black w-[80%] mt-5">Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
               </div>
            </div>
            {/* 70% end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleChoose;
