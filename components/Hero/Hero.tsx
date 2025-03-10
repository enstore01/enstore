"use client";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[85vh]"
      aria-label="Hero section with video background"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero4.jpg" // Add a poster image while video loads
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/POUR.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container relative z-10 flex items-center justify-center h-full">
        <div className="text-center lg:w-[60%] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} // Start position (below & hidden)
            animate={{ opacity: 1, y: 0 }} // Final position (visible & at original position)
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            className="text-5xl xl:text-7xl font-bold tracking-tighter text-white"
          >
            Discover the World of Premium Wines & Spirits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Delay for a staggered effect
            className="text-lg text-gray-200 mt-6 tracking-tight font-poppins"
          >
            Embark on a Journey Through the World’s Finest Spirits.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
