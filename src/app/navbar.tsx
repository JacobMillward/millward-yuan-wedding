import Link from "next/link";
import React from "react";

interface NavLink {
  title: string;
  target: string;
}

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 bg-burgundy">
      <div className="flex-shrink-0">
        <h1 className="text-white text-2xl font-bold">J & J</h1>
      </div>

      <div className="flex ml-auto sm:ml-0">
        {navLinks.map((link) => (
          <Link
            key={link.target}
            href={link.target}
            className="ml-4 text-white hover:text-gray-300 transition-colors ease-out duration-300"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* This empty div makes the menu links centered*/}
      <div></div>
    </nav>
  );
};

export default Navbar;
