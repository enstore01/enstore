import PageHeader from "@/components/PageHeader/PageHeader";
import NewsList from "@/components/LatestNews/NewsList";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import { getAllPosts } from "@/sanity/lib/client";

const BlogPage = async () => {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div>
      <PageHeader
        src="https://media.istockphoto.com/id/1144881204/photo/neck-of-wine-bottles-in-a-liquor-store-in-europe.webp?a=1&b=1&s=612x612&w=0&k=20&c=spDt6fEOb2sd-UTbMzUIIGQGjgOMzNydwu4Xc2aaPEs="
        title="Latest News"
        description="Stay updated with the latest happenings, exclusive events, and exciting releases in the world of spirits, wine, and more"
      />
      <NewsList posts={posts} />
      <Banner
        title="DESIGNED FOR PRESTIGE"
        src="https://plus.unsplash.com/premium_photo-1694825174350-cb9f27949883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D"
        description="The iconic teardrop bottle shape is a key design expression in each bottle in our cognac Prestige Collection, with rich colors that represent the depth and complexity of these creations. Elements of nature and water bring to life the importance of the craft that goes into the precise blending"
      />
      <Footer />
    </div>
  );
};

export default BlogPage;
