"use client";
import { useRef, useState, useEffect } from "react";
import BrandCard from "./BrandCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teeling2 from "@/public/images/TeelingTrinity1.jpg";
import neftLogo from "@/public/images/neft4.jpg";
import padreAzul1 from "@/assets/padreAzul1.jpeg";
import courvoisier1 from "@/public/images/courvoisier4.jpg";
import bisquit1 from "@/assets/BisquitDubouche1.jpg";
import buenAmigo1 from "@/public/images/beunAmigo.jpg";

import { StaticImageData } from "next/image";

interface Brand {
  image: StaticImageData;
  title: string;
  description: string;
}

const brands: Brand[] = [
  {
    image: teeling2,
    title: "Teeling Whiskey",
    description:
      "Teeling Whiskey Bottled at 46% with no chill filtration, Teeling whiskeys have unique extra maturation in Rum/Wine casks",
  },
  {
    image: courvoisier1,
    title: "Courvoisier",
    description:
      "Courvoisier Cognac is premium French brand renowned for its rich heritage and exceptional craftsmanship. Blending the finest eaux-de-vie from Cognac",
  },
  {
    image: bisquit1,
    title: "Bisquit & Dubouche",
    description:
      "Bisquit & Dubouche Cognac offers a smooth, aromatic blend with rich notes of honey, fruits, and spice, crafted for timeless elegance",
  },

  {
    image: neftLogo,
    title: "Neft Vodka",
    description:
      "Neft is an Austrian produced vodka with a natural, slightly sweet finish that can be sipped straight, or used to enhance your favourite cocktail.",
  },
  {
    image: buenAmigo1,
    title: "Buen Amigo Tequila",
    description:
      "Beun Amigo Tequila is a smooth, vibrant spirit with rich agave flavours, perfect for sipping or cocktails, celebrating true frendship and craftmanship.",
  },
  {
    image: padreAzul1,
    title: "Padre Azul",
    description:
      "Padre Azul Tequila is an ultra-premium, handcrafted spirit with rich agave flavors, smooth complexity, and a bold, stylish presentation.",
  },
];

const OurBrandsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Show/hide left arrow
      setShowLeftArrow(scrollLeft > 0);
      // Show/hide right arrow
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // Adjust based on visible cards
      const newScrollLeft =
        direction === "left"
          ? Math.max(scrollLeft - scrollAmount, 0)
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Check scroll position after scrolling
      setTimeout(checkScrollPosition, 300); // Delay to account for smooth scrolling
    }
  };

  // Check scroll position on mount and resize
  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  return (
    <section className="py-8 pb-20">
      <div className="container relative">
        <div className="text-center">
          <h2 className="top-header">Our Brands</h2>
          <p className="mt-2 text-gray-600 mx-auto max-w-[600px]">
            Discover a portfolio of iconic wines and spirits, each crafted to
            perfection. Our brands define luxury, heritage, and craftsmanship.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Left Button */}
          {showLeftArrow && (
            <button
              aria-label="Scroll left"
              className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-50"
              onClick={() => scroll("left")}
              disabled={!showLeftArrow}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {/* Cards Grid */}
          <div
            ref={carouselRef}
            className="mt-10 flex gap-6 overflow-x-auto justify-start snap-x scrollbar-hide scroll-smooth"
            role="region"
            aria-label="Brands carousel"
          >
            {brands.map((brand, index) => (
              <BrandCard key={index} {...brand} />
            ))}
          </div>
          {/* Right Button */}
          {showRightArrow && (
            <button
              aria-label="Scroll right"
              className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-50"
              onClick={() => scroll("right")}
              disabled={!showRightArrow}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurBrandsSection;
