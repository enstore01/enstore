import Hero from "@/components/Hero/Hero";
import ScrollingWidget from "@/components/ScrollingWidget/ScrollingWidget";
import AboutUsSection from "@/components/AboutUs/AboutUsSection";
import OurBrandsSection from "@/components/OurBrands/OurBrandsSection";
import Banner from "@/components/Banner/Banner";
import LatestNewsSection from "@/components/LatestNews/LatestNewsSection";
// import OurManagementSection from "@/components/OurManagement/OurManagementSection";
import CollaborateSection from "@/components/Collaborate/CollaborateSection";
import Footer from "@/components/Footer/Footer";
// import { getAllJobs } from "@/sanity/lib/client";

export default async function Home() {
  // const jobs = await getAllJobs();
  // const singlePost = await getPost("neft-vodka-expands-distribution-network");
  // console.log(jobs);

  return (
    <div>
      <Hero />
      <ScrollingWidget />
      <AboutUsSection />
      <OurBrandsSection />
      <Banner
        title="A Curated Selection for Every Connoisseur & Enthusiast"
        src="/images/hero4.jpg"
        description="From award winning Irish whiskeys to bold tequilas and luxury cognac brands, our portfolio cater to both connoisseurs and casual enthusiasts alike."
      />
      <LatestNewsSection />
      {/* <OurManagementSection /> */}
      <CollaborateSection />
      <Footer />
    </div>
  );
}
