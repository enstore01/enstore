"use client";
import { motion } from "framer-motion";
import OurManagementCard from "./OurManagementCard";
import managementImage1 from "@/assets/team1.jpg";
import managementImage2 from "@/assets/team2.jpg";
import managementImage3 from "@/assets/team3.jpg";

const dummyManagement = [
  {
    image: managementImage1,
    title: "Managing Director",
    name: "Emmanuel Ogu",
    description:
      "A Distribution Professional with over 15 years experience of outstanding success in professional Sales/Distribution, Channel Partner Management, Trade Marketing, Route To Market Development/Roll Out and In Market Research/Analysis.",

    link: "https://www.linkedin.com/in/emmanuel-ogu-48654777 ",
  },
  {
    image: managementImage2,
    title: "General Manager Corporate Services",
    name: "Edijana Udosen",
    description:
      "Edijana Udosen is an accomplished Human Capital Management professional with over 17 years of expertise in core Human Resources and Corporate Services Management with an extensive background spanning FMCG (Wines & Spirts).",
    link: "https://www.linkedin.com/in/edijana-udosen",
  },
  {
    image: managementImage3,
    title: "General Manager Commercial",
    name: "David Allison",
    description:
      "An innovative and experienced supply chain and business development professional. Highly knowledgeable in logistics, sales and operation management, adept at evaluating situations and leading change.",
    link: "https://www.linkedin.com/in/david-allison-99403280",
  },
];

const OurManagementSection = () => {
  return (
    <section
      id="management"
      className="py-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left_,#183EC2,#EAEEFE_70%)]"
    >
      <div className="container relative">
        <div className="text-center">
          <h2 className="top-header text-brand py-4">Our Management</h2>
          <p className="text-navy mx-auto max-w-[600px]">
            Meet the visionary leaders driving our success. With expertise,
            passion, and dedication, they guide our journey towards excellence.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center py-10">
          {dummyManagement.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={index}
              viewport={{ once: true, amount: 0.3 }}
            >
              <OurManagementCard
                image={member.image}
                title={member.title}
                name={member.name}
                description={member.description}
                link={member.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurManagementSection;
