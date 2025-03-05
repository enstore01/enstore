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
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-[350px] p-4 pb-10 mt-10">
      <h2 className="text-2xl font-semibold text-accent tracking-tight leading-tight line-clamp-2 mt-4">
        {title}
      </h2>
      <p className="mt-1">Posted {formatDate(time)}</p>
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
