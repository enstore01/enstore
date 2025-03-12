"use client";
import Image from "next/image";
// import image1 from "@/public/images/enstoreCareers.jpg";
import image1 from "@/public/images/workwithus.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const WhyJoinUs = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:gap-10 justify-center lg:mt-20">
      <div className="lg:w-[45%] p-4 bg-light">
        <h2 className="top-header py-3">Why Join Us?</h2>
        <p className="italic my-6">-Make your mark-</p>
        <p className="max-w-[400px] mt-6">
          Experience a community where excellence meets passion—enjoy exclusive
          perks, insider access, and expert insights that elevate your journey
          into premium wines and spirits.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary mt-6"
        >
          Submit CV
        </button>
      </div>
      <div className="lg:w-[50%]">
        <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] relative">
          <Image
            src={image1}
            alt="man smiling with a bottle"
            fill
            className="object-cover"
          />
        </div>
        <div className="py-8">
          <p>
            To nurture and grow some of the most iconic brands in the industry
            is hugely exciting. The culture of feedback, measurement and
            continuous improvement keeps me on my toes in the best way.
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Submit Your CV</h3>
            <p className="text-gray-600">
              Please send your CV to{" "}
              <a
                href="mailto:hr@enstore-ng.com?subject=CV Submission"
                className="text-accent hover:underline"
              >
                hr@enstore-ng.com
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyJoinUs;
