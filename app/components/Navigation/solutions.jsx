"use client";
import { solutionDropdown } from "@/app/mock/Navbar/solutions";
import { Arrow } from "@radix-ui/react-popover";
import { Fragment, useState } from "react";
// import { div } from "@/components/ui/div"


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
