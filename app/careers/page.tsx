import PageHeader from "@/components/PageHeader/PageHeader";
import Footer from "@/components/Footer/Footer";
import CollaborateSection from "@/components/Collaborate/CollaborateSection";
import WhyJoinUs from "@/components/WhyJoinUs/WhyJoinUs";
import ExploreOpportunitiesSection from "@/components/ExploreOpportunities/ExploreOpportunitiesSection";

const CareersPage = () => {
  return (
    <div>
      <PageHeader
        title="Careers"
        src="https://media.istockphoto.com/id/599968864/photo/travel-time.jpg?s=612x612&w=0&k=20&c=YNocV6a1ZaQm4-H-snw3VHc9B1x2ZKf1QmajZUr5u2M="
        description=" We are always looking for talented individuals to join our team. If
          you are passionate about the spirits industry and want to work with a
          dynamic team, we would love to hear from you."
      />
      <div className="container mx-auto">
        <WhyJoinUs />
        <ExploreOpportunitiesSection />
      </div>

      <CollaborateSection />
      <Footer />
    </div>
  );
};

export default CareersPage;
