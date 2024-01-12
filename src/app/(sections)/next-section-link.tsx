import Link from "next/link";
import React from "react";

type Props = {
  target: string;
  children: React.ReactNode;
};

export const NextSectionLink: React.FC<Props> = ({ target, children }) => {
  return (
    <div className="my-auto ml-auto bg-slate-900/70 py-4 pl-4 rounded-l-md sticky bottom-16 mb-16">
      <Link className="flex mr-4 items-center group" href={`#${target}`}>
        <div className="relative text-white font-bold flex flex-col">
          {children}
          <span className="mx-auto h-0.5 bg-white w-0 group-hover:w-full transition-all ease-out duration-300" />
        </div>
        <div className="ml-4 transition-all bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-slate-900 dark:text-slate-200 group-hover:text-blue-500 transition-all ease-out duration-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};
