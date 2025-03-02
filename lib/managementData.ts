import managementImage1 from "@/assets/team1.jpg";
import managementImage2 from "@/public/images/edijana.png";
import managementImage3 from "@/public/images/david.png";
import { StaticImageData } from "next/image";

export interface ManagementMember {
  image: StaticImageData;
  title: string;
  name: string;
  description: string;
  link: string;
}

export const managementData: ManagementMember[] = [
  {
    image: managementImage1,
    title: "Managing Director",
    name: "Emmanuel Ogu",
    description:
      "A Distribution Professional with over 15 years experience of outstanding success in professional Sales/Distribution, Channel Partner Management, Trade Marketing, Route To Market Development/Roll Out and In Market Research/Analysis.",
    link: "https://www.linkedin.com/in/emmanuel-ogu-48654777 ",
  },
  {
    image: managementImage2,
    title: "General Manager, Corporate Services",
    name: "Edijana Udosen",
    description:
      "Edijana Udosen is a transformational business leader with over 17 years of executive experience spanning Marketing Communications, Wines & Spirits, Oil & Gas, Technology & Innovation, and Financial Services. A strategic architect of corporate success, she excels in corporate governance, human capital management, organizational transformation, stakeholder engagement, and regulatory affairs. As General Manager, Corporate Services at Enstore, Edijana plays a critical role in shaping corporate direction and ensuring business sustainability. She leads Human Resources, Administration & Facilities, ICT, Board Relations, Government Relations, Corporate Communications, and Key Stakeholder Engagements, integrating these functions into a cohesive strategy that drives operational excellence, compliance, and corporate influence. A visionary change leader, Edijana has successfully designed and executed large-scale corporate restructuring, digital transformation, and workforce optimization initiatives, strengthening business resilience and competitive advantage. Her expertise in policy development, change management, and business process reengineering has been instrumental in streamlining operations, enhancing governance, and fostering high-performance cultures. With a proven track record in strategic leadership, Edijana has advised executive teams and boards on governance best practices, risk mitigation, and regulatory compliance, ensuring businesses remain agile and forward-focused in dynamic market environments. She holds a Bachelor’s degree in Computer Science from Lagos State University and a Master’s degree in International Human Resources Management from Rome Business School. She has also earned an Advanced Professional Certificate in Strategic Human Resources Management from the Metropolitan School of Business & Management, UK, along with professional certifications in Agile Project Management, Strategic Leadership, and Corporate Governance. A respected authority in corporate strategy and governance, Edijana is an active member of the Chartered Institute of Personnel Management (CIPM), Nigeria, and the Human Resources Certification Institute (HRCI), USA. She remains a driving force in business transformation, regulatory excellence, and corporate leadership, ensuring Enstore Nigeria maintains its industry leadership and long-term strategic vision.",
    link: "https://www.linkedin.com/in/edijana-udosen",
  },
  {
    image: managementImage3,
    title: "General Manager, Commercial",
    name: "David Allison",
    description:
      "David Allison is a seasoned sales and logistics executive with over 20 years of experience spanning logistics, warehousing, inventory management, sales, e-commerce, and operations management. His expertise in driving commercial strategies, optimizing supply chain operations, and leading high-impact business transformations has delivered measurable results in cost reduction, productivity enhancement, and revenue growth across diverse industries, including wines & spirits, FMCG, logistics, and e-commerce.  As General Manager, Commercial at Enstore, David is responsible for driving revenue growth, expanding market share, and optimizing supply chain efficiencies. His portfolio includes Sales & Trade Management, Marketing & Brand Management, and Supply Chain & Logistics Management, ensuring that commercial and operational strategies are seamlessly integrated to deliver business success.  David is a results-oriented leader with a proven track record in managing large-scale logistics operations, leading high-performance teams, and fostering strategic business relationships. His ability to collaborate with third-party logistics partners (3PLs), e-commerce platforms, corporate clients, and key stakeholders has been instrumental in building sustainable and scalable business solutions.  He holds a BSc in Business Administration and Marketing, with professional certifications in sales excellence, supply chain management, project management, key account management, and operations optimization. His thought leadership in commercial strategy and logistics innovation continues to make a significant impact in transforming business operations for long-term growth and competitiveness.",
    link: "https://www.linkedin.com/in/david-allison-99403280",
  },
];
