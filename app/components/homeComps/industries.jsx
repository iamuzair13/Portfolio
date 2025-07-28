import { Fragment } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const industries = [
  {
    text: "SaaS",
    image: "/images/Masonary/m-1.webp",
  },
  {
    text: "AI/ML",
    image: "/images/Masonary/m-2.webp",
  },
  {
    text: "Web3",
    image: "/images/Masonary/m-3.webp",
  },
  {
    text: "Fintech",
    image: "/images/Masonary/m-4.webp",
  },
  {
    text: "Developers",
    image: "/images/Masonary/m-5.webp",
  },
  {
    text: "Enterprise",
    image: "/images/Masonary/m-1.webp",
  },
];

export default function Industries() {
  return (
    <Fragment>
      <div className="flex flex-row flex-wrap gap-x-40 max-lg:gap-x-15 max-md:gap-x-40 max-lg:gap-y-10 justify-evenly lg:p-10">
        {industries.map((item, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger>
                <h4 className="text-white lg:text-[64px] max-lg:text-[48px] cursor-pointer">
                  {item.text}
                </h4>
              </TooltipTrigger>
              <TooltipContent className="w-[150px] h-[250px] p-0">
                <Avatar className="w-full h-full">
                  <AvatarImage
                    src={item.image}
                    className="w-full h-full object-cover rounded-none"
                  />

                  <AvatarFallback>Image</AvatarFallback>
                </Avatar>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </Fragment>
  );
}
