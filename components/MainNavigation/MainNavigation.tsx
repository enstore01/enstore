"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Our Brands" },
  { href: "/blog", label: "Blog" },
  { href: "/management", label: "Management" },
  { href: "/careers", label: "Careers" },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getLinkClassName = (href: string) => `
    px-4 py-2 border-b-4 xl:text-[20px] shrink-0 ${
      pathname === href ? "border-brand" : "border-transparent"
    } transition-all duration-200
  `;

  return (
    <header className="sticky top-0 left-0 z-20 bg-light shadow-md">
      <div className="container relative">
        <div className="flex items-center justify-between px-4 pt-6 pb-2 md:pb-0">
          <Link href="/">
            <Image
              src={logo}
              alt="Enstore logo"
              // width={120}
              height={30} // 120 * (71/416) ≈ 21
              className="cursor-pointer"
              priority
              quality={100}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none text-primary"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex xl:w-1/2 lg:text-[18px] font-medium gap-6 items-center text-navy">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={getLinkClassName(href)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
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
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="p-2" onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
