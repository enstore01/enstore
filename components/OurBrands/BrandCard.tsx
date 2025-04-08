import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BrandCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ image, title, description }) => {
  // Create a URL-friendly ID from the title
  const brandId = title.toLowerCase().replace(/\s+|&/g, "-");

  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-[300px] sm:w-[330px] flex-none snap-start mt-10 border flex flex-col">
      {/* Image */}
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2 text-justify">{description}</p>

        {/* Learn More Button */}
        <Link href={`/brands#${brandId}`} className="mt-auto">
          <button className="mt-4 text-navy font-medium underline hover:text-brand">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
