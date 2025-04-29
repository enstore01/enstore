"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the slideshow
  const backgroundImages = [
    "/images/hero4.jpg",
    "/images/courvoisiercopy2.png",
    "/images/bandD.webp",
    "/images/copy1.avif",
    "/images/buen.jpg",
    "/images/padre.jpg",
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        prevIndex => (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[90vh]"
      aria-label="Hero section with image slideshow"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="container relative z-10 flex items-center justify-center h-full">
        <div className="text-center lg:w-[60%] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl xl:text-7xl font-bold tracking-tighter text-white"
          >
            Discover the World of Premium Wines & Spirits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-gray-200 mt-6 tracking-tight font-poppins"
          >
            Embark on a Journey Through the World&apos;s Finest Spirits.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
