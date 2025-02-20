import PageHeader from "@/components/PageHeader/PageHeader";
import BrandsPageCard from "@/components/OurBrands/BrandsPageCard";
import Footer from "@/components/Footer/Footer";
import teelingSmallBatch from "@/assets/teelingSmallBatch.jpg";
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
    description: [
      "Crafted with precision and passion, this small-batch whiskey is a blend of Grain and Malt Whiskey (4:1), matured separately in ex-bourbon barrels for up to 5 years before coming together in Central American Rum barrels for a final flourish of up to 12 months. Bottled at 46% ABV, each batch is limited to just 100 barrels, ensuring exceptional quality and character. A key member of the Teeling Whiskey core range, this expression is part of the new Dublin Distilled series, celebrating the art of Irish whiskey-making. Each case contains six bottles of 70cl, delivering a rich, smooth, and distinctive profile that speaks to its unique aging process.",
      "Crafted with 95+% corn, this exceptional single grain whiskey is matured exclusively in ex-Cabernet Sauvignon barrels sourced from Napa Valley, California. The French oak casks impart rich fruit and spice notes, creating a smooth and complex profile.Aged for up to 5 years and bottled at 46% ABV, this whiskey is released in small batches of just 50 barrels, ensuring quality and depth in every sip. As part of the Teeling Whiskey core range, it is available in cases of six 70cl bottles, embodying innovation and craftsmanship in Irish whiskey. A bold, unconventional single grain—crafted for those who seek something truly unique.",
      "Crafted from 100% malted Irish barley, this single malt whiskey is matured in an extraordinary selection of ex-wine and bourbon barrels, including Port, Sherry, Madeira, White Burgundy, and Cabernet Sauvignon casks. This unique aging process creates a whiskey with exceptional depth, character, and complexity.Bottled at 46% ABV in small batches of just 50 barrels, this expression is a proud member of the Teeling Whiskey core range and part of the innovative Dublin Distilled series. Each release is available in cases of six 70cl bottles, offering a rich and multi-layered whiskey experience.A bold reimagining of Irish single malt—crafted for those who appreciate innovation in every sip.",
      "A bold step in Irish whiskey, Blackpitts Peated Single Malt is the first peated whiskey crafted entirely at the Teeling Distillery in Dublin. Made from peated malted barley, this triple-distilled expression delivers a beautifully balanced smoky character, setting it apart from traditional Irish whiskey.Matured in a combination of ex-bourbon (2) and ex-Sauternes (1) barrels, this unique aging process adds layers of rich sweetness, oak spice, and lingering smoke. Bottled at 46% ABV in small batches of just 50 barrels, Blackpitts is part of the Teeling Whiskey core range and the groundbreaking Dublin Distilled series.Available in cases of six 70cl bottles, Blackpitts is a whiskey that redefines peated Irish whiskey—bringing innovation and tradition together in every sip.",
      "A true collector’s whiskey, the Teeling 21-Year-Old Rising Reserve is a limited-edition Single Malt that continues the award-winning Vintage Reserve Collection (21YO / 24YO / 28YO).Crafted from 30-year-old Single Malt, this exceptional whiskey spent 21 years maturing in ex-bourbon barrels before undergoing an additional 9-year finishing period in Sauternes barrels. The result is a beautifully complex expression, balancing rich honeyed sweetness, dried fruits, and subtle oak spice with a silky smooth finish.With only 4,000 bottles produced, this highly collectible release is bottled at 46% ABV and available in cases of three 70cl bottles. The Rising Reserve is a rare opportunity to experience the pinnacle of Teeling Whiskey’s innovation and craftsmanship.",
      "An ultra-rare expression, the Teeling 30-Year-Old Single Malt showcases three decades of meticulous craftsmanship. This limited-release whiskey is part of a special range of 21-Year-Old Single Malts, each distinguished by unique cask finishes.Distilled from the finest Single Malt, it spent 17 years maturing in ex-bourbon casks before being transferred to ex-Carcavelos casks for an additional 4 years, imparting rich layers of dried fruit, toasted almonds, and honeyed spice.Bottled at 46% ABV, with only 6,000 bottles available, this exceptional whiskey is presented in cases of four 70cl bottles. A testament to Teeling’s innovation and dedication to pushing the boundaries of Irish whiskey.",
    ],
  },
  {
    images: [courvoisierVSOP, courvoisierXO, courvoisierVS],
    title: "Courvoisier",
    variations: ["VSOP", "XO", "VS"],
    description: [
      "The delicate marriage of 4 crus for a subtly floral, uniquely complex richness. Our VSOP cognac symbolizes the versatile and multi-layered nature of the House of Courvoisier",
      "Courvoisier XO pays homage to the Cognac region with carefully selected eaux-de-vie. The signature style of rich fruit XO tasting notes reveals an exquisitely layered blend with an elegant floral finish.",
      "Courvoisier VS cognac is meticulously blended to defy category conventions. It is an authentic and joyous introduction to the Courvoisier collection.",
    ],
  },
  {
    images: [bisquitVSOP, bisquitXO],
    title: "Bisquit & Dubouche",
    variations: ["VSOP", "XO"],
    description: [
      "Bisquit & Dubouché V.S.O.P is crafted using a unique distillation method, extending the process by nearly an hour longer than traditional Cognacs. Distilling on lees allows for the extraction of richer aromas and deeper complexity, unveiling notes of pear, grapes, rose, lychee, and delicate pastry flavors. Each cru contributes distinct characteristics to the blend. Grande Champagne offers exceptional aging potential, Petite Champagne provides refined balance, while Fins Bois and Bons Bois accelerate flavor evolution. This meticulous selection of eaux-de-vie results in a harmonious and expressive interpretation of V.S.O.P Cognac. From vineyard to distillation to the prestigious Cognac House of Bisquit & Dubouché, every step is guided by unwavering expertise and passion. The result is a premium V.S.O.P Cognac experience, built on tradition, craftsmanship, and an enduring commitment to excellence.",
      "Like all Bisquit & Dubouché offers, our XO is produced from a blend of different crus in order to expand the bouquer of truly and moral aromas, which is our signature. no nowever, benerits from a predominance of Grande et Petite Champagne, the most prestigious crus for longer aging Bisquit & Dubouché's double distillation is unique, as during the process we look for lies and esters that contains richer aromas. This requires a specific know-how as and tasting the Eaux de Vie at rexular interval durin cistination, this numan rouch, combined with the no dunk process tha creates the best potential for the blending of our XO. Each Cognac House guards its own secrets regarding the blending process fiercely. At Bisquit & Dubouche, our Master Blender Patrick Leger, uses his expertise, intuition and method to ensure each bottle of XO cognac is perfectly guided through its 10y journey.",
    ],
  },
  {
    images: [buenAmigoSilver, buenAmigoGold, buenAmigoCoffee],
    title: "Buen Amigo Tequila",
    variations: ["SILVER", "GOLD", "COFFEE"],
    description: [
      "Crafted from 100% blue agave sourced from Jalisco, Mexico, Buen Amigo Silver Tequila is celebrated for its smooth, crisp taste with refreshing citrus notes. Its mild flavor profile makes it an ideal choice for cocktails, offering a clean and versatile base for mixology.Bottled at 38-40% alcohol content, this tequila is presented in an elegant, modern glass bottle, reflecting the quality and craftsmanship behind every pour.",
      "Aged to perfection, Buen Amigo Gold Tequila boasts a pale yellow hue, reflecting its time-honored maturation process. It offers a rich aroma of earth and spice, complemented by subtle agave and wood flavors for a smooth yet complex taste experience.Recognized for its quality, Buen Amigo Gold Tequila holds a 79/100 rating on Tequila.net, solidifying its place as a reliable choice within its category.",
      "A premium blend of Tequila Blanco and high-altitude coffee from Oaxaca, Mexico.Rich coffee notes balanced with agave sweetness, vanilla, and a smooth caramel finish. Bottled at 35% ABV, ideal for sipping, cocktails, or dessert pairings.",
    ],
  },
  {
    images: [neftBlack, neftWhite],
    title: "Neft Vodka",
    variations: ["BLACK", "WHITE"],
    description: [
      "NEFT Vodka was founded on the belief that vodka should stand on its own, enjoyed neat, solely for its taste. Using just two pure ingredients - ancient non-GMO rye grains and artesian mountain water sourced from the Austrian Alps - NEFT has accomplished just that. The result is an Austrian produced vodka with a refined flavor profile and a natural, slightly sweet finish that can be sipped straight, or used to enhance your favorite cocktail.",
      "NEFT Vodka was founded on the belief that vodka should stand on its own, enjoyed neat, solely for its taste. Using just two pure ingredients - ancient non-GMO rye grains and artesian mountain water sourced from the Austrian Alps - NEFT has accomplished just that. The result is an Austrian produced vodka with a refined flavor profile and a natural, slightly sweet finish that can be sipped straight, or used to enhance your favorite cocktail.",
    ],
  },
  {
    images: [padreAzulBlanco, padreAzulReposado, padreAzulAnejo],
    title: "Padre Azul",
    variations: ["BLANCO", "REPOSADO", "ANEJO"],
    description: [
      "our blanco is the core of the padre azul identity! he’s the father of all our aged versions. In every drop of our youngest tequila, a symphony of nature unfolds. The agaves, nurtured for 8 to 10 sun-soaked years, infuse this bottle with the essence of Mexican warmth and vitality. Surprisingly low in calories yet bursting with the raw energy of youth, this spirit is a testament to the sun-kissed journey it undertakes. Straight from the distillation, it captures the pure, untamed taste of fresh agave—a soft, mild melody that will undoubtedly enchant your senses. Embrace the magic within each sip, and let the Padre Azul tequila transport you to moments of youthful exuberance and untold joy. Be young, be wild, and savor the emotional allure of Padre Azul Blanco.",
      "Picture the sun-drenched landscapes of Mexico, where the Blue Agaves embarked on a journey almost a decade ago. For 8 to 10 years, they reached toward the scorching sun, absorbing its warmth and essence. The tale unfolds with days of careful cooking, patient fermenting, and a transformative 8-month embrace in hand-selected oak bourbon barrels. a story etched in every sip. Imagine a subtle vanilla flavor, whispers of rare and cooked agave, and a lingering aftertaste that tells the tale of patience and dedication. This Tequila isn’t just a drink; it’s a journey through time, a symphony of flavors crafted by the hands of nature and time itself. Indulge in the emotional richness of this extraordinary Reposado Tequila.",
      "Our Añejo is aged for 18 months in oak barrels. this gives the spirit a complex and balanced profile. Vanilla paired with caramel and chocolate. Imagine an evening with dear friends, laughter, and the world put to rights—all complemented by a sip of this exceptional tequila. Aged over 18 months in oak bourbon barrels, This Añejo unveils a complexity and smoothness like no other. With hints of vanilla, chocolate, caramelized nuts, and cinnamon, it’s the perfect finale for a convivial night. More than a drink, it’s the soulful touch that completes your memorable moments. Cheers to the extraordinary!",
    ],
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
