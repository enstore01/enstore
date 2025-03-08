"use client";
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import NewsCard from "@/components/LatestNews/NewsCard";

// Define the type for a news post
interface NewsPost {
  mainImage: string;
  title: string;
  description: string;
  publishedAt: string;
  categories: string[];
  slug: string;
}

interface NewsListProps {
  posts: NewsPost[];
}

const NewsList: React.FC<NewsListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 8;

  // Calculate total number of pages
  const totalPages = Math.ceil(posts.length / newsPerPage);

  // Get current orders to display based on the page
  const currentNews = posts.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  // Pagination handler
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 20, behavior: "smooth" });
  };
  const goToNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 20, behavior: "smooth" });
  };
  const goToPrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 20, behavior: "smooth" });
  };
  return (
    <div className="px-4 py-10">
      <div className="mt-10 flex gap-10 justify-center flex-wrap">
        {posts.length === 0 && (
          <p className="text-center text-[18px] my-10">No current News</p>
        )}
        {currentNews.map((news, index) => (
          <NewsCard
            key={index}
            image={news.mainImage}
            title={news.title}
            description={news.description}
            date={news.publishedAt}
            category={news.categories?.[0] || "News"}
            slug={news.slug}
          />
        ))}
      </div>
      {/* Pagination controls */}
      {posts.length > 0 && (
        <div className="flex justify-center items-center gap-4 my-10">
          <CircleChevronLeft
            size={28}
            onClick={goToPrevPage}
            className="cursor-pointer"
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${
                currentPage === i + 1
                  ? "font-semibold text-[18px] text-darkPrimary"
                  : ""
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <CircleChevronRight
            size={28}
            onClick={goToNextPage}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default NewsList;
