import Image from "next/image";
import image1 from "@/public/images/enstoreCareers.jpg";
import Link from "next/link";

const WhyJoinUs = () => {
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
        <Link href="/brands" className="btn btn-primary mt-6">
          Our Brands
        </Link>
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
    </section>
  );
};

export default WhyJoinUs;
