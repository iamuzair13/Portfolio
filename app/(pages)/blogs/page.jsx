"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs");
        const blogData = await response.json();
        if (blogData.success) {
          setBlogs(blogData.data);
          console.log("Fetched blogs:", blogData.data);
          
          
        } else {
          console.error("Failed to fetch blogs:", blogData.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

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
        {/* <Button className="w-[250px] cursor-pointer text-base bg-[#0f3bbe] flex items-center gap-2 lg:text-[14px]  max-lg:p-6">
          <Link href="/publish">Publish Blog</Link>
          <PlusIcon className="w-5 h-5 max-lg:w-2 max-lg:h-2 text-white" />
        </Button> */}
      </section>
      <section className="  flex flex-col max-md:flex-col items-center  max-md:pt-[70px] px-[5%] justify-evenly bg-black   ">
        {blogs.length > 0 ? (

          <div className="flex flex-row flex-wrap gap-x-3 gap-y-8 px-[5%] justify-evenly  items-center  ">
            {blogs.map((item, index) => {
              return (
                <Link key={index} href={`/singleBlog?id=${item._id}`}>
                  <div className="w-[330px] max-md:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-gray-800  transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white  ">
                    <Avatar className=" w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105">
                      <AvatarImage
                        src={`${item.blogImage}`}
                        alt="Service Card 1"
                        className="lg:h-[200px] object-cover rounded-none  "
                      />
                      <AvatarFallback>Card {index}</AvatarFallback>
                    </Avatar>
                    <div className="px-4 pt-6 flex flex-col gap-4">
                      <div className=" space-y-2 border pb-2 border-transparent border-b-[#08090c]">
                        <h2 className="lg:text-[24px]   font-[600]">
                          {item.title.length > 20
                            ? item.title.charAt(0).toUpperCase() +
                              item.title.slice(1, 20) +
                              "..."
                            : item.title}
                        </h2>
                        {item.content.length > 100 ? (
                          <p className="lg:text-[12px]  font-[400] ">
                            {item.content.slice(0, 100)}...
                          </p>
                        ) : (
                          <p className="lg:text-[14px]  font-[400] ">
                            {item.content}
                          </p>
                        )}
                      </div>
                      {item.button}
                      <div className="flex flex-row gap-x-2 justify-start  w-full items-center">
                        <div className="">
                          <h4>
                            {item.author.charAt(0).toUpperCase() +
                              item.author.slice(1)}
                          </h4>

                          <p className="text-gray-400 text-[12px]">
                            {item.publishedAt}
                          </p>
                        </div>
                      </div>
                      <div className=" w-full items-start ">
                        <h4 className=" text-white w-full rounded-[14px] ">
                          {item.category.charAt(0).toUpperCase() +
                            item.category.slice(1)}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            
          </div>
        ) : (
          <p>No blogs found</p>
        )}
      </section>
    </Fragment>
  );
}
