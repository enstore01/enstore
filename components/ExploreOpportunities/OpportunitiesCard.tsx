"use client";

import { MapPin, BriefcaseBusiness, X } from "lucide-react";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="relative bg-light shadow-lg rounded overflow-hidden w-[350px] p-4 pb-10 mt-10">
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
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary mt-4"
      >
        Apply
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">How to Apply</h3>
            <p className="text-gray-600">
              Please send your CV to{" "}
              <a
                href={`mailto:hr@enstore-ng.com?subject=${encodeURIComponent(title)}`}
                className="text-accent hover:underline"
              >
                hr@enstore-ng.com
              </a>{" "}
              with the subject line: {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesCard;
