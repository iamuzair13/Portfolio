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

} from "lucide-react";
import { RiHandbagFill } from "react-icons/ri";
import { SiAmazon, SiShopify, SiTiktok, SiWalmart } from "react-icons/si";

export const capabilities = [
  {
    Design: {
      title: "Design",
      items: [
        {
          name: "Web Design",
          link: "#",
          icon: (
            <Monitor className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Design Systems",
          link: "#",
          icon: (
            <LayoutTemplate className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Illustration Design",
          link: "#",
          icon: (
            <Brush className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Motion Design",
          link: "#",
          icon: (
            <Move className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        
      ],
    },

    Development: {
      title: "Development",
      items: [
        {
          name: "Frontend Development",
          link: "#",
          icon: (
            <Code className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "System Integrations",
          link: "#",
          icon: (
            <Link2 className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Backend Development",
          link: "#",
          icon: (
            <Database className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "OpenAI Integration",
          link: "#",
          icon: (
            <Bug className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
       
      ],
    },

    SEO: {
      title: "SEO",
      items: [
        {
          name: "Site Structure",
          link: "#",
          icon: (
            <Layers className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "On-Page SEO",
          link: "#",
          icon: (
            <FileText className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Technical SEO",
          link: "#",
          icon: (
            <Settings className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Localization",
          link: "#",
          icon: (
            <Globe className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
      ],
    },
    eCommerce: {
      title: "E-Commerce",
      items: [
        {
          name: "Amazon",
          link: "#",
          icon: (
            <SiAmazon  className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Shopify",
          link: "#",
          icon: (
            <SiShopify  className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
        {
          name: "Walmart",
          link: "#",
          icon: (
            <RiHandbagFill   className="w-[15px] h-[15px] text-blue-500 " />
            
          ),
        },
        {
          name: "TikTok",
          link: "#",
          icon: (
            <SiTiktok  className="w-[15px] h-[15px] text-blue-500 " />
          ),
        },
      ],
    },
  },
];