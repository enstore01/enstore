"use client";
import Image, { StaticImageData } from "next/image";
import teelingLogo from "@/assets/teelingLogo.svg";
import neftLogo from "@/public/images/NEFT-logo.webp";
import courvoisierLogo from "@/public/images/courvoisierLogo.png";
import bisquitDuboucheLogo from "@/assets/BisquitDuboucheLogo.jpg";
import beunAmigoLogo from "@/assets/buenAmigo1.jpg";
import padreAzul from "@/assets/padre-azul.webp";

import { motion } from "framer-motion";

interface BrandLogo {
  src: StaticImageData;
  alt: string;
}

const brandLogos: BrandLogo[] = [
  { src: teelingLogo, alt: "Teeling Whiskey" },
  { src: neftLogo, alt: "Neft Vodka" },
  { src: courvoisierLogo, alt: "Courvoisier Cognac" },
  { src: bisquitDuboucheLogo, alt: "Bisquit Dubouche" },
  { src: beunAmigoLogo, alt: "Buen Amigo Tequila" },
  { src: padreAzul, alt: "Padre Azul Tequila" },
];

const ScrollingWidget = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* Duplicate logos to make the animation seamless */}
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  className="object-contain"
                  loading="lazy"
                  onError={e => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingWidget;
