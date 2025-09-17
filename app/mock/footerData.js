import {
  Brush,
  Code,
  LayoutTemplate,
  Monitor,
  Move,
  Link2,
  Database,
  Bug,
  Layers,
  FileText,
  Settings,
  Globe,
  Mail,
  Phone,

} from "lucide-react";
import { RiHandbagFill } from "react-icons/ri";
import { SiAmazon, SiShopify, SiTiktok, SiWalmart } from "react-icons/si";
import id from "zod/v4/locales/id.cjs";

export const footerData = [
  {
    Design: {
      title: "Development",
      items: [
        {
          id: 1,
          category: "design",
          searchParam: "webdesign",
          name: "Web Design",
          icon: <Monitor className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 2,
          category: "design",
          searchParam: "systemDesign",
          name: "Design Systems",
          icon: <LayoutTemplate className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 3,
          category: "design",
          searchParam: "illustrationDesign",
          name: "Illustration Design",
          icon: <Brush className="w-[15px] h-[15px] text-blue-500 " />,
        },

        {
          id: 4,
          category: "design",
          searchParam: "motionDesign",
          name: "Motion Design",
          icon: <Move className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 1,
          category: "development",
          searchParam: "frontendDev",
          name: "Frontend Development",
          icon: <Code className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 2,
          category: "development",
          searchParam: "systemIntegration",
          name: "System Integrations",
          icon: <Link2 className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 3,
          category: "development",
          searchParam: "backendDev",
          name: "Backend Development",
          icon: <Database className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 4,
          category: "development",
          searchParam: "openAiIntegration",
          name: "OpenAI Integration",
          icon: <Bug className="w-[15px] h-[15px] text-blue-500 " />,
        },
      ],
    },

  
    SEO: {
      title: "E-Commerce",
      items: [
        {
          id: 1,
          category: "seo",
          searchParam: "siteStructure",
          name: "Site Structure",
          icon: <Layers className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 2,
          category: "seo",
          searchParam: "onPageSeo",
          name: "On-Page SEO",
          icon: <FileText className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 3,
          category: "seo",
          searchParam: "technicalSeo",
          name: "Technical SEO",
          icon: <Settings className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 4,
          category: "seo",
          searchParam: "localization",
          name: "Localization",
          icon: <Globe className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 1,
          category: "ecommerce",
          searchParam: "amazon",
          name: "Amazon",
          icon: <SiAmazon className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 2,
          category: "ecommerce",
          searchParam: "shopify",
          name: "Shopify",
          icon: <SiShopify className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 3,
          category: "ecommerce",
          searchParam: "walmart",
          name: "Walmart",
          icon: <RiHandbagFill className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 4,
          category: "ecommerce",
          searchParam: "tiktok",
          name: "TikTok",
          icon: <SiTiktok className="w-[15px] h-[15px] text-blue-500 " />,
        },
      ],
    },
  },
  {
    contact: {
      title: "Contact Us",
      items: [
        {
          id: 1,
          category: "contact",
          searchParam: "general",
          name: "General Inquiries",
          icon: <Mail className="w-[15px] h-[15px] text-blue-500 " />,
        },
        {
          id: 2,
          category: "contact",
          searchParam: "support",
          name: "Customer Support",
          icon: <Phone className="w-[15px] h-[15px] text-blue-500 " />,
        },
      ],
    },
  },
];