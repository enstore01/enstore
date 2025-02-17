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
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-light">
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
    </header>
  );
};

export default MainNavigation;
