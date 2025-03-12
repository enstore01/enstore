"use client";
import Image from "next/image";
import award1 from "@/public/images/awards/award1.jpg";
import award2 from "@/public/images/awards/award2.jpg";
import award3 from "@/public/images/awards/award3.jpg";
import award4 from "@/public/images/awards/award4.png";
import award5 from "@/public/images/awards/award5.jpg";
import award6 from "@/public/images/awards/award6.jpg";
import award7 from "@/public/images/awards/award7.jpg";
import award8 from "@/public/images/awards/award8.jpg";
import award9 from "@/public/images/awards/award9.jpg";
import award10 from "@/public/images/awards/award10.jpg";
import award11 from "@/public/images/awards/award11.jpg";
import award12 from "@/public/images/awards/award12.png";
import award13 from "@/public/images/awards/award13.jpg";
import award14 from "@/public/images/awards/award14.jpg";
import award15 from "@/public/images/awards/award15.png";
import award16 from "@/public/images/awards/award16.jpg";
import award17 from "@/public/images/awards/award17.jpg";
import award18 from "@/public/images/awards/award18.png";
import award19 from "@/public/images/awards/award19.jpg";
import award20 from "@/public/images/awards/award20.jpg";
import award21 from "@/public/images/awards/award21.jpg";
import award22 from "@/public/images/awards/award22.png";
const AwardsComponents = () => {
  // Array of all award images in their original order
  const allAwards = [
    { src: award1, alt: "Award 1" },
    { src: award2, alt: "Award 2" },
    { src: award3, alt: "Award 3" },
    { src: award4, alt: "Award 4" },
    { src: award5, alt: "Award 5" },
    { src: award6, alt: "Award 6" },
    { src: award7, alt: "Award 7" },
    { src: award8, alt: "Award 8" },
    { src: award9, alt: "Award 9" },
    { src: award10, alt: "Award 10" },
    { src: award11, alt: "Award 11" },
    { src: award12, alt: "Award 12" },
    { src: award13, alt: "Award 13" },
    { src: award14, alt: "Award 14" },
    { src: award15, alt: "Award 15" },
    { src: award16, alt: "Award 16" },
    { src: award17, alt: "Award 17" },
    { src: award18, alt: "Award 18" },
    { src: award19, alt: "Award 19" },
    { src: award20, alt: "Award 20" },
    { src: award21, alt: "Award 21" },
    { src: award22, alt: "Award 22" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="top-header text-center">Awards</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Our brands have been recognized globally for their excellence, earning
          prestigious awards in the wine and spirits industry. Each accolade
          reflects the craftsmanship, quality, and dedication behind every
          bottle.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {allAwards.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-[120px] w-full">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsComponents;
