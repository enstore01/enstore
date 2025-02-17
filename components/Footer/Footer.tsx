import logo from "@/assets/Logo-white.png";
import Image from "next/image";
// import image1 from "@/assets/buenAmigo1.jpg";
// import image2 from "@/assets/enstore01.png";
// import image3 from "@/assets/enstore2.jpg";
// import image4 from "@/assets/neft.jpg";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-brand text-white text-center">
      {/* <div className="container md:flex justify-between gap-10">
        <div className="mt-10">
          <Image src={logo} alt="Enstore logo" className="ml-2" width={120} />

          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook
                size={24}
                className="text-white hover:text-gray-300 transition"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter
                size={24}
                className="text-white hover:text-gray-300 transition"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram
                size={24}
                className="text-white hover:text-gray-300 transition"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin
                size={24}
                className="text-white hover:text-gray-300 transition"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube
                size={24}
                className="text-white hover:text-gray-300 transition"
              />
            </a>
          </div>
        </div>
        <div className="mt-10 lg:text-[18px] shrink-0">
          <h2 className="text-white font-bold text-[24px]">Quick Links</h2>
          <p className="text-gray-200 cursor-pointer hover:text-white">Home</p>
          <p className="text-gray-200 cursor-pointer hover:text-white">
            Our Brands
          </p>
          <p className="text-gray-200 cursor-pointer hover:text-white">Blog</p>
          <p className="text-gray-200 cursor-pointer hover:text-white">
            Careers
          </p>
        </div>

        <div className="mt-10 lg:text-[18px]">
          <h2 className="text-white font-bold text-[24px]">Contact Us</h2>
          <p className="text-gray-200 cursor-pointer hover:text-white">
            enstore@email.com
          </p>
          <p className="text-gray-200 cursor-pointer hover:text-white">
            1 Street Name, City, Country
          </p>
          <p className="text-gray-200 cursor-pointer hover:text-white">
            123-456-7890
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-10">
          {[image1, image2, image3, image4, image1, image2].map(
            (img, index) => (
              <div
                key={index}
                className="w-16 h-16 flex items-center justify-center bg-white rounded overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Brand ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="container flex justify-between text-silver text-center text-[14px] mt-16">
        <p className="">
          <b>Enstore © 2024</b> - All rights reserved.
        </p>
        <p> Designed by Zee</p>
      </div> */}
      <div className="container">
        <div className="inline-flex">
          <Image src={logo} alt="Enstore logo" height={30} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">Home</a>
          <a href="">Our Brands</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Facebook /> <Twitter /> <Instagram /> <Youtube /> <Linkedin />
        </div>
        <p className="mt-6 text-sm">
          Enstore &copy; 2024 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
