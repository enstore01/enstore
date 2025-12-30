import managementImage1 from "@/public/images/ogu.jpg";

import { StaticImageData } from "next/image";

export interface ManagementMember {
  image: StaticImageData;
  title: string;
  name: string;
  description: string;
  link: string;
  mail: string;
}

export const managementData: ManagementMember[] = [
  {
    image: managementImage1,
    title: "Managing Director",
    name: "Emmanuel Ogu",
    description:
      "Emmanuel Ogu is an accomplished business leader with over a 20 years of executive experience in Sales, Distribution, and General Management within the Fast-Moving Consumer Goods (FMCG) sector. As the Managing Director/CEO of Enstore Nigeria, he has been instrumental in driving business growth, optimizing operations, and spearheading strategic initiatives that have positioned the company as a key player in Nigeria’s premium wines and spirits market.   With a deep expertise in Sales and Marketing Leadership, Route-to-Market Development, Trade Marketing, and Business Process Improvement, Emmanuel has successfully led large-scale commercial transformations, expanded distribution networks, and implemented high-impact business strategies that drive profitability and sustainable growth. His extensive background in B2B and B2C Sales Management, Key Account Management, and Logistics & Supply Chain Management gives him a well-rounded perspective on commercial and operational excellence.  Before assuming the Leadership of Enstore, Emmanuel held executive roles in leading multinational and indigenous companies, including Pernod Ricard Nigeria, Mondelez International (Cadbury Nigeria Plc) , MTN Nigeria, and Zoom Mobile. As the National Key Distributor Manager at Pernod Ricard Nigeria, he led a team of mid-level sales managers in designing and executing the sales and distribution strategy for a premium and mainstream spirits portfolio. His tenure at Mondelez International (Cadbury Nigeria Plc) saw him spearheading territorial sales management initiatives, while at MTN Nigeria, he played a key role in Trade Marketing and key account management, ensuring brand visibility and revenue growth across multiple territories.  A transformational leader, Emmanuel is passionate about talent development, business process reengineering, and corporate governance. He has successfully led teams in navigating dynamic market environments, leveraging data-driven insights, and fostering a high-performance culture. His strong financial acumen and strategic foresight have made him a trusted advisor to executive teams and key stakeholders, ensuring long-term business sustainability. Emmanuel holds a Bachelor of Science in Biochemistry from the University of Calabar and has pursued Executive and Advanced training in Sales Management, Channel Partner Management, and Strategic Sales Leadership from globally recognized institutions, including Pernod Ricard University, France, and Miller Heiman, UK.  Beyond his professional endeavors, Emmanuel is deeply committed to mentoring and developing emerging sales professionals. In his spare time, he volunteers to train struggling SMEs in sales strategies, equipping them with the tools to scale their businesses successfully.  As the visionary leader of Enstore Nigeria, Emmanuel Ogu remains dedicated to innovation, operational excellence, and reinforcing Enstore’s position as a leading distributor of world-class wines and spirits in Nigeria.",
    link: "https://www.linkedin.com/in/emmanuel-ogu-48654777 ",
    mail: "Emmanuel.ogu@enstore-ng.com",
  },
 
];



