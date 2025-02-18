"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 backdrop-blur-sm z-20 bg-light">
      <div className="container">
        <div className="flex items-center justify-between p-4">
          <Image src={logo} alt="Enstore logo" width={120} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-primary"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex xl:w-1/2 lg:text-[18px] font-medium gap-6 items-center text-navy">
            <Link href="/" className="p-4">
              Home
            </Link>
            <Link href="/brands" className="p-4">
              Our Brands
            </Link>
            <Link href="/blog" className="p-4">
              Blog
            </Link>
            <Link href="/careers" className="p-4">
              Careers
            </Link>
          </nav>
        </div>
      </div>
      {/* Mobile Menu (Slide-in) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu} // Clicking outside closes menu
      ></div>

      <nav
        className={`fixed top-0 right-0 w-3/4 max-w-[280px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-navy"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
        >
          <X size={28} />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-start mt-16 space-y-6 text-navy text-lg p-6">
          <Link
            href="/"
            className="p-2 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/brands"
            className="p-2 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Our Brands
          </Link>
          <Link
            href="/blog"
            className="p-2 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="p-2 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Careers
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;

{
  /* Mobile Menu (Slide-in) */
}
//  <div
//  className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
//    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//  }`}
//  onClick={toggleMenu} // Clicking outside closes menu
// ></div>

// <nav
//  className={`fixed top-0 right-0 w-3/4 max-w-[300px] h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
//    isOpen ? "translate-x-0" : "translate-x-full"
//  }`}
// >
//  <button
//    className="absolute top-4 right-4 text-primary"
//    onClick={toggleMenu}
//    aria-label="Close navigation menu"
//  >
//    <X size={28} />
//  </button>

//  <div className="flex flex-col items-start mt-16 space-y-6 text-navy text-lg p-6">
//    <Link href="/" className="p-2" onClick={toggleMenu}>
//      Home
//    </Link>
//    <Link href="/brands" className="p-2" onClick={toggleMenu}>
//      Our Brands
//    </Link>
//    <Link href="/blog" className="p-2" onClick={toggleMenu}>
//      Blog
//    </Link>
//    <Link href="/careers" className="p-2" onClick={toggleMenu}>
//      Careers
//    </Link>
//  </div>
// </nav>
