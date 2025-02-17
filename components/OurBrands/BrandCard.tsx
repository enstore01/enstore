import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BrandCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-[300px] sm:w-[330px] flex-none snap-start mt-10 border">
      {/* Image */}
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Learn More Button */}
        <Link href={"/brands"}>
          <button className="mt-4 text-navy font-medium underline hover:text-brand">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
