import { Arrow } from "@radix-ui/react-popover";
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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const capabilities = [
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
        {
          name: "Branding",
          link: "#",
          icon: (
            <BadgeCheck className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
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
          name: "Technical QA",
          link: "#",
          icon: (
            <Bug className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
        },
        {
          name: "CMS Implementation",
          link: "#",
          icon: (
            <LayoutDashboard className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
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
  },
];

export default function Capabilities() {
  return (
    <Fragment>
      <div className="flex flex-row max-md:flex-col max-md:overflow-y-auto max-md:h-100 max-md:px-2">
        <div className="w-40  ">
          <h4 className="font-semibold">{capabilities[0].Design.title}</h4>
          {capabilities[0].Design.items.map((item, index) => (
            <div className="flex flex-row  mt-2 justify-between group ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold">{capabilities[0].Development.title}</h4>
          {capabilities[0].Development.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group w-50 ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold">{capabilities[0].SEO.title}</h4>
          {capabilities[0].SEO.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
