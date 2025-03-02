import Hero from "@/components/Hero/Hero";
import ScrollingWidget from "@/components/ScrollingWidget/ScrollingWidget";
import AboutUsSection from "@/components/AboutUs/AboutUsSection";
import OurBrandsSection from "@/components/OurBrands/OurBrandsSection";
import Banner from "@/components/Banner/Banner";
import LatestNewsSection from "@/components/LatestNews/LatestNewsSection";
import OurManagementSection from "@/components/OurManagement/OurManagementSection";
import CollaborateSection from "@/components/Collaborate/CollaborateSection";
import Footer from "@/components/Footer/Footer";
// import { getAllPosts, getPost } from "@/sanity/lib/client";

export default async function Home() {
  // const posts = await getAllPosts();
  // const singlePost = await getPost("neft-vodka-expands-distribution-network");
  // console.log(posts, singlePost);

  return (
    <div>
      <Hero />
      <ScrollingWidget />
      <AboutUsSection />
      <OurBrandsSection />
      <Banner
        title="A Curated Selection for Every Connoisseur & Enthusiast"
        src="/images/hero4.jpg"
        description="From smooth Irish whiskeys to bold tequilas and luxurious cognacs, our brands cater to both connoisseurs and casual enthusiasts alike. At Enstore, we believe in fostering strong partnerships with trade partners, wholesalers, retailers, hospitality venues, and consumers."
      />
      <LatestNewsSection />
      <OurManagementSection />
      <CollaborateSection />
      <Footer />
    </div>
  );
}
