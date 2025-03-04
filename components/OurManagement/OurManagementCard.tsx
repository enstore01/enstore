import Image, { StaticImageData } from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

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
  const shortDescription = description.split(".")[0] + ".";

  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-full max-w-[350px] flex-none snap-start h-full mt-10">
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
          <p className="text-brand">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </p>
        </div>

        <p className="mt-1 text-accent font-semibold">{title}</p>
        <p className="mt-4 text-gray-600">{shortDescription}</p>
        <Link
          href="/management"
          className="mt-2 text-sm text-brand hover:text-accent inline-block font-bold underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default OurManagementCard;
