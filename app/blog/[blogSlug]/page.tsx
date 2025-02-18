import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

export default async function BlogPost({
  params,
}: {
  params: Record<string, string>;
}) {
  const post = await getPost(params.blogSlug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-[14px] text-gold mb-4">
            <span className="py-1">{post.publishedAt}</span>
            <span className="border py-1 px-2 border-gold rounded-full">
              {post.categories}
            </span>
          </div>
          <h1 className="text-4xl font-semibold text-accent tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] mb-8">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.body && (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          )}
        </div>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-block mt-12 text-navy font-medium underline hover:text-accent"
        >
          ← Back to Blog
        </Link>
      </article>
      <Footer />
    </>
  );
}
