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
  headFont: string;
  bodyFont: string;
  website?: string;
}

const BrandsPageCard: React.FC<BrandsPageCardProps> = ({
  images,
  title,
  variations,
  description,
  reverse,
  headFont,
  bodyFont,
  website,
}) => {
  const brandId = title.toLowerCase().replace(/\s+|&/g, "-");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      id={brandId}
      className={`flex flex-col lg:flex-row mt-20 bg-light shadow p-4 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2 relative rounded-lg overflow-hidden h-[300px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.5, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Courvoisier image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous image"
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full transition ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-75"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full transition ${
              currentIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-75"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 p-4">
        <h2
          className="top-header mt-0 pb-3"
          style={{ fontFamily: `var(--font-${headFont})` }}
        >
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 mt-2 font-semibold items-center text-[#2b2d42] ml-1">
          {variations.map((variation, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentIndex === index}
              aria-controls={`${title}-${variation}-panel`}
              className={`px-2 py-1 border border-gold rounded-md transition-all hover:bg-brand/10 focus:outline-none focus:ring-2 focus:ring-brand ${
                currentIndex === index ? "bg-brand text-light border-none" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {variation}
            </button>
          ))}
        </div>
        <p
          className="mt-6 text-justify xl:mr-20 text-[18px]"
          style={{ fontFamily: `var(--font-${bodyFont})` }}
        >
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {description[currentIndex]}
          </motion.span>
        </p>
        {website && (
          <p className="text-brand mt-2">
            <a href={website}>Official Website</a>
          </p>
        )}
        {/* Navigation Dots */}
        <div className="flex justify-start gap-2 mt-6">
          {variations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View ${variations[index]} details`}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-brand w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPageCard;
