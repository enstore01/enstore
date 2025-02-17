import Image, { StaticImageData } from "next/image";
import { Linkedin } from "lucide-react";

interface OurManagementCardProps {
  image: StaticImageData;
  title: string;
  name: string;
  description: string;
  link: string;
}

const OurManagementCard: React.FC<OurManagementCardProps> = ({
  image,
  title,
  name,
  description,
  link,
}) => {
  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-full max-w-xs flex-none snap-start mt-10">
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
          <p className="text-brand">
            <a href={link}>
              <Linkedin />
            </a>
          </p>
        </div>

        <p className="mt-1 text-navy">{title}</p>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default OurManagementCard;
