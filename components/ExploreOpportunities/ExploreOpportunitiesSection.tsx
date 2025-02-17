import OpportunitiesCard from "./OpportunitiesCard";

const dummyData = [
  {
    title: "Software Engineer",
    time: "2",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Marketing Manager",
    time: "5",
    location: "On-site",
    type: "Part-time",
  },
  {
    title: "Data Analyst",
    time: "10",
    location: "Remote",
    type: "Contract",
  },
];

const ExploreOpportunitiesSection = () => {
  return (
    <section className="py-8 mt-6">
      <h2 className="top-header text-center">Explore Opportunities</h2>
      <div className="md:flex gap-10 justify-center flex-wrap my-10">
        {dummyData.map((data, index) => (
          <OpportunitiesCard
            key={index}
            title={data.title}
            time={data.time}
            location={data.location}
            type={data.type}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreOpportunitiesSection;
