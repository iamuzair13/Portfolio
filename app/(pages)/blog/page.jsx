"use client";

import { Fragment, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import WSButton from "@/app/UI/WSButton/WSButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, PlusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cardData } from "@/app/mock/BlogCard";
import Link from "next/link";

export default function Blog() {
  // create an array unique values to filter the post
  const filterOptions = [...new Set(cardData.map((card) => card.filterby))];

  // 2. State to store selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);

  // 3. Toggle checkbox selection
  const handleCheckboxChange = (filter) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((item) => item !== filter) // remove
          : [...prev, filter] // add
    );
  };

  // 4. Filter posts based on selected filters
  const filteredPosts =
    selectedFilters.length === 0
      ? cardData
      : cardData.filter((post) => selectedFilters.includes(post.filterby));

  const mongourl =
    "mongodb+srv://chuzair600:cSgj7dRAW0j2F3HK@webstacks.stwfju0.mongodb.net/?retryWrites=true&w=majority&appName=webstacks";

  return (
    <Fragment>
      <section className="  flex flex-col max-lg:flex-col items-center py-10 max-lg:pt-[70px] px-[5%] justify-evenly bg-black   ">
        <div className="lg:left lg:w-[70%]">
          <h2 className="text-white text-[60px] text-center max-lg:text-[24px] lg:leading-[70px] ">
            Our Blog
          </h2>
        </div>
        <div className="right flex flex-col max-lg:justify-center max-lg:text-center items-center ">
          <h4 className="text-[#a5acc0] text-[20px] max-lg:text-[16px]  pb-10">

            Insights, ideas, and inspiration for modern marketers, designers,
            and developers.
          </h4>
        </div>
        <Button className="w-[250px] cursor-pointer text-base bg-[#0f3bbe] flex items-center gap-2 lg:text-[14px]  max-lg:p-6">
          <Link  href="/publish">Publish Blog</Link>
          <PlusIcon className="w-5 h-5 max-lg:w-2 max-lg:h-2 text-white" />
        </Button>
      </section>

      {/* Featured Articles */}
      <section className="  flex flex-col max-lg:flex-col items-center py-10 px-[5%]  justify-evenly bg-black   ">
        <h2 className="text-white text-xl w-full text-start font-semibold mb-4 ">
          Latest Articles
        </h2>

        <div className="flex flex-row flex-wrap gap-1 justify-between">
          {cardData.map((card, index) => {
            {
              return !card.featured ? (
                ""
              ) : (
                <div
                  key={index}
                  className="w-[300px]   max-lg:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-[#08090c]  transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white  "
                >
                  <Avatar className=" w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105">
                    <AvatarImage
                      src={card.image}
                      alt="Service Card 1"
                      className="lg:h-[200px] object-cover rounded-none  "
                    />
                    <AvatarFallback>Card {index}</AvatarFallback>
                  </Avatar>
                  <div className="px-4 pt-6 flex flex-col gap-4">
                    <div className=" space-y-2 border pb-2 border-transparent border-b-[#08090c]">
                      <h4 className="lg:text-[16px]   font-[600]">
                        {card.title}
                      </h4>
                      <p className="lg:text-[14px]  font-[400] ">{card.text}</p>
                    </div>
                    {card.button}
                    <div className="flex flex-row gap-x-2 justify-start  w-full items-center">
                      <Avatar>
                        <AvatarImage
                          src={card.icon}
                          alt="Team Member"
                          className="w-10 h-10 rounded-full object-cover grayscale"
                        />
                        <AvatarFallback>Team Member</AvatarFallback>
                      </Avatar>

                      <div className="">
                        <h4>{card.name}</h4>
                        <h4>{card.date}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Websites */}
      <section className="  flex flex-row max-lg:flex-col py-10 gap-6 items-center max-lg:pt-[70px] px-[5%] justify-evenly bg-black   ">
        <div className=" bg-blue-600 w-1/2 max-lg:w-full gap-4 p-6 flex max-lg:flex-col    rounded-[20px]  items-center">
          {/* Left Text Content */}
          <div className=" flex flex-col h-[100%] gap-10 max-lg:pt-[50px] ">
            <h1 className={`text-[24px] max-lg:text-[20px] font-bold leading-[30px] text-white `}>

              Discover the Best B2B SaaS Websites!
            </h1>

            <h4
              className={`font-normal text-white text-[16px] max-lg:text-[16px] max-lg:text-[16px] leading-[20px] `}

            >
              See what’s working for industry leading websites—and find
              inspiration to improve yours.
            </h4>

            <Button className="lg text-base bg-[#0f3bbe] flex items-center gap-2 max-lg:text-[10px] lg:text-[14px] w-full max-lg:p-6">

              Download Now
              <ArrowRight className="w-5 h-5 max-lg:w-2 max-lg:h-2 text-white" />
            </Button>
          </div>

          {/* Right Image */}

          <div className="overflow-hidden w-full flex flex-col   scrollbar-hide">
            <Image
              width={300}
              height={200}
              src="/images/Masonary/m-1.webp"
              alt="Scrolling image"
              className="object-contain rounded-[10px]"

            />
          </div>
        </div>

        <div className=" w-1/2 max-lg:w-full border rounded-[20px]  p-4">

          <div className="flex justify-between p-2 w-full">
            <Image
              width={150}
              height={150}
              src="/Logos/webstacks-logo.svg"
              alt="Scrolling image"
              className="object-contain"
            />

          </div>
          <h4 className="text-white text-[20px] text-start max-lg:text-[24px] lg:leading-[30px] ">
            Serious about scaling your website? Let’s talk.
          </h4>

          <h4 className="text-[#a5acc0] text-[18px] max-lg:text-[16px] lg:leading-[27px] pb-10">
            Your website is your biggest growth lever—are you getting the most
            out of it? Schedule a strategy call with Webstacks to uncover
            conversion roadblocks, explore high-impact improvements, and see how
            our team can help you accelerate growth.
          </h4>

            <div>
              {" "}
              <Button className="lg text-base bg-[#0f3bbe] flex items-center gap-2 lg:text-[14px]  max-lg:p-6">
                Download Now
                <ArrowRight className="w-5 h-5 max-lg:w-2 max-lg:h-2 text-white" />
              </Button>
            </div>


        </div>
      </section>

      {/* Latest Articles */}
      <section className="  flex flex-col max-lg:flex-col items-start py-10 px-[5%]  justify-evenly bg-black   ">
        <h2 className="text-white text-xl w-full text-start font-semibold mb-4 ">
          Latest Articles
        </h2>

        <div className="flex flex-row flex-wrap gap-1 justify-between">
          {cardData.map((card, index) => {
            {
              return !card.latest ? (
                ""
              ) : (
                <div
                  key={index}

                  className="w-[300px]  max-lg:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-[#08090c]  transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white  "

                >
                  <Avatar className=" w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105">
                    <AvatarImage
                      src={card.image}
                      alt="Service Card 1"
                      className="lg:h-[200px] object-cover rounded-none  "
                    />
                    <AvatarFallback>Card {index}</AvatarFallback>
                  </Avatar>
                  <div className="px-4 pt-6 flex flex-col gap-4">
                    <div className=" space-y-2 border pb-2 border-transparent border-b-[#08090c]">
                      <h4 className="lg:text-[16px]   font-[600]">
                        {card.title}
                      </h4>
                      <p className="lg:text-[14px]  font-[400] ">{card.text}</p>
                    </div>
                    {card.button}
                    <div className="flex flex-row gap-x-2 justify-start  w-full items-center">
                      <Avatar>
                        <AvatarImage
                          src={card.icon}
                          alt="Team Member"
                          className="w-10 h-10 rounded-full object-cover grayscale"
                        />
                        <AvatarFallback>Team Member</AvatarFallback>
                      </Avatar>

                      <div className="">
                        <h4>{card.name}</h4>
                        <h4>{card.date}</h4>
                      </div>
                    </div>
                    <div className=" w-full items-start ">
                      <h4 className=" text-white w-full rounded-[10px] px-2 bg-gray-800">
                        {card.category}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Filter Articles */}
      <section className="  flex flex-col max-lg:flex-col items-start py-10 px-[5%]  justify-evenly bg-black   ">
        <h2 className="text-white text-xl w-full text-start font-semibold mb-4 ">
          Filter Articles
        </h2>
      </section>

      <section className="  flex flex-row max-lg:flex-col items-start py-10 px-[5%]  justify-evenly bg-black   ">

        <div className="flex w-full flex-col lg:flex-row gap-8">
          {/*  Filters */}
          <div className="w-1/4 max-lg:w-full flex max-lg:flex-row lg:flex-col max-lg:flex-wrap space-y-2">

            <h2 className="text-lg font-semibold text-white">Filters</h2>
            {filterOptions.map((filter) => (
              <label
                key={filter}
                className="flex items-center gap-2 text-white"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => handleCheckboxChange(filter)}
                  className="bg-transparent"
                />
                {filter}
              </label>
            ))}
          </div>

          {/*  Filtered Posts */}

          <div className="flex w-3/4 max-lg:w-full border-none   flex-row flex-wrap gap-1 justify-start">
            {filteredPosts.map((card, index) => (
              <div
                key={index}
                className="w-[250px]  max-lg:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-[#08090c]  transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white  "

              >
                <Avatar className=" w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105">
                  <AvatarImage
                    src={card.image}
                    alt="Service Card 1"
                    className="lg:h-[200px] object-cover rounded-none  "
                  />
                  <AvatarFallback>Card {index}</AvatarFallback>
                </Avatar>
                <div className="px-4 pt-6 flex flex-col gap-4">
                  <div className=" space-y-2 border pb-2 border-transparent border-b-[#08090c]">
                    <h4 className="lg:text-[16px]   font-[600]">
                      {card.title}
                    </h4>
                    <p className="lg:text-[14px]  font-[400] ">{card.text}</p>
                  </div>
                  {card.button}
                  <div className="flex flex-row gap-x-2 justify-start  w-full items-center">
                    <Avatar>
                      <AvatarImage
                        src={card.icon}
                        alt="Team Member"
                        className="w-10 h-10 rounded-full object-cover grayscale"
                      />
                      <AvatarFallback>Team Member</AvatarFallback>
                    </Avatar>

                    <div className="">
                      <h4>{card.name}</h4>
                      <h4>{card.date}</h4>
                    </div>
                  </div>
                  <div className=" w-full items-start ">
                    <h4 className=" text-white w-full rounded-[10px] px-2 bg-gray-800">
                      {card.category}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
