import {
  BadgeCheck,
  Brush,
  Code,
  LayoutTemplate,
  Monitor,
  Move,
  Link2,
  Database,
  Bug,
  LayoutDashboard,
  Layers,
  FileText,
  Settings,
  Globe,

} from "lucide-react";

export const capabilities = [
  {
    Design: {
      title: "Design",
      items: [
        {
          name: "Web Design",
          link: "#",
          icon: (
            <Monitor className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Design Systems",
          link: "#",
          icon: (
            <LayoutTemplate className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Illustration Design",
          link: "#",
          icon: (
            <Brush className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Motion Design",
          link: "#",
          icon: (
            <Move className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        // {
        //   name: "Branding",
        //   link: "#",
        //   icon: (
        //     <BadgeCheck className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
        //   ),
        // },
      ],
    },

    Development: {
      title: "Development",
      items: [
        {
          name: "Frontend Development",
          link: "#",
          icon: (
            <Code className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "System Integrations",
          link: "#",
          icon: (
            <Link2 className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Backend Development",
          link: "#",
          icon: (
            <Database className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Open AI",
          link: "#",
          icon: (
            <Bug className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
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
            <Layers className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "On-Page SEO",
          link: "#",
          icon: (
            <FileText className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Technical SEO",
          link: "#",
          icon: (
            <Settings className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Localization",
          link: "#",
          icon: (
            <Globe className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 " />
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
            <Layers className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Shopify",
          link: "#",
          icon: (
            <FileText className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "Walmart",
          link: "#",
          icon: (
            <Settings className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "TikTok",
          link: "#",
          icon: (
            <Globe className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 " />
          ),
        },
      ],
    },
  },
];