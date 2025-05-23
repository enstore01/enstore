import PageHeader from "@/components/PageHeader/PageHeader";
import NewsList from "@/components/LatestNews/NewsList";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { getAllPosts } from "@/sanity/lib/client";
import blogImage from "@/public/images/padre-azul-3.webp";

const BlogPage = async () => {
  const posts = await getAllPosts();
  console.log(posts);

  // Sort posts by date, latest first
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div>
      <PageHeader
        src="https://media.istockphoto.com/id/1144881204/photo/neck-of-wine-bottles-in-a-liquor-store-in-europe.webp?a=1&b=1&s=612x612&w=0&k=20&c=spDt6fEOb2sd-UTbMzUIIGQGjgOMzNydwu4Xc2aaPEs="
        title="Latest News"
        description="Stay updated with the latest happenings, exclusive events, and exciting releases in the world of spirits, wine, and more"
      />
      <NewsList posts={sortedPosts} />
      <div className="w-full mt-10">
        <Image
          src={blogImage}
          alt="Blog footer image"
          className="w-full h-auto"
          priority
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
