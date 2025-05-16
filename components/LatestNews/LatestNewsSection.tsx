import NewsCard from "./NewsCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getAllPosts } from "@/sanity/lib/client";

const LatestNewsSection = async () => {
  const posts = await getAllPosts();

  // Sort posts by date, latest first
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="py-8">
      <div className="container relative">
        <div className="">
          <h2 className="top-header">Latest News</h2>
          <p className="mt-2 text-gray-600 sm:w-[400px]">
            Stay updated with the latest happenings, exclusive events, and
            exciting releases in the world of spirits, wine, and more.
          </p>
        </div>
      </div>
      <div className="mt-10 flex gap-10 justify-center px-4 flex-wrap">
        {sortedPosts.slice(0, 4).map((news, index) => (
          <NewsCard
            slug={news.slug}
            key={index}
            image={news.mainImage}
            title={news.title}
            description={news.description}
            date={news.publishedAt}
            category={news.categories?.[0] || "News"}
          />
        ))}
      </div>
      <Link href={"/blog"}>
        <div className="flex justify-center items-center gap-4 mt-10 hover:underline cursor-pointer">
          <p>See More</p>
          <ChevronRight className="w-8 h-8 border-2 border-navy rounded-full" />
        </div>
      </Link>
    </section>
  );
};

export default LatestNewsSection;
