import OpportunitiesCard from "./OpportunitiesCard";
import { getAllJobs } from "@/sanity/lib/client";

const ExploreOpportunitiesSection = async () => {
  const jobs = await getAllJobs();

  if (!jobs || jobs.length === 0) {
    return (
      <section className="py-8 mt-6">
        <h2 className="top-header text-center">Explore Opportunities</h2>
        <p className="text-center text-gray-600 mt-4">
          No job openings available at the moment. Please check back later.
        </p>
      </section>
    );
  }

  return (
    <section className="py-8 mt-6">
      <h2 className="top-header text-center">Explore Opportunities</h2>
      <div className="container mx-auto">
        <div className="md:flex gap-10 justify-center flex-wrap my-10">
          {jobs.map((data, index) => (
            <OpportunitiesCard
              key={data._id || index}
              title={data.title}
              time={data.timePublished}
              location={data.location}
              type={data.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOpportunitiesSection;
