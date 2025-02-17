import { StaticImageData } from "next/image";
import news1 from "../assets/news1.jpg";
import teeling1 from "../assets/teeling1.jpg";
import neft1 from "../assets/neft1.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  image: StaticImageData;
}

export const newsData: BlogPost[] = [
  {
    slug: "exciting-partnership-announcement",
    title: "Exciting Partnership Announcement",
    description:
      "We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry.",
    content: `We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry. This collaboration brings together two powerhouses in the premium spirits sector, combining our expertise in distribution with innovative product development.

    The partnership will focus on expanding our portfolio of premium spirits while maintaining our commitment to quality and excellence. Through this collaboration, we aim to introduce exciting new products to our customers and strengthen our position in the market.

    Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.
    
     Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.`,
    date: "February 10, 2024",
    category: "Partnership",
    image: news1,
  },
  {
    slug: "teeling-whiskey-launch-event",
    title: "Teeling Whiskey Launch Event Success",
    description:
      "Celebrating the successful launch of Teeling Whiskey in the Nigerian market with an exclusive tasting event.",
    content: `We are delighted to announce the tremendous success of our Teeling Whiskey launch event in Lagos. The evening brought together whiskey enthusiasts, industry experts, and distinguished guests for an exclusive tasting experience of Ireland's finest craft whiskey.

    The event showcased the unique character and exceptional quality of Teeling Whiskey, highlighting its rich heritage and innovative approach to whiskey making. Guests were treated to guided tastings of the award-winning portfolio, including the Small Batch, Single Grain, and Single Malt expressions.

    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.
    
    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.`,
    date: "February 5, 2024",
    category: "Events",
    image: teeling1,
  },
  {
    slug: "neft-vodka-expansion",
    title: "NEFT Vodka Expands Distribution Network",
    description:
      "NEFT Vodka announces major expansion of its distribution network across Nigeria, reaching new markets.",
    content: `NEFT Vodka, the ultra-premium vodka known for its exceptional purity and unique barrel packaging, is proud to announce a significant expansion of its distribution network across Nigeria. This strategic move will make our award-winning vodka available in more locations than ever before.

    The expansion includes partnerships with key distributors in major cities, ensuring that NEFT Vodka is readily available to consumers and establishments seeking the finest quality spirits. Our state-of-the-art logistics network will maintain the product's integrity throughout the distribution chain.

    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.
    
    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.`,
    date: "January 28, 2024",
    category: "Business",
    image: neft1,
  },
  {
    slug: "exciting-partnership-announcement",
    title: "Exciting Partnership Announcement",
    description:
      "We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry.",
    content: `We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry. This collaboration brings together two powerhouses in the premium spirits sector, combining our expertise in distribution with innovative product development.

    The partnership will focus on expanding our portfolio of premium spirits while maintaining our commitment to quality and excellence. Through this collaboration, we aim to introduce exciting new products to our customers and strengthen our position in the market.

    Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.
    
     Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.`,
    date: "February 10, 2024",
    category: "Partnership",
    image: news1,
  },
  {
    slug: "teeling-whiskey-launch-event",
    title: "Teeling Whiskey Launch Event Success",
    description:
      "Celebrating the successful launch of Teeling Whiskey in the Nigerian market with an exclusive tasting event.",
    content: `We are delighted to announce the tremendous success of our Teeling Whiskey launch event in Lagos. The evening brought together whiskey enthusiasts, industry experts, and distinguished guests for an exclusive tasting experience of Ireland's finest craft whiskey.

    The event showcased the unique character and exceptional quality of Teeling Whiskey, highlighting its rich heritage and innovative approach to whiskey making. Guests were treated to guided tastings of the award-winning portfolio, including the Small Batch, Single Grain, and Single Malt expressions.

    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.
    
    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.`,
    date: "February 5, 2024",
    category: "Events",
    image: teeling1,
  },
  {
    slug: "neft-vodka-expansion",
    title: "NEFT Vodka Expands Distribution Network",
    description:
      "NEFT Vodka announces major expansion of its distribution network across Nigeria, reaching new markets.",
    content: `NEFT Vodka, the ultra-premium vodka known for its exceptional purity and unique barrel packaging, is proud to announce a significant expansion of its distribution network across Nigeria. This strategic move will make our award-winning vodka available in more locations than ever before.

    The expansion includes partnerships with key distributors in major cities, ensuring that NEFT Vodka is readily available to consumers and establishments seeking the finest quality spirits. Our state-of-the-art logistics network will maintain the product's integrity throughout the distribution chain.

    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.
    
    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.`,
    date: "January 28, 2024",
    category: "Business",
    image: neft1,
  },
  {
    slug: "exciting-partnership-announcement",
    title: "Exciting Partnership Announcement",
    description:
      "We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry.",
    content: `We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry. This collaboration brings together two powerhouses in the premium spirits sector, combining our expertise in distribution with innovative product development.

    The partnership will focus on expanding our portfolio of premium spirits while maintaining our commitment to quality and excellence. Through this collaboration, we aim to introduce exciting new products to our customers and strengthen our position in the market.

    Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.
    
     Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.`,
    date: "February 10, 2024",
    category: "Partnership",
    image: news1,
  },
  {
    slug: "teeling-whiskey-launch-event",
    title: "Teeling Whiskey Launch Event Success",
    description:
      "Celebrating the successful launch of Teeling Whiskey in the Nigerian market with an exclusive tasting event.",
    content: `We are delighted to announce the tremendous success of our Teeling Whiskey launch event in Lagos. The evening brought together whiskey enthusiasts, industry experts, and distinguished guests for an exclusive tasting experience of Ireland's finest craft whiskey.

    The event showcased the unique character and exceptional quality of Teeling Whiskey, highlighting its rich heritage and innovative approach to whiskey making. Guests were treated to guided tastings of the award-winning portfolio, including the Small Batch, Single Grain, and Single Malt expressions.

    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.
    
    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.`,
    date: "February 5, 2024",
    category: "Events",
    image: teeling1,
  },
  {
    slug: "neft-vodka-expansion",
    title: "NEFT Vodka Expands Distribution Network",
    description:
      "NEFT Vodka announces major expansion of its distribution network across Nigeria, reaching new markets.",
    content: `NEFT Vodka, the ultra-premium vodka known for its exceptional purity and unique barrel packaging, is proud to announce a significant expansion of its distribution network across Nigeria. This strategic move will make our award-winning vodka available in more locations than ever before.

    The expansion includes partnerships with key distributors in major cities, ensuring that NEFT Vodka is readily available to consumers and establishments seeking the finest quality spirits. Our state-of-the-art logistics network will maintain the product's integrity throughout the distribution chain.

    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.
    
    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.`,
    date: "January 28, 2024",
    category: "Business",
    image: neft1,
  },
  {
    slug: "exciting-partnership-announcement",
    title: "Exciting Partnership Announcement",
    description:
      "We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry.",
    content: `We are thrilled to announce our latest strategic partnership that will revolutionize the beverage industry. This collaboration brings together two powerhouses in the premium spirits sector, combining our expertise in distribution with innovative product development.

    The partnership will focus on expanding our portfolio of premium spirits while maintaining our commitment to quality and excellence. Through this collaboration, we aim to introduce exciting new products to our customers and strengthen our position in the market.

    Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.
    
     Our teams are already working closely together to develop unique offerings that we believe will resonate with our discerning customers. This partnership represents a significant step forward in our mission to deliver exceptional spirits to the Nigerian market.`,
    date: "February 10, 2024",
    category: "Partnership",
    image: news1,
  },
  {
    slug: "teeling-whiskey-launch-event",
    title: "Teeling Whiskey Launch Event Success",
    description:
      "Celebrating the successful launch of Teeling Whiskey in the Nigerian market with an exclusive tasting event.",
    content: `We are delighted to announce the tremendous success of our Teeling Whiskey launch event in Lagos. The evening brought together whiskey enthusiasts, industry experts, and distinguished guests for an exclusive tasting experience of Ireland's finest craft whiskey.

    The event showcased the unique character and exceptional quality of Teeling Whiskey, highlighting its rich heritage and innovative approach to whiskey making. Guests were treated to guided tastings of the award-winning portfolio, including the Small Batch, Single Grain, and Single Malt expressions.

    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.
    
    The response from attendees was overwhelmingly positive, with many praising the distinctive flavor profiles and the brand's commitment to craft distillation. This successful launch marks an important milestone in our mission to bring premium spirits to the Nigerian market.`,
    date: "February 5, 2024",
    category: "Events",
    image: teeling1,
  },
  {
    slug: "neft-vodka-expansion",
    title: "NEFT Vodka Expands Distribution Network",
    description:
      "NEFT Vodka announces major expansion of its distribution network across Nigeria, reaching new markets.",
    content: `NEFT Vodka, the ultra-premium vodka known for its exceptional purity and unique barrel packaging, is proud to announce a significant expansion of its distribution network across Nigeria. This strategic move will make our award-winning vodka available in more locations than ever before.

    The expansion includes partnerships with key distributors in major cities, ensuring that NEFT Vodka is readily available to consumers and establishments seeking the finest quality spirits. Our state-of-the-art logistics network will maintain the product's integrity throughout the distribution chain.

    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.
    
    This expansion reflects our commitment to meeting the growing demand for premium spirits in Nigeria while maintaining our high standards of quality and service. We look forward to introducing more consumers to the exceptional taste and quality of NEFT Vodka.`,
    date: "January 28, 2024",
    category: "Business",
    image: neft1,
  },
];
