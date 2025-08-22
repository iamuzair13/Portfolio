import { Fragment, useState } from "react";
import {  RiNextjsLine,  } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaEtsy,
  FaFigma,
  FaNode,
  FaReact,
  FaShopify,
} from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const expertData = [
  {
    icon: <RiNextjsLine className="w-10 h-10" />,
    text: "Next.Js",
  },
  {
    icon: <FaReact className="w-10 h-10" />,
    text: "React.js",
  },
  {
    icon: <FaNode className="w-10 h-10" />,
    text: "Node.Js",
  },
  {
    icon: <TbBrandReactNative className="w-10 h-10" />,
    text: "React Native",
  },
  {
    icon: <SiMongodb className="w-10 h-10" />,
    text: "MongoDB",
  },
  {
    icon: <DiPhotoshop className="w-10 h-10" />,
    text: "Photoshop",
  },
  {
    icon: <DiIllustrator className="w-10 h-10" />,
    text: "Illustrator",
  },
  {
    icon: <FaFigma className="w-10 h-10" />,
    text: "Figma",
  },
  {
    icon: <FaAmazon className="w-10 h-10" />,
    text: "Amazon",
  },
  {
    icon: <FaShopify className="w-10 h-10" />,
    text: "Shopify",
  },
  {
    icon: <FaEtsy className="w-10 h-10" />,
    text: "Etsy",
  },
];

export default function Experts() {
  const [expertIndex, setExpertIndex] = useState(0);

  return (
    <Fragment>
      <div className="flex w-full justify-between max-lg:flex-col">
        {expertData.map((item, index) => {
          if (expertIndex === index) {
            return (
              <div
                key={index}
                className="text-white lg:w-[60%] max-lg:text-center"
              >
                <div className="">
                  <h2 className="text-[#9297a0]  text-[45px] max-lg:text-[30px] leading-[45px]">
                    We've got experts in
                  </h2>
                  <motion.h4
                    initial={{ translateY: 12 }}
                    animate={{
                      translateY: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeIn",
                    }}
                    className="text-[45px] max-lg:text-[30px]"
                  >
                    {item.text}
                  </motion.h4>
                </div>
              </div>
            );
          }
        })}
        <div className="flex flex-row flex-wrap w-[30%] max-lg:w-full justify-between ">
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
                className="flex flex-row flex-wrap border border-transparent transition-colors duration-300 ease-in-out hover:border-[#1663ff] rounded-[10px] p-2 cursor-pointer"
              >
                <h4 className="text-white ">{item.icon}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
