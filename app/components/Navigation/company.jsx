import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRight, Briefcase, Info, Mail } from "lucide-react";
import { Fragment } from "react";

export default function Company() {
  const comapny = [
    {
      img: "./images/Team/Tracy.webp",
      name: "Tracy",
      position: "Engineering Manager",
    },
    {
      img: "./images/Team/Devon.webp",
      name: "Devon",
      position: "Content Marketing",
    },
    {
      img: "./images/Team/Jordan.webp",
      name: "Jordan",
      position: "Designer",
    },
  ];

  return (
    <Fragment>
      <div className="w-full flex flex-row max-md:flex-col max-md:px-6 p-0 m-0 ">
        <div className="right w-1/2 text-[14px] font-[500]">
          <div className="group flex flex-row items-center gap-2">
            <Info className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <h4 className="group-hover:text-blue-600">About</h4>
            <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 " />
          </div>
          <div className="group flex flex-row items-center gap-2">
            <Briefcase className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <h4 className="group-hover:text-blue-600">Carrier</h4>
            <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 " />
          </div>
          <div className="group flex flex-row items-center gap-2">
            <Mail className="w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600" />
            <h4 className="group-hover:text-blue-600">Contact Us</h4>
            <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 " />
          </div>
        </div>
        <div className="flex-column  w-1/2">
          <h4 className="text-blue-600">Between the Brackets</h4>
          {comapny.map((item, index) => {
            return (
              <div key={index} className="left max-md:w-full  flex flex-row gap-x-2 mt-2">
                <Avatar className="w-12 h-12 rounded-[8px]">
                  <AvatarImage src={item.img}></AvatarImage>
                  <AvatarFallback>{item.img}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-[14px]">Meet {item.name}</h4>
                  <p className="w-50 ">{item.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
