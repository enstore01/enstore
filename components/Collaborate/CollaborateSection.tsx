"use client";
import { useState } from "react";

const CollaborateSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      message: formData.get("message"),
      name: formData.get("name"),
      email: formData.get("email"),
      to: "info@enstore-ng.com",
      subject: "New Collaboration Request",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-light py-10 lg:py-20">
      <div className="md:mx-10 p-4 lg:flex justify-center gap-20">
        <div className="flex flex-col uppercase py-4 lg:w-[47%] lg:text-right">
          <p className="md:text-[18px]">Collaborate</p>
          <div className="text-[38px] lg:text-[60px] font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
            <h2>Want to work </h2>
            <h2 className="">with us? Leave us</h2>
            <h2>a message!</h2>
          </div>
        </div>
        <div className="mt-10 lg:w-[47%]">
          <form onSubmit={handleSubmit}>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border p-4 outline-none focus:border-brand"
              required
              disabled={isSubmitting}
            ></textarea>
            <div className="lg:flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border p-4 mt-2 outline-none focus:border-brand"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border p-4 mt-2 outline-none focus:border-brand"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border p-4 mt-2 lg:mt-4 hover:bg-primary bg-brand text-white uppercase disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {submitStatus === "success" && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-600">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
