import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const cardData = [
  {
    title: "Design",
    image: "/images/serviceCards/graphic-designing.png",
    text: " Designs that engage, inspire, and drive results.",
    button: (
      <Button className=" absolute w-15 h-15  right-[-5] bottom-[-5] bg-[#08090c] border border-gray-700 group-hover:border-[#0a49eb]  group-hover:bg-[#0a49eb] hover:bg-[#0a49eb] cursor-pointer">
        <ArrowUpRight className=" w-5 h-5" />
      </Button>
    ),
  },
  {
    title: "Development",
    text: " Modern builds that are fast, scalable, and future-proof.",
    image: "/images/serviceCards/webdev.jpg",
    button: (
      <Button className=" absolute w-15 h-15  right-[-5] bottom-[-5] bg-[#08090c] border border-gray-700 group-hover:border-[#0a49eb] hover:bg-[#0a49eb]  group-hover:bg-[#0a49eb] cursor-pointer">
        <ArrowUpRight className=" w-5 h-5" />
      </Button>
    ),
  },
  {
    title: "E-Commerce",
    text: " Data-driven experiments that turn visitors into customers.",
    image: "/images/serviceCards/121.png",
    button: (
      <Button className=" absolute w-15 h-15  right-[-5] bottom-[-5] bg-[#08090c] border border-gray-700 group-hover:border-[#0a49eb]  group-hover:bg-[#0a49eb] hover:bg-[#0a49eb] cursor-pointer">
        <ArrowUpRight className=" w-5 h-5" />
      </Button>
    ),
  },
  {
    title: "SEO",
    text: "Optimized websites that rank higher and load faster.",
    image: "/images/serviceCards/seo.png",
    button: (
      <Button className=" absolute w-15 h-15  right-[-5] bottom-[-5] bg-[#08090c] border border-gray-700 group-hover:border-[#0a49eb]  group-hover:bg-[#0a49eb] hover:bg-[#0a49eb] cursor-pointer">
        <ArrowUpRight className=" w-5 h-5" />
      </Button>
    ),
  },
];

export default function ServiceCard() {
  return (
    <Fragment>
      <div className="flex flex-row max-lg:flex-wrap max-md:flex-col gap-6 px-[5%] justify-between">
        {cardData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[320px] max-md:w-[90vw] h-[380px] group relative flex flex-col items-center justify-between pb-[40px] cursor-pointer rounded-[20px] overflow-hidden border border-gray-700 transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white "
            >
              <Avatar className=" w-full h-50 transition-transform duration-300 ease-in-out group-hover:scale-105 text-end rounded-none ">
                <AvatarImage
                  src={item.image}
                  alt="Service Card 1"
                  className="w-full h-auto object-cover "
                />
                <AvatarFallback>Card 1</AvatarFallback>
              </Avatar>
              <div className="p-6 space-y-2">
                <h4 className="lg:text-[18px] max-lg:text-[14px]   font-[600]">
                  {item.title}
                </h4>
                <p className="lg:text-[16px] max-lg:text-[14px] w-full font-[400]  text-[#90acc0]">
                  {item.text}
                </p>
              </div>
              {item.button}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
