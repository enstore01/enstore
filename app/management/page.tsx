"use client";
import PageHeader from "@/components/PageHeader/PageHeader";
import Footer from "@/components/Footer/Footer";
import { managementData } from "@/lib/managementData";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const OurManagementPage = () => {
  return (
    <div>
      <PageHeader
        title="Our Management"
        src="/images/hero4.jpg"
        description="Meet our exceptional leadership team driving innovation and excellence in the spirits industry."
      />

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-10">
          {managementData.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8 mb-20 mt-10`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-[30%]">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-xl h-[500px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="lg:w-[50%] space-y-6 text-justify shadow-md p-4"
              >
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {member.name}
                  </h2>
                  <p className="text-xl text-brand font-semibold">
                    {member.title}
                  </p>
                </div>

                <div className="max-w-none text-gray-600 text-justify tracking-tight">
                  <p className="leading-relaxed">{`${member.description}`}</p>
                </div>

                {/* Contact & Social */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg hover:bg-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@enstore.com`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-brand text-brand hover:bg-brand hover:text-white rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurManagementPage;
