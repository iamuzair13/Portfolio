"use client";
import { Arrow } from "@radix-ui/react-popover";
// import { div } from "@/components/ui/div"
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Cpu,
  Database,
  Factory,
  Flag,
  Globe,
  Hammer,
  Layers,
  ListChecks,
  PenLine,
  Target,
  Terminal,
  Wand,
  Box,
  Rocket,
  UploadCloud,
  Server,
  Cloud,
  Wallet,
  Banknote,
  Code,
  Network,
  Building2,
  Users,
  Palette,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { Fragment, useState } from "react";

// solution > technology----------------------------
const technologyContent = [
  {
    cms: {
      title: "CMS",
      items: [
        {
          icon: (
            <Layers className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Contentful",
        },
        {
          icon: (
            <Brain className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Sanity",
        },
        {
          icon: (
            <Hammer className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Builder",
        },
        {
          icon: (
            <Database className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "DatoCMS",
        },
        {
          icon: (
            <BookOpen className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Storyblok",
        },
        {
          icon: (
            <Globe className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "HubSpot CMS",
        },
        {
          icon: (
            <Wand className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Webflow",
        },
        {
          icon: (
            <PenLine className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Wordpress",
        },
      ],
    },
  },
  {
    framework: {
      title: "FRAMEWORK",
      items: [
        {
          icon: (
            <Box className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "NextJS",
        },
        {
          icon: (
            <Rocket className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Gatsby",
        },
        {
          icon: (
            <UploadCloud className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Deployment",
        },
        {
          icon: (
            <Server className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Vercel",
        },
        {
          icon: (
            <Cloud className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
          ),
          name: "Netlify",
        },
      ],
    },
  },
];

// solutions > use case-----------------------------

const solutionsUseCase = [
  {
    icon: <Users className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600"/>,
    heading: "Support In-House Engineers",
    text: "Scale your dev team.",
  },
  {
    icon: <TrendingUp className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600"/>,
    heading: "Increase Website Conversions",
    text: "Convert more visitors.",
  },
  {
    icon: <Palette  className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600"/>,
    heading: "Improve Brand Consistency",
    text: "Strengthen your brand.",
  },
  {
    icon: <Gauge className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600"/>,
    heading: "Boost Website Performance",
    text: "Speed up your site.",
  },
  {
    icon: <BarChart3 className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600"/>,
    heading: "Increase Website Traffic",
    text: "Get more visitors.",
  },
];

// Drop Down solution menu
const solutionDropdown = [
  // scope tab submenu-------------------------------------------------
  {
    icon: (
      <Flag className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
    ),
    title: "Scope",
    content: (
      <div className={"w-full "}>
        <div className={"flex flex-row gap-2 "}>
          <div className="relative w-full border-1 hover:border-blue-600 border-gray-300 p-4 group  rounded-[8px] cursor-pointer ">
            <p className="group-hover:text-blue-600">Website Redesigns</p>
            <ArrowUpRight className="w-[15px] h-[15px] bg-black text-white rounded-[4px] absolute bottom-2  right-2 text-gray-500 group-hover:text-white group-hover:bg-blue-600 " />
          </div>

          <div className="group relative w-full border-1 hover:border-blue-600 border-gray-300 p-4  rounded-[8px] cursor-pointer ">
            <p className="group-hover:text-blue-600">Website Migrations</p>
            <ArrowUpRight className="w-[15px] h-[15px] bg-black text-white rounded-[4px] absolute bottom-2 right-2 text-gray-500  group-hover:text-white group-hover:bg-blue-600 " />
          </div>
        </div>
        <div className="group mt-2">
          <div className="relative w-full border-1 hover:border-blue-600 border-gray-300 p-4 rounded-[8px] cursor-pointer group-hover:text-blue-600">
            <p>Ongoing Website Services</p>
            <ArrowUpRight className="w-[15px] h-[15px] bg-black text-white rounded-[4px] absolute bottom-2 right-2 text-gray-500 group-hover:text-blue-600  group-hover:text-white group-hover:bg-blue-600 " />
          </div>
        </div>
      </div>
    ),
  },

  // Technology tab submenu-------------------------------------------------

  {
    icon: (
      <Cpu className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
    ),
    title: "Technology",
    content: (
      <div className="flex flex-row ">
        <div className=" w-50  font-medium">
          <h3>{technologyContent[0].cms.title}</h3>
          {technologyContent[0].cms.items.map((item, index) => {
            return (
              <div className="flex flex-row items-center gap-2 group ">
                <span className="w-[15px] h-[15px] cursor-pointer group-hover:text-blue-600">
                  {item.icon}
                </span>
                <p
                  className="cursor-pointer group-hover:text-blue-600"
                  key={index}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="font-medium">
          <h3>{technologyContent[1].framework.title}</h3>
          {technologyContent[1].framework.items.map((item, index) => {
            return (
              <div className="flex flex-row items-center gap-2 group">
                <span className="w-[15px] h-[15px] cursor-pointer group-hover:text-blue-600">
                  {item.icon}
                </span>
                <p
                  className="cursor-pointer group-hover:text-blue-600"
                  key={index}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ),
  },

  // Industry tab submenu-------------------------------------------------

  {
    icon: (
      <Factory className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
    ),
    title: "Industry",
    content: (
      <div className="w-full flex flex-row">
        <div className="w-1/2">
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Layers className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">SaaS</p>
          </div>
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Wallet className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">FinTech</p>
          </div>
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Banknote className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">AI/ML</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Cpu className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">Developer Tools</p>
          </div>
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Network className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">Web3</p>
          </div>
          <div className="group flex flex-row items-center gap-2 cursor-pointer">
            <Building2 className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <p className=" group-hover:text-blue-600">Enterprise Software</p>
          </div>
        </div>
      </div>
    ),
  },

  // Use Case tab submenu-------------------------------------------------

  {
    icon: (
      <ListChecks className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
    ),
    title: "Use Case",
    content: (
      <div className=" w-full flex flex-row flex-wrap gap-y-2">
        {solutionsUseCase.map((item, index) => {
          return (
            <div key={index} className="group border-1 hover:border-blue-600 w-1/2 p-4 cursor-pointer ">
              <div className=" flex flex-row items-center gap-2 group-hover:text-blue-600">
                <span>{item.icon}</span>
                <h4 className="font-medium">{item.heading}</h4>
              </div>
              <p className="w-full">{item.text}</p>
            </div>
          );
        })}
      </div>
    ),
  },

  // Stage tab submenu-------------------------------------------------

  {
    icon: (
      <BarChart3 className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
    ),
    title: "Stage",
    content: (
      <div className="flex flex-row gap-2 ">
       <div className="relative w-[45%] border hover:border-blue-600 border-gray-300 p-4 group rounded-[8px] p-6 cursor-pointer ">
            <p className="group-hover:text-blue-600">Enterprize</p>
            <ArrowUpRight className="w-[15px] h-[15px] bg-black text-white rounded-[4px] absolute bottom-2  right-2 text-gray-500 group-hover:text-white group-hover:bg-blue-600 " />
          </div>
       <div className="relative w-[45%] border hover:border-blue-600 border-gray-300 p-4 group rounded-[8px] p-6  cursor-pointer ">
            <p className="group-hover:text-blue-600">Start-ups</p>
            <ArrowUpRight className="w-[15px] h-[15px] bg-black text-white rounded-[4px] absolute bottom-2  right-2 text-gray-500 group-hover:text-white group-hover:bg-blue-600 " />
          </div>
        
      </div>
    ),
  },
];

// Function ---------------------------------------------------
export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Fragment>
      <div className="flex flex-row  max-md:flex-col gap-1 max-md:px-8">
        <div className={"w-1/4"}>
          <div className={"w-full"}>
            {solutionDropdown.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`group flex flex-row gap-2 items-center mt-3 h-full  ${
                    isActive ? "bg-[#f7f9fb]" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  <h4
                    className="cursor-pointer group-hover:text-blue-600 text-[14px]  w-auto"
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={"w-3/4 max-md:w-full max-md:border-t-1 max-md:pt-4"}>{solutionDropdown[activeIndex].content}</div>
      </div>
    </Fragment>
  );
}
