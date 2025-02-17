// "use client";
import Image from "next/image";
import aboutPic from "@/public/images/IMG_3729.jpg";

const AboutUsSection = () => {
  // const scrollToManagement = () => {
  //   const section = document.getElementById("management");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section className="py-8 bg-light">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[45%] font-poppins">
            <div>
              <h2 className="top-header">We Are Enstore</h2>
            </div>
            {/* <p className="text-brand font-medium tracking-tight">
              Only the best....
            </p> */}
            <p className="text-primary mt-6 tracking-tight">
              At Enstore, we are passionate about delivering the finest
              selection of premium wines and spirits to Nigeria’s insightful
              consumers. We are a wines and spirits importation, marketing,
              sales, and distribution company committed to sourcing the most
              unique, innovative and premium brand companies making fresh entry
              into the booming Nigerian market.
              <br />
              <br />
              We curate a world-class portfolio of internationally renowned
              brands, ensuring that every bottle we distribute represents
              quality, craftsmanship, and heritage. With a deep understanding of
              Nigeria’s dynamic beverage market, we are committed to elevating
              the drinking experience by offering a diverse range of exceptional
              spirits, including Teeling Whiskey, NEFT Vodka, Tequila Buen
              Amigo, Padre Azul, Bisquit & Dubouché Cognac, and Courvoisier.
            </p>
            <p className="hidden xl:block text-primary mt-2 tracking-tight lg:pr-10">
              Through strategic distribution, innovative marketing, and
              educational initiatives, we ensure that every sip of our brands
              reflects authenticity, sophistication, and enjoyment. Whether
              you&apos;re savoring a classic whiskey neat, toasting with a
              refined cognac, or enjoying a handcrafted cocktail, Enstore
              Nigeria Ltd is dedicated to bringing the world’s finest spirits to
              your glass.Experience Excellence. Enjoy the Finest.
            </p>
            {/* <button
              onClick={scrollToManagement}
              className="btn btn-primary mt-6"
            >
              Our Management
            </button> */}
          </div>
          <div className="md:w-[45%] rounded-md  overflow-hidden mt-4 xl:p-10">
            <Image src={aboutPic} alt="drinks" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
