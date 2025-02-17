import PageHeader from "@/components/PageHeader/PageHeader";
import BrandsPageCard from "@/components/OurBrands/BrandsPageCard";
import Footer from "@/components/Footer/Footer";
import teeling from "@/assets/teeling1.jpg";
import teeling2 from "@/assets/teeling2.webp";
import teeling3 from "@/assets/teeling2.jpg";
import neft from "@/assets/neft1.jpg";
import neft2 from "@/assets/neft.jpg";
import neft3 from "@/assets/neft-hero.png";
import padreAzul from "@/assets/padre-azul.webp";
import padreAzul1 from "@/assets/padreAzul1.jpeg";
import padreAzul2 from "@/assets/padreAzul2.jpeg";
import courvoisier1 from "@/assets/Courvoisier1.jpg";
import courvoisier2 from "@/assets/Courvoisier2.jpg";
import courvoisier3 from "@/assets/Courvoisier-Logo.jpg";
import bisquit1 from "@/assets/BisquitDubouche1.jpg";
import bisquit2 from "@/assets/BisquitDuboucheLogo.jpg";
import bisquit3 from "@/assets/BisquitDubouche1.jpg";
import buenAmigo1 from "@/assets/buenAmigo1.jpg";
import buenAmigo2 from "@/assets/Courvoisier2.jpg";
import buenAmigo3 from "@/assets/buenAmigo1.jpg";
import Banner from "@/components/Banner/Banner";
const brands = [
  {
    images: [teeling, teeling2, teeling3],
    title: "Teeling",
    variations: ["VS", "VSOP"],
    description:
      "Hine is celebrated for its elegant cognacs that blend tradition with modernity, offering a sophisticated taste.",
  },
  {
    images: [courvoisier1, courvoisier2, courvoisier3],
    title: "Courvoisier",
    variations: ["VS", "VSOP", "XO"],
    description:
      "Courvoisier is a brand of cognac owned by Beam Suntory, a subsidiary of Suntory Holdings of Osaka, Japan. The production is based in Jarnac, Charente in France. Courvoisier sources its eaux-de-vie from the Fins Bois, Petit Champagne, and Grande Champagne crus. The distillation of the cognac is carried out in pot stills and the distilled spirit is aged in French Limousin oak barrels. Courvoisier offers a range of cognacs including VS, VSOP, XO, and Initiale Extra",
  },
  {
    images: [bisquit1, bisquit2, bisquit3],
    title: "Bisquit & Dubouche",
    variations: ["VS", "VSOP", "XO"],
    description:
      "Bisquit & Dubouche is a French cognac house founded in 1819 by Alexandre Bisquit. The brand is known for its Napoleon cognac, which is a blend of Grande Champagne and Borderies eaux-de-vie. Courvoisier is also known for its association with the French emperor Napoleon Bonaparte, who was a fan of the brand's cognac. Bisquit & Dubouche offers a range of cognacs including VS, VSOP, and XO. The brand's cognacs are crafted using traditional methods and aged in oak barrels to enhance their flavor and aroma.",
  },
  {
    images: [buenAmigo1, buenAmigo2, buenAmigo3],
    title: "Buen Amigo Tequila",
    variations: ["VSOP", "XO", "Louis XIII"],
    description:
      "Buen Amigo is a premium tequila brand that offers a range of tequilas, including blanco, reposado, and añejo. The brand is known for its smooth and refined taste, making it a popular choice among tequila connoisseurs. Buen Amigo tequilas are crafted using traditional methods and aged in oak barrels to enhance their flavor and aroma. The brand's tequilas are perfect for sipping neat or mixing in cocktails.",
  },
  {
    images: [neft, neft2, neft3],
    title: "Neft Vodka",
    variations: ["VS", "VSOP", "XO"],
    description:
      "Neft is a premium vodka brand that offers a range of vodkas, including classic, flavored, and ultra-premium options. The brand is known for its high-quality ingredients and unique distillation process, which results in a smooth and clean taste. Neft vodkas are crafted using pure Austrian spring water and organic wheat, giving them a distinct flavor profile that sets them apart from other vodkas on the market. The brand's vodkas are perfect for sipping neat or mixing in cocktails.",
  },
  {
    images: [padreAzul, padreAzul1, padreAzul2],
    title: "Padre Azul",
    variations: ["VSOP", "XO"],
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
