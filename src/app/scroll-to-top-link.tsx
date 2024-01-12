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
      className={`fixed z-50 group bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/50 text-white py-2 px-4 rounded-full transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Link href="#top">Back to top</Link>
      <span className="absolute inset-x-0 bottom-1.5 h-0.5 bg-white transform translate-x-4 scale-x-0 group-hover:translate-x-0 group-hover:scale-x-75 transition-transform ease-out duration-300" />
    </div>
  );
};
