import logo from "@/assets/Logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-brand text-white text-center">
      <div className="container">
        <div className="inline-flex">
          <Image src={logo} alt="Enstore logo" height={30} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/">Home</Link>
          <Link href="/brands">Our Brands</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/management">Management</Link>
          <Link href="/careers">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.facebook.com/enstorenigeria?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com/enstorenigeria?utm_source=qr&igsh=MTR5NWptdHd6ZHJ1MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Youtube />
          </a>
          <a
            href="https://www.linkedin.com/company/enstore-nigeria-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Linkedin />
          </a>
        </div>
        <p className="mt-6 text-sm">
          Enstore &copy; 2024 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
