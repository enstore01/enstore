"use client";
import Image from "next/image";
import award1 from "@/public/images/awards/award1.jpg";
import award2 from "@/public/images/awards/award2.jpg";
import award3 from "@/public/images/awards/award3.jpg";
import award4 from "@/public/images/awards/award4.png";
import award5 from "@/public/images/awards/award5.jpg";
// import award6 from "@/public/images/awards/award6.jpg";
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
  // Organize awards by brand categories
  const awardsByBrand = {
    "Teeling Whiskey": [
      { src: award16, alt: "Teeling Award" },
      { src: award17, alt: "Teeling Award" },
      { src: award18, alt: "Teeling Award" },
      { src: award10, alt: "Teeling Award" },
      { src: award11, alt: "Teeling Award" },
      { src: award12, alt: "Teeling Award" },
      { src: award13, alt: "Teeling Award" },
      { src: award8, alt: "Teeling Award" },
      { src: award9, alt: "Teeling Award" },
      { src: award7, alt: "Teeling award" },
    ],
    Courvoisier: [{ src: award2, alt: "Courvoisier Award" }],
    "Bisquit & Dubouché": [
      { src: award3, alt: "B&D Award" },
      { src: award4, alt: "B&D Award" },
    ],
    "Neft Vodka": [{ src: award5, alt: "Neft Award" }],
    Blackpitts: [
      { src: award19, alt: "Blackpitts Award" },
      { src: award20, alt: "Blackpitts Award" },
      { src: award21, alt: "Blackpitts Award" },
      { src: award22, alt: "Blackpitts Award" },
      { src: award14, alt: "Teeling Award" },
      { src: award15, alt: "Teeling Award" },
    ],
    "Padre Azul": [{ src: award1, alt: "Padre Award" }],
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto">
        <h2 className="top-header text-center">Awards</h2>
        <p className="text-center text-white max-w-2xl mx-auto mb-10">
          The brands in our portfolio have been recognized globally for their
          excellence, earning prestigious awards in the wine and spirits
          industry. Each accolade reflects the craftsmanship, quality, and
          dedication behind every bottle.
        </p>

        <div className="space-y-12">
          {Object.entries(awardsByBrand).map(([brandName, brandAwards]) => (
            <div key={brandName} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {brandName}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {brandAwards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-[180px] w-full">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsComponents;
