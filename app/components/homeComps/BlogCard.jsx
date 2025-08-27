import { cardData } from "@/app/mock/BlogCard";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Fragment } from "react";


export default function BlogCard() {
  return (
    <Fragment>
      <div className="flex flex-row flex-wrap gap-2 px-[5%] justify-evenly">
        {cardData.map((item, index) => {
          return (

            <div
                  key={index}
<<<<<<< HEAD
                  className="w-[300px] max-lg:w-[45%] max-md:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-gray-600  transition-colors duration-300 ease-in-out  hover:border-[#0a49eb] text-white  "
=======
                  className="w-[300px] max-lg:w-[45%] max-md:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-[#08090c]  transition-colors duration-300 ease-in-out  hover:border-[#0a49eb] text-white  "
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
                >
                  <Avatar className=" w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105">
                    <AvatarImage
                      src={item.image}
                      alt="Service Card 1"
                      className="lg:h-[200px] object-cover rounded-none  "
                    />
                    <AvatarFallback>Card {index}</AvatarFallback>
                  </Avatar>
                  <div className="px-4 pt-6 flex flex-col gap-4">
                    <div className=" space-y-2 border pb-2 border-transparent border-b-[#08090c]">
                      <h4 className="lg:text-[16px]   font-[600]">
                        {item.title}
                      </h4>
                      <p className="lg:text-[14px]  font-[400] ">{item.text}</p>
                    </div>
                    {item.button}
                    <div className="flex flex-row gap-x-2 justify-start  w-full items-center">
                      <Avatar>
                        <AvatarImage
                          src={item.icon}
                          alt="Team Member"
                          className="w-10 h-10 rounded-full object-cover grayscale"
                        />
                        <AvatarFallback>Team Member</AvatarFallback>
                      </Avatar>

                      <div className="">
                        <h4>{item.name}</h4>
                        <h4>{item.date}</h4>
                      </div>
                    </div>
                    <div className=" w-full items-start ">
                      <h4 className=" text-white w-full rounded-[10px] px-2 bg-gray-800">
                        {item.category}
                      </h4>
                    </div>
                  </div>
                </div>
          );
        })}
      </div>
    </Fragment>
  );
}
