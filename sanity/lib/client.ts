import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import { Post } from "@/types/Posts";
// import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Define your GROQ queries
const postQuery = groq`*[_type == "post"] {
  _id,
  title,
  "slug": slug.current,
  categories,
  description,
  author,
  publishedAt,
  "mainImage": mainImage.asset->url,
  body
}`;

const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
 title,
  "slug": slug.current,
  categories,
  description,
  author,
  publishedAt,
  "mainImage": mainImage.asset->url, 
  body
}`;

// Data fetching utility functions
export async function getAllPosts(): Promise<Post[]> {
  return await client.fetch(postQuery);
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(singlePostQuery, { slug });
}

// Add more queries and fetch functions as needed

// image builder
// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || "",
//   dataset: dataset || "",
// });

// export const urlForImage = (source: any) => {
//   if (!source) return null;
//   return imageBuilder.image(source).auto("format").fit("max");
// };
