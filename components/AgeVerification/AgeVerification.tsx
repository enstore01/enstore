"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/Logo.png";

const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false);
  const [verified, setVerified] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    // Check if user has already verified age and if verification is still valid
    const verificationData = localStorage.getItem("ageVerified");

    if (!verificationData) {
      // No verification data found
      setVerified(false);
      setShowModal(true);
    } else {
      try {
        const { verified, expires } = JSON.parse(verificationData);
        const now = new Date().getTime();

        // Check if verification has expired
        if (!verified || now > expires) {
          setVerified(false);
          setShowModal(true);
        }
      } catch (error) {
        // If there's an error parsing the data, reset verification
        console.log(error);
        setVerified(false);
        setShowModal(true);
      }
    }
  }, []);

  const handleVerify = () => {
    // Set verification to expire after 1 day
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    const verificationData = {
      verified: true,
      expires: expirationDate.getTime(),
    };

    localStorage.setItem("ageVerified", JSON.stringify(verificationData));
    setVerified(true);
    setShowModal(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.responsibility.org/";
  };

  if (verified && !showModal) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 text-center"
          >
            <div className="mx-auto w-40 h-24 relative mb-4">
              <Image
                src={logo}
                alt="Enstore Logo"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-brand mb-2">
              Age Verification
            </h2>

            <p className="mb-6 text-gray-700">
              This website contains alcoholic beverage content and is intended
              for adults of legal drinking age only.
            </p>

            <p className="font-semibold mb-6 text-gray-800">
              Are you at least 18 years of age?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleVerify}
                className="bg-brand text-white px-6 py-2 rounded-md hover:bg-brand/90 transition-colors"
              >
                Yes, I am 18+
              </button>

              <button
                onClick={handleDeny}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                No, I am not
              </button>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              By entering this site, you agree to our Terms and Privacy Policy.
              Please enjoy responsibly.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerification;
