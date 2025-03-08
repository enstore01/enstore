"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutPic from "@/public/images/IMG_3729.jpg";
import Link from "next/link";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-8 bg-light " aria-label="About Us">
      <div className="container">
        <div className="md:flex items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-[45%] font-poppins space-y-6 text-justify"
          >
            <div>
              <h2 className="top-header">We Are Enstore</h2>
            </div>

            <p className="text-primary mt-6 tracking-tight">
              At Enstore, we are passionate about delivering the finest
              selection of premium wines and spirits to Nigeria’s insightful
              consumers. We are a wines and spirits importation, marketing,
              sales, and distribution company committed to sourcing the most
              unique, innovative and premium brands making fresh entry into the
              booming Nigerian market.
            </p>

            <p className="text-primary tracking-tight">
              We curate a world-class portfolio of internationally renowned
              brands, ensuring that every bottle we distribute represents
              quality, craftsmanship, and heritage. With a deep understanding of
              Nigeria&apos;s dynamic beverage market, we are committed to
              elevating the drinking experience by offering a diverse range of
              exceptional spirits, including{" "}
              <Link
                href="/brands#teeling-whiskey"
                className="text-brand font-semibold"
              >
                Teeling Whiskey
              </Link>
              ,{" "}
              <Link
                href="/brands#neft-vodka"
                className="text-brand font-semibold"
              >
                NEFT Vodka
              </Link>
              ,{" "}
              <Link
                href="/brands#buen-amigo-tequila"
                className="text-brand font-semibold"
              >
                Tequila Buen Amigo
              </Link>
              ,{" "}
              <Link
                href="/brands#padre-azul"
                className="text-brand font-semibold"
              >
                Padre Azul
              </Link>
              ,{" "}
              <Link
                href="/brands#bisquit---dubouché"
                className="text-brand font-semibold"
              >
                Bisquit & Dubouché Cognac
              </Link>
              , and{" "}
              <Link
                href="/brands#courvoisier"
                className="text-brand font-semibold"
              >
                Courvoisier
              </Link>
              .
            </p>

            <p className="hidden xl:block text-primary mt-2 tracking-tight lg:pr-10">
              Through strategic distribution, and innovative marketing, we
              ensure that every sip of the brands in our portfolio reflects
              authenticity, sophistication, and conviviality. Whether
              you&apos;re savoring a classic whiskey, toasting with a refined
              cognac, or enjoying a handcrafted cocktail, Enstore Nigeria Ltd is
              dedicated to bringing the world’s finest wines & spirits to your
              glass.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="md:w-[45%] rounded-md overflow-hidden mt-8 md:mt-20 xl:p-10"
          >
            <Image
              src={aboutPic}
              alt="Enstore premium drinks collection"
              className="rounded-md object-cover"
              priority
              quality={90}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
