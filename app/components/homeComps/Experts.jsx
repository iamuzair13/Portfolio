import { Fragment, useState } from "react";
import { RiGatsbyLine, RiNextjsLine, RiVercelFill } from "react-icons/ri";
import {
  SiDatocms,
  SiNetlify,
  SiPrismic,
  SiSanity,
  SiStoryblok,
  SiWebflow,
} from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io5";

const expertData = [
  {
    icon: <RiNextjsLine className="w-10 h-10" />,
    text: "Next.Js",
  },
  {
    icon: <RiGatsbyLine className="w-10 h-10" />,
    text: "Gatsby.js",
  },
  {
    icon: <SiStoryblok className="w-10 h-10" />,
    text: "StoryBlok",
  },
  {
    icon: <SiSanity className="w-10 h-10" />,
    text: "Sanity",
  },
  {
    icon: <IoLogoWordpress className="w-10 h-10" />,
    text: "Wordpress",
  },
  {
    icon: <SiDatocms className="w-10 h-10" />,
    text: "Dato",
  },
  {
    icon: <SiWebflow className="w-10 h-10" />,
    text: "WebFlow",
  },
  {
    icon: <SiNetlify className="w-10 h-10" />,
    text: "Netlify",
  },
  {
    icon: <RiVercelFill className="w-10 h-10" />,
    text: "Vercel",
  },
  {
    icon: <SiPrismic className="w-10 h-10" />,
    text: "Prismic",
  },
];

export default function Experts() {
  const [expertIndex, setExpertIndex] = useState(0);
  const defValue = "the Composable Stack";

  return (
    <Fragment>
      {expertData.map((item, index) => {
        if (expertIndex === index) {
          return (
            <div
              key={index}
              className="text-white  lg:w-[40%] max-lg:text-center"
            >
              <div>
                <h2 className="text-[#9297a0] text-[36px] leading-[45px]">
                  We've got experts in
                </h2>
                <h4 className="text-[36px]">{item.text}</h4>
              </div>
            </div>
          );
        }
      })}
      <div className="flex flex-row flex-wrap  justify-between ">
        {expertData.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => {
                setExpertIndex(index);
              }}
              onMouseLeave={() => {
                setExpertIndex(0);
              }}
              className="flex flex-row flex-wrap border border-transparent transition-colors duration-300 ease-in-out hover:border-[#1663ff] rounded-[10px] p-2 "
            >
              <h4 className="text-white ">{item.icon}</h4>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
