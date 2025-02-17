import { MapPin, BriefcaseBusiness } from "lucide-react";

interface OpportunitiesCardProps {
  title: string;
  time: string;
  location: string;
  type: string;
}

const OpportunitiesCard: React.FC<OpportunitiesCardProps> = ({
  title,
  time,
  type,
  location,
}) => {
  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-[350px] p-4 pb-10 mt-10">
      <h2 className="text-2xl font-semibold text-accent tracking-tight leading-tight line-clamp-2 mt-4">
        {title}
      </h2>
      <p className="mt-1">Posted {time} hours ago</p>
      <p className="flex gap-1 items-center mt-10">
        <MapPin size={15} /> {location}
      </p>
      <p className="flex gap-1 items-center mt-2">
        <BriefcaseBusiness size={15} /> {type}
      </p>
      <b className="btn btn-primary mt-4">Apply</b>
    </div>
  );
};

export default OpportunitiesCard;
