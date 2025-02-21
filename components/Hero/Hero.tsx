"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
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
            Global icon in premium wines and spirits, crafting legendary brands
            that celebrate excellence and bring people together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section
//       className="relative py-8 bg-cover bg-center bg-no-repeat h-[85vh] flex justify-center items-center"
//       style={{
//         backgroundImage: "url('/images/hero4.jpg')", // Make sure this path is correct
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <div className="container z-10">
//         <div className="text-center lg:w-1/2 mx-auto">
//           <h1 className="text-5xl xl:text-7xl font-bold tracking-tighter bg-gradient-to-b from-light to-white bg-clip-text text-transparent mt-6">
//             Discover the World of Premium Wines & Spirits
//           </h1>
//           <p className="text-xl text-white mt-6 tracking-tight">
//             Global icon in premium wines and spirits, crafting legendary brands
//             that celebrate excellence and bring people together.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

{
  /* <div className="mt-20 md:mt-0 md:w-[45%]">
            <Image src={neft} alt="Neft Vodka" className="w-full" priority />
          </div> */
}

{
  /* <motion.img
src={neft.src}
alt="Neft Vodka"
className="w-full"
animate={{ translateY: [-30, 30] }}
transition={{
  repeat: Infinity,
  repeatType: "mirror",
  duration: 2,
  ease: "easeInOut",
}} */
}
