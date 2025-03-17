import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import ShareButton from "@/components/ShareButton/ShareButton";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const resolvedParams = await params; // Await the params

  const post = await getPost(resolvedParams.blogSlug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-[14px] text-gold mb-4">
            <span className="py-1">{formattedDate}</span>
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
            className="rounded-lg object-contain"
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
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6">{children}</ul>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-brand hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }) => {
                    if (!value?.asset?._ref) {
                      return null;
                    }
                    return (
                      <div className="my-8 relative w-full aspect-video">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || "Blog post image"}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    );
                  },
                },
              }}
            />
          )}
        </div>
        <div className="flex gap-4 mt-8 border-t pt-8">
          <h3 className="text-gray-600">Share this article:</h3>
          <ShareButton title={post.title} description={post.description} />
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const resolvedParams = await params; // Await the params

  const post = await getPost(resolvedParams.blogSlug);

  return {
    title: `${post?.title} | Enstore Blog`,
    description: post?.description || post?.title,
    openGraph: {
      images: [post?.mainImage],
    },
  };
}
