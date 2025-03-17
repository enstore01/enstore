import PageHeader from "@/components/PageHeader/PageHeader";
import BrandsPageCard from "@/components/OurBrands/BrandsPageCard";
import Footer from "@/components/Footer/Footer";
import teelingSmallBatch from "@/public/images/teelingSmallBatch2.jpg";
import teelingSingleGrain from "@/public/images/teelingSingleGrain.jpg";
import teelingSingleMalt from "@/public/images/singleMalt.jpg";
import teelingBlackpitts from "@/public/images/TeelingBlackpitts.jpg";
import teeling21YO from "@/public/images/TeelingWhiskeyRising21YO.jpg";
import teeling30YO from "@/public/images/30yo70boxbar.jpg";
import neftBlack from "@/public/images/neftBlack.jpg";
import neftWhite from "@/public/images/neftWhite.jpg";
import padreAzulBlanco from "@/public/images/padreAzulBlanco.png";
import padreAzulReposado from "@/public/images/padreAzulReposado.png";
import padreAzulAnejo from "@/public/images/padreAzulAnejo.png";
import courvoisierVSOP from "@/public/images/courvoisierVSOP.webp";
import courvoisierXO from "@/public/images/courvoisierXO.webp";
import courvoisierVS from "@/public/images/courvoisierVS.webp";
import bisquitVSOP from "@/public/images/Bisquit&DuboucheVSOP.webp";
import bisquitXO from "@/public/images/Bisquit&DuboucheXO.webp";
import buenAmigoGold from "@/public/images/buenAmigoGold.png";
import buenAmigoSilver from "@/public/images/buenAmigoSilver.png";
import buenAmigoCoffee from "@/public/images/buenAmigoCoffee.jpg";
// import Banner from "@/components/Banner/Banner";
import AwardsComponents from "@/components/AwardsComponent/AwardsComponents";

const brands = [
  {
    images: [
      teelingSmallBatch,
      teelingSingleGrain,
      teelingSingleMalt,
      teelingBlackpitts,
      teeling21YO,
      teeling30YO,
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
    description: [
      "Crafted with precision and passion, this Small-Batch Whiskey is a blend of Grain and Malt. Bottled at 46% ABV, each batch is limited to just 100 barrels, ensuring exceptional quality and character. A key member of the Teeling Whiskey core range, this expression is part of the new Dublin Distilled series, celebrating the art of Irish whiskey-making. Each case contains six bottles of 70cl, delivering a rich, smooth, and distinctive profile that speaks to its unique aging process.",
      "This exceptional Single Grain Whiskey is matured exclusively in ex-Cabernet Sauvignon barrels sourced from Napa Valley, California. Bottled at 46% ABV, this whiskey is released in small batches of just 50 barrels, ensuring quality and depth in every sip. As part of the Teeling Whiskey core range, it is available in cases of six 70cl bottles, embodying innovation and craftsmanship in Irish whiskey. A bold, unconventional Single Grain—crafted for those who seek something truly unique.",
      "This Single Malt Whiskey is matured in an extraordinary selection of ex-wine and bourbon barrels, including Port, Sherry, Madeira, White Burgundy, and Cabernet Sauvignon casks. This unique aging process creates a whiskey with exceptional depth, character, and complexity. Bottled at 46% ABV in small batches of just 50 barrels, this expression is a proud member of the Teeling Whiskey core range and part of the innovative Dublin Distilled series. Each release is available in cases of six 70cl bottles, offering a rich and multi-layered whiskey experience. A bold reimagining of Irish Single Malt—crafted for those who appreciate innovation in every sip.",
      "A bold step in Irish whiskey, Blackpitts Peated Single Malt is the first peated whiskey crafted entirely at the Teeling Distillery in Dublin. Made from peated malted barley, this triple-distilled expression delivers a beautifully balanced smoky character, setting it apart from traditional Irish whiskey. Bottled at 46% ABV in small batches of just 50 barrels, Blackpitts is part of the Teeling Whiskey core range and the groundbreaking Dublin Distilled series. Available in cases of six 70cl bottles, Blackpitts is a whiskey that redefines peated Irish whiskey—bringing innovation and tradition together in every sip.",
      "A true collector’s whiskey, the Teeling 21-Year-Old Rising Reserve is a limited-edition Single Malt that continues the award-winning Vintage Reserve Collection (21YO / 24YO / 28YO). With only 4,000 bottles produced, this highly collectible release is bottled at 46% ABV and available in cases of three 70cl bottles. The Rising Reserve is a rare opportunity to experience the pinnacle of Teeling Whiskey’s innovation and craftsmanship.",
      "An ultra-rare expression, the Teeling 30-Year-Old Single Malt showcases three decades of meticulous craftsmanship. Bottled at 46% ABV, with only 6,000 bottles available, this exceptional whiskey is presented in cases of four 70cl bottles. A testament to Teeling’s innovation and dedication to pushing the boundaries of Irish whiskey.",
    ],
    headFont: "engravers",
    bodyFont: "chronicle",
    website: "https://www.teelingwhiskey.com/",
  },
  {
    images: [courvoisierVS, courvoisierVSOP, courvoisierXO],
    title: "Courvoisier",
    variations: ["VS", "VSOP", "XO"],
    description: [
      "Courvoisier VS cognac is meticulously blended to defy category conventions. It is an authentic and joyous introduction to the Courvoisier collection.",
      "The delicate marriage of 4 crus for a subtly floral, uniquely complex richness. Our VSOP cognac symbolizes the versatile and multi-layered nature of the House of Courvoisier",
      "Courvoisier XO pays homage to the Cognac region with carefully selected eaux-de-vie. The signature style of rich fruit XO tasting notes reveals an exquisitely layered blend with an elegant floral finish.",
    ],
    headFont: "akzidenz",
    bodyFont: "trade",
    website: "https://www.courvoisier.com/",
  },
  {
    images: [bisquitVSOP, bisquitXO],
    title: "Bisquit & Dubouché",
    variations: ["VSOP", "XO"],
    description: [
      "Bisquit & Dubouché V.S.O.P is crafted using a unique distillation method, extending the process by nearly an hour longer than traditional Cognacs. From vineyard to distillation to the prestigious Cognac House of Bisquit & Dubouché, every step is guided by unwavering expertise and passion. The result is a premium V.S.O.P Cognac experience, built on tradition, craftsmanship, and an enduring commitment to excellence.",
      "Bisquit & Dubouché XO is a masterpiece of Cognac craftsmanship, offering an exceptional depth of flavor and an opulent sensory experience. It has a rich and complex aroma with notes of dried fruit, honey, cinnamon, and dark chocolate. A velvety texture with layers of ripe plum, hazelnut, and sweet spice, evolving into deep oak, leather undertones with a long, warm, and exceptionally smooth finish, leaving a lingering impression of elegance. Best enjoyed neat or with a drop of water to fully unveil its depth. An exquisite choice for those who appreciate refined luxury and timeless sophistication.",
    ],
    headFont: "bisquit-black",
    bodyFont: "bisquit",
    website: "https://www.bisquitdubouche.com/",
  },
  {
    images: [buenAmigoSilver, buenAmigoGold, buenAmigoCoffee],
    title: "Buen Amigo Tequila",
    variations: ["SILVER", "GOLD", "COFFEE"],
    description: [
      "Crafted from 100% blue agave sourced from Jalisco, Mexico, Buen Amigo Silver Tequila is celebrated for its smooth, crisp taste with refreshing citrus notes. Its mild flavor profile makes it an ideal choice for cocktails, offering a clean and versatile base for mixology. Bottled at 40% alcohol content, this tequila is presented in an elegant, modern glass bottle, reflecting the quality and craftsmanship behind every pour.",
      "Aged to perfection, Buen Amigo Gold Tequila boasts a pale yellow hue, reflecting its time-honored maturation process. It offers a rich aroma of earth and spice, complemented by subtle agave and wood flavors for a smooth yet complex taste experience.Recognized for its quality, Buen Amigo Gold Tequila holds a 79/100 rating on Tequila.net, solidifying its place as a reliable choice within its category.",
      "A premium blend of Tequila Blanco and high-altitude coffee from Oaxaca, Mexico.Rich coffee notes balanced with agave sweetness, vanilla, and a smooth caramel finish. Bottled at 35% ABV, ideal for sipping, cocktails, or dessert pairings.",
    ],
    headFont: "fmbolyar",
    bodyFont: "fmbolyar",
    website: "",
  },
  {
    images: [neftBlack, neftWhite],
    title: "Neft Vodka",
    variations: ["BLACK", "WHITE"],
    description: [
      "NEFT Vodka was founded on the belief that vodka should stand on its own, enjoyed neat, solely for its taste. Using just two pure ingredients - ancient non-GMO rye grains and artesian mountain water sourced from the Austrian Alps - NEFT has accomplished just that. The result is an Austrian produced vodka with a refined flavor profile and a natural, slightly sweet finish that can be sipped straight, or used to enhance your favorite cocktail.",
      "NEFT Vodka was founded on the belief that vodka should stand on its own, enjoyed neat, solely for its taste. Using just two pure ingredients - ancient non-GMO rye grains and artesian mountain water sourced from the Austrian Alps - NEFT has accomplished just that. The result is an Austrian produced vodka with a refined flavor profile and a natural, slightly sweet finish that can be sipped straight, or used to enhance your favorite cocktail.",
    ],
    headFont: "interstate",
    bodyFont: "interstate",
    website: "https://neftvodka.com/en/",
  },
  {
    images: [padreAzulBlanco, padreAzulReposado, padreAzulAnejo],
    title: "Padre Azul",
    variations: ["BLANCO", "REPOSADO", "ANEJO"],
    description: [
      "Padre Azul Blanco is the core of the Padre Azul identity! he’s the father of all our aged versions. In every drop of our youngest tequila, a symphony of nature unfolds. Surprisingly low in calories yet bursting with the raw energy of youth, this spirit is a testament to the sun-kissed journey it undertakes. Straight from the distillation, it captures the pure, untamed taste of fresh agave—a soft, mild melody that will undoubtedly enchant your senses. Embrace the magic within each sip, and let the Padre Azul Tequila transport you to moments of youthful exuberance and untold joy. Be young, be wild, and savor the emotional allure of Padre Azul Blanco.",
      "Picture the sun-drenched landscapes of Mexico, where the Blue Agaves embarked on a journey almost a decade ago. A story etched in every sip. Imagine a subtle vanilla flavor, whispers of rare and cooked agave, and a lingering aftertaste that tells the tale of patience and dedication. This Tequila isn’t just a drink; it’s a journey through time, a symphony of flavors crafted by the hands of nature and time itself. Indulge in the emotional richness of this extraordinary Reposado Tequila.",
      "Padre Azul Añejo is aged for 18 months in oak barrels. This gives the spirit a complex and balanced profile. This Añejo unveils a complexity and smoothness like no other. With hints of vanilla, chocolate, caramelized nuts, and cinnamon, it’s the perfect finale for a convivial night. More than a drink, it’s the soulful touch that completes your memorable moments. Cheers to the extraordinary!",
    ],
    headFont: "handley",
    bodyFont: "hand",
    website: "https://padreazul.com/",
  },
];

export const metadata = {
  title: "Our Brands | Enstore",
  description:
    "Discover our premium collection of spirits including Teeling Whiskey, Courvoisier, Bisquit & Dubouché, Buen Amigo Tequila, and Neft Vodka.",
};
const OurBrandsPage = () => {
  return (
    <div>
      <PageHeader
        src="/images/IMG_3730.jpg"
        title="Our Brands"
        description="We offer a variety of premium wines and spirits that cater to different tastes and occasions."
      />
      <div className="container py-10">
        {brands.map((brand, index) => (
          <BrandsPageCard key={index} {...brand} reverse={index % 2 !== 0} />
        ))}
      </div>
      <AwardsComponents />
      {/* <Banner
        title="Instantly recognisable brands"
        src="https://media.istockphoto.com/id/1517091311/photo/creative-summer-composition-with-lemon-slice-mint-leaves-can-of-soda-and-ice-cubes-minimal.jpg?s=612x612&w=0&k=20&c=sd89tIw8WiNZ3Sfa-Lepl4tZUtp_9jkGIXu2g_KsQ14="
        description="Global or local, every one of our brands has a story. They all have a purpose and role to play in creating enduring connections with people.

"
      /> */}
      <Footer />
    </div>
  );
};

export default OurBrandsPage;
