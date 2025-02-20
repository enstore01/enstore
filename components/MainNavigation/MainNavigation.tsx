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
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="sticky top-0 left-0  z-20 bg-light shadow-md">
      <div className="container relative">
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

      {/* Backdrop (Closes Menu on Click) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu} // Clicking outside closes menu
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-[300px] h-[90vh] bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-primary"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col gap-6 font-semibold mt-16 text-navy text-lg p-6">
          <Link href="/" className="p-2" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/brands" className="p-2" onClick={closeMenu}>
            Our Brands
          </Link>
          <Link href="/blog" className="p-2" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/careers" className="p-2" onClick={closeMenu}>
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
