"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight / 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => checkScroll(), []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className={`fixed flex flex-col z-50 group bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/50 text-white px-4 pt-2.5 pb-2 rounded-full transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Link href="#top">Back to top</Link>
      <span className="mx-auto h-0.5 bg-white w-0 group-hover:w-full transition-all ease-out duration-300" />
    </div>
  );
};
