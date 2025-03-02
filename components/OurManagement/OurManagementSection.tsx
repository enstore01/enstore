"use client";
import { motion } from "framer-motion";
import OurManagementCard from "./OurManagementCard";
import { managementData } from "@/lib/managementData";

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
          {managementData.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={index}
              viewport={{ once: true, amount: 0.3 }}
            >
              <OurManagementCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurManagementSection;
