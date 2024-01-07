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

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <Link
      href="#top"
      className={`fixed bottom-4 right-4 bg-black text-white py-2 px-4 rounded-full transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      Back to top
    </Link>
  );
};
