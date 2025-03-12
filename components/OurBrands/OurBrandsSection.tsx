"use client";
import { useRef, useState, useEffect } from "react";
import BrandCard from "./BrandCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teeling2 from "@/public/images/TeelingTrinity1.jpg";
import neftLogo from "@/public/images/neftnew.png";
import padreAzul1 from "@/public/images/padreNew.png";
import courvoisier1 from "@/public/images/courvoisierNew.png";
import bisquit1 from "@/assets/BisquitDubouche1.jpg";
import buenAmigo1 from "@/public/images/buenAmigoNew.png";

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
      "Teeling Whiskey carries a rich Dublin distilling heritage dating back to 1782. The brand blends tradition with innovation, using unique maturation techniques to craft the most amazing Irish whiskeys ever made. Teeling Whiskey has won over 500 international awards, including World’s Best Single Malt, World’s Best Single Grain, and is now enjoyed in over countries around the world.",
  },
  {
    image: courvoisier1,
    title: "Courvoisier",
    description:
      "Crafted with passion and precision, Courvoisier is the Cognac of celebration, inspired by the elegance of France. From carefully selected vineyards to centuries-old distillation methods, every sip embodies refinement and rich, complex flavors. As the spirit of choice for history’s great moments, Courvoisier invites you to savor luxury, heritage, and the art of cognac.",
  },
  {
    image: bisquit1,
    title: "Bisquit & Dubouché",
    description:
      "Since 1819, Bisquit & Dubouché has crafted exceptional cognac. Renowned for its longer distillation process, Bisquit & Dubouché cognacs reveal deeper aromas, smoothness, and rich complexity. A symbol of bold elegance, Bisquit & Dubouché invites you to discover the artistry of time in every sip.",
  },

  {
    image: neftLogo,
    title: "Neft Vodka",
    description:
      "Neft is an Austrian produced vodka with a natural, slightly sweet finish that can be sipped straight, or used to enhance your favourite cocktail. Encased in a sleek, eco-friendly barrel, NEFT blends premium quality with a bold, modern edge. No additives, no gimmicks—just vodka the way it was meant to be",
  },
  {
    image: buenAmigo1,
    title: "Buen Amigo Tequila",
    description:
      "Tequila Buen Amigo is more than just a drink—it’s a celebration of friendship and good times. Made from 100% blue agave and distilled with passion in the heart of Mexico, our tequila delivers smooth, rich flavors perfect for any occasion. Whether sipped neat, on the rocks, or in a cocktail, Buen Amigo brings people together, one toast at a time.",
  },
  {
    image: padreAzul1,
    title: "Padre Azul",
    description:
      "Crafted in Jalisco, Mexico, Padre Azul is an award-winning ultra-premium tequila made from 100% blue agave. Aged to perfection in hand-selected oak barrels, it delivers a rich, smooth taste with deep complexity. Encased in a signature handcrafted bottle with a bold skull cap, Padre Azul is more than tequila—it’s a tribute to tradition, craftsmanship, and unforgettable moments.",
  },
];

const OurBrandsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? Math.max(scrollLeft - scrollAmount, 0)
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => {
        carousel.removeEventListener("scroll", checkScrollPosition);
        window.addEventListener("resize", checkScrollPosition);
      };
    }
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
