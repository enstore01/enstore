import PageHeader from "@/components/PageHeader/PageHeader";
import BrandsPageCard from "@/components/OurBrands/BrandsPageCard";
import Footer from "@/components/Footer/Footer";
import teelingSmallBatch from "@/public/images/teelingSmallBatch.jpg";
import teelingSingleGrain from "@/public/images/teelingSingleGrain.jpg";
import teelingSingleMalt from "@/public/images/teelingSingleMalt.png";
import teelingBlackpitts from "@/public/images/TeelingBlackpitts.jpg";
import teeling2 from "@/assets/teeling2.webp";
import teeling3 from "@/assets/teeling2.jpg";
import neftBlack from "@/public/images/neftBlack.jpg";
import neftWhite from "@/public/images/neftWhite.jpg";

import padreAzulBlanco from "@/public/images/padreAzulBlanco.png";
import padreAzulReposado from "@/public/images/padreAzulReposado.png";
import padreAzulAnejo from "@/public/images/padreAzulAnejo.png";
import courvoisierVSOP from "@/public/images/courvoisierVSOP.webp";
import courvoisierXO from "@/public/images/courvoisierXO.webp";
import courvoisierVS from "@/public/images/courvoisierVS.webp";
import bisquitVSOP from "@/public/images/b&DVSOP.jpg";
import bisquitXO from "@/public/images/b&DXO.jpg";
import buenAmigoGold from "@/public/images/buenAmigo2.jpg";
import buenAmigoSilver from "@/public/images/beunAmigo.jpg";
import buenAmigoCoffee from "@/public/images/buenAmigoCoffee.jpg";
import Banner from "@/components/Banner/Banner";
const brands = [
  {
    images: [
      teelingSmallBatch,
      teelingSingleGrain,
      teelingSingleMalt,
      teelingBlackpitts,
      teeling2,
      teeling3,
    ],
    title: "Teeling Whiskey",
    variations: [
      "SMALL BATCH",
      "SINGLE GRAIN",
      "SINGLE MALT",
      "BLACKPITTS PEATED SINGLE MALT",
      "21 YO RISING RESERVE",
      "30 YO SINGLE MALT",
    ],
    description:
      "Since 1782 the Teeling family have been craftingIrish whiskey. The Teelings are renowned for their vision in doing things differently and their whiskeys embody this entrepreneurial spirit. 2015 marked the year a new generation of Teelings returned to their distilling roots in the Liberties are of Dublin City. We're DUBLIN DISTILLERY and DUBLIN is where we do things differently. Innovation is in the fabric of our city and family, and in all things we do, we dare to be different. THE TEELING UNCONVENTIONAL COLLECTION is a celebration of this spirit of innovation, offering five wholly unique expressions of IRISH WHISKEY.",
  },
  {
    images: [courvoisierVSOP, courvoisierXO, courvoisierVS],
    title: "Courvoisier",
    variations: ["VSOP", "XO", "VS"],
    description:
      "Courvoisier is a brand of cognac owned by Beam Suntory, a subsidiary of Suntory Holdings of Osaka, Japan. The production is based in Jarnac, Charente in France. Courvoisier sources its eaux-de-vie from the Fins Bois, Petit Champagne, and Grande Champagne crus. The distillation of the cognac is carried out in pot stills and the distilled spirit is aged in French Limousin oak barrels. Courvoisier offers a range of cognacs including VS, VSOP, XO, and Initiale Extra",
  },
  {
    images: [bisquitVSOP, bisquitXO],
    title: "Bisquit & Dubouche",
    variations: ["VSOP", "XO"],
    description:
      "Bisquit & Dubouche is a French cognac house founded in 1819 by Alexandre Bisquit. The brand is known for its Napoleon cognac, which is a blend of Grande Champagne and Borderies eaux-de-vie. Courvoisier is also known for its association with the French emperor Napoleon Bonaparte, who was a fan of the brand's cognac. Bisquit & Dubouche offers a range of cognacs including VS, VSOP, and XO. The brand's cognacs are crafted using traditional methods and aged in oak barrels to enhance their flavor and aroma.",
  },
  {
    images: [buenAmigoCoffee, buenAmigoSilver, buenAmigoGold],
    title: "Buen Amigo Tequila",
    variations: ["COFFEE", "SILVER", "GOLD"],
    description:
      "Buen Amigo is a premium tequila brand that offers a range of tequilas, including blanco, reposado, and añejo. The brand is known for its smooth and refined taste, making it a popular choice among tequila connoisseurs. Buen Amigo tequilas are crafted using traditional methods and aged in oak barrels to enhance their flavor and aroma. The brand's tequilas are perfect for sipping neat or mixing in cocktails.",
  },
  {
    images: [neftBlack, neftWhite],
    title: "Neft Vodka",
    variations: ["BLACK", "WHITE"],
    description:
      "Neft is a premium vodka brand that offers a range of vodkas, including classic, flavored, and ultra-premium options. The brand is known for its high-quality ingredients and unique distillation process, which results in a smooth and clean taste. Neft vodkas are crafted using pure Austrian spring water and organic wheat, giving them a distinct flavor profile and a natural, slightly sweet finish that sets them apart from other vodkas on the market. The brand's vodkas are perfect for sipping neat or mixing in cocktails.",
  },
  {
    images: [padreAzulBlanco, padreAzulReposado, padreAzulAnejo],
    title: "Padre Azul",
    variations: ["BLANCO", "REPOSADO", "ANEJO"],
    description:
      "Padre Azul is a premium tequila brand that offers a range of tequilas, including blanco, reposado, and añejo. The brand is known for its smooth and refined taste, making it a popular choice among tequila connoisseurs. Padre Azul tequilas are crafted using traditional methods and aged in oak barrels to enhance their flavor and aroma. The brand's tequilas are perfect for sipping neat or mixing in cocktails.",
  },
];

const OurBrandsPage = () => {
  return (
    <div>
      <PageHeader
        src="https://media.istockphoto.com/id/1144881204/photo/neck-of-wine-bottles-in-a-liquor-store-in-europe.webp?a=1&b=1&s=612x612&w=0&k=20&c=spDt6fEOb2sd-UTbMzUIIGQGjgOMzNydwu4Xc2aaPEs="
        title="Our Brands"
        description="We offer a variety of premium wines and spirits that cater to different tastes and occasions."
      />
      <div className="container py-10">
        {brands.map((brand, index) => (
          <BrandsPageCard key={index} {...brand} reverse={index % 2 !== 0} />
        ))}
      </div>
      <Banner
        title="Instantly recognisable brands"
        src="https://media.istockphoto.com/id/1517091311/photo/creative-summer-composition-with-lemon-slice-mint-leaves-can-of-soda-and-ice-cubes-minimal.jpg?s=612x612&w=0&k=20&c=sd89tIw8WiNZ3Sfa-Lepl4tZUtp_9jkGIXu2g_KsQ14="
        description="Global or local, every one of our brands has a story. Many bear witness to the changing world over centuries, while others are products of our world today. All have a purpose and role to play in creating enduring connections with people.

"
      />
      <Footer />
    </div>
  );
};

export default OurBrandsPage;
