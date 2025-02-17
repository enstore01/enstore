// import { StaticImageData } from "next/image";
import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  categories: string[];
  description: string;
  author: string;
  publishedAt: string;
  mainImage: string;
  body: PortableTextBlock;
};
