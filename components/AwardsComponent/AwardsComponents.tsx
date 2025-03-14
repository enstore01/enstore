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
// Import brand images
import teelingSmallBatch from "@/public/images/teelingSmallBatch2.jpg";
import teelingSingleGrain from "@/public/images/teelingSingleGrain.jpg";
import teelingSingleMalt from "@/public/images/singleMalt.jpg";
import teelingBlackpitts from "@/public/images/TeelingBlackpitts.jpg";
import teeling21YO from "@/public/images/TeelingWhiskeyRising21YO.jpg";
import teeling30YO from "@/public/images/30yo70boxbar.jpg";
import courvoisierLogo from "@/public/images/courvoisier5.jpg";
import bisquitLogo from "@/public/images/b&DXO.jpg";
import neftLogo from "@/public/images/neftBlack.jpg";
import padreAzulLogo from "@/public/images/LRC67671.png";

const AwardsComponents = () => {
  // Organize awards by brand categories with brand logos
  const awardsByBrand = {
    "Teeling Single Grain": {
      logo: teelingSingleGrain,
      awards: [
        { src: award15, alt: "Teeling Award" },
        { src: award16, alt: "Teeling Award" },
        { src: award13, alt: "Teeling Award" },
      ],
    },
    "Teeling Small Batch": {
      logo: teelingSmallBatch,
      awards: [
        { src: award9, alt: "Teeling Award" },
        { src: award10, alt: "Teeling Award" },
        { src: award11, alt: "Teeling Award" },
        { src: award12, alt: "Teeling Award" },
      ],
    },
    "Teeling Single Malt": {
      logo: teelingSingleMalt,
      awards: [
        { src: award18, alt: "Teeling Award" },
        { src: award14, alt: "Teeling Award" },
        { src: award17, alt: "Teeling Award" },
      ],
    },
    "Teeling Rising Reserve 21 YO": {
      logo: teeling21YO,
      awards: [{ src: award8, alt: "Teeling Award" }],
    },
    "Teeling 30 YO WHISKEY": {
      logo: teeling30YO,
      awards: [{ src: award7, alt: "Teeling award" }],
    },

    "Teeling Blackpitts": {
      logo: teelingBlackpitts,
      awards: [
        { src: award19, alt: "Blackpitts Award" },
        { src: award20, alt: "Blackpitts Award" },
        { src: award21, alt: "Blackpitts Award" },
        { src: award22, alt: "Blackpitts Award" },
        { src: award13, alt: "Teeling Award" },
      ],
    },
    Courvoisier: {
      logo: courvoisierLogo,
      awards: [{ src: award2, alt: "Courvoisier Award" }],
    },

    "Bisquit & Dubouché": {
      logo: bisquitLogo,
      awards: [
        { src: award3, alt: "B&D Award" },
        { src: award4, alt: "B&D Award" },
      ],
    },

    "Neft Vodka": {
      logo: neftLogo,
      awards: [
        { src: award5, alt: "Neft Award" },
        { src: award6, alt: "Neft Award" },
      ],
    },

    "Padre Azul": {
      logo: padreAzulLogo,
      awards: [{ src: award1, alt: "Padre Award" }],
    },
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto">
        <h2 className="top-header text-center">Awards</h2>
        <p className="text-center text-white max-w-2xl mx-auto mb-10">
          The brands in our portfolio have been recognized globally for their
          excellence, earning prestigious awards in the wines and spirit
          industry. Each accolade reflects the craftsmanship, quality, and
          dedication behind every bottle.
        </p>

        <div className="space-y-12">
          {Object.entries(awardsByBrand).map(([brandName, brandData]) => (
            <div key={brandName} className="bg-white/10 p-6 rounded-lg">
              <div className="md:flex items-center gap-4 mb-6">
                <div className="relative h-[250px] w-[300px] overflow-hidden flex-shrink-0">
                  <Image
                    src={brandData.logo}
                    alt={`${brandName} logo`}
                    fill
                    className="object-cover p-1"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  {brandName}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {brandData.awards.map((award, index) => (
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
