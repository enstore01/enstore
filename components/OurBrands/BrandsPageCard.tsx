"use client";

import { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";

export interface BrandsPageCardProps {
  images: StaticImageData[]; // Array of images for the carousel
  title: string;
  variations: string[]; // e.g. ["VS", "VSOP", "XO"]
  description: string[];
  reverse: boolean;
}

const BrandsPageCard: React.FC<BrandsPageCardProps> = ({
  images,
  title,
  variations,
  description,
  reverse,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row mt-20 bg-light shadow p-4 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2 relative rounded-lg overflow-hidden h-[300px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0.5, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Courvoisier image ${currentImageIndex + 1}`}
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            disabled={currentImageIndex === 0}
            aria-label="Previous image"
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full transition ${
              currentImageIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-75"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentImageIndex === images.length - 1}
            aria-label="Next image"
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full transition ${
              currentImageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-75"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 p-4">
        <h2 className="top-header mt-0 pb-3">{title}</h2>
        <div className="flex flex-wrap gap-2 mt-2 font-semibold items-center text-gold ml-1">
          {variations.map((variation, index) => (
            <span
              key={index}
              className={`px-2 border border-gold rounded-md cursor-pointer ${currentImageIndex === index ? "bg-brand text-light border-none" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            >
              {variation}
            </span>
          ))}
        </div>
        <p className="mt-6 xl:mr-20">
          <motion.span
            key={currentImageIndex} // Ensures re-animation on text change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {description[currentImageIndex]}
          </motion.span>
        </p>
        {/* <p className="mt-6 xl:mr-20">{`${description[currentImageIndex]}`}</p> */}
      </div>
    </div>
  );
};

export default BrandsPageCard;
