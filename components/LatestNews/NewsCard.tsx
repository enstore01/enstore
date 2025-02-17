import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  date,
  category,
  slug,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-light shadow-lg rounded overflow-hidden w-[320px] flex-none snap-start mt-10 hover:scale-105 transition-transform duration-300">
      <div className="p-4 flex justify-between items-centern text-[14px] text-navy">
        <span className="py-1">{formattedDate}</span>
        <span className="border py-1 px-3 shadow-sm rounded-full">
          {category}
        </span>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-t"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-accent tracking-tight leading-tight line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 my-2 line-clamp-3 tracking-tight leading-tight">
          {description}
        </p>

        {/* Learn More Button */}
        <Link
          href={`/blog/${slug}`}
          aria-label={`Read more about ${title}`}
          className="mt-6 text-navy font-medium underline hover:text-accent"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
