"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Fragment, useState } from "react";

export default function AddBlog() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [descText, setDescText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { author, title, text: descText, category };

    try {
      const res = await fetch("/API/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        alert("Blog added successfully!");
        setAuthor("");
        setTitle("");
        setDescText("");
        setCategory("");
      } else {
        alert("Error adding blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <section className="  flex flex-col max-md:flex-col items-center  max-md:pt-[70px] px-[5%] justify-evenly bg-black   ">
        <div className="md:left md:w-[70%]">
          <h2 className="text-white text-[60px] text-center max-md:text-[24px] md:leading-[70px] ">
            Publish What You Explore
          </h2>
        </div>
        <div className="right flex flex-col max-md:justify-center max-md:text-center items-center ">
          <h4 className="text-[#a5acc0] text-[20px] max-md:text-[16px]  pb-10">
            Talk with our experts to start your website transformation today.
          </h4>
        </div>

        {/* input fields */}
        <div className="w-full">
          <form className="" method="POST">
            <div className="flex flex-col flex-wrap w-full justify-center items-center space-y-4 space-x-2">
              <div className="flex flex-col  w-[40%]">
                <label
                  htmlFor="author"
                  className="text-[#a5acc0] text-[16px] max-md:text-[14px]"
                >
                  Name
                </label>
                <input
                  id="author"
                  name="author"
                  value={author}
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  className="border rounded-md px-3 py-2  text-[#a5acc0] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col  w-[40%]">
                <label
                  htmlFor="author"
                  className="text-[#a5acc0] text-[16px] max-md:text-[14px]"
                >
                  Title
                </label>
                <input
                  id="author"
                  value={title}
                  name="author"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title "
                  className="border rounded-md px-3 py-2  text-[#a5acc0] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col  w-[40%]">
                <label
                  htmlFor="author"
                  className="text-[#a5acc0] text-[16px] max-md:text-[14px]"
                >
                  Description Text
                </label>
                <input
                  id="author"
                  name="author"
                  value={descText}
                  type="text"
                  onChange={(e) => setDescText(e.target.value)}
                  placeholder="Enter Description Text"
                  className="border rounded-md px-3 py-2  text-[#a5acc0] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col  w-[40%]">
                <label
                  htmlFor="author"
                  className="text-[#a5acc0] text-[16px] max-md:text-[14px]"
                >
                  Enter Category
                </label>
                <input
                  id="author"
                  name="author"
                  value={category}
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter author name"
                  className="border rounded-md px-3 py-2  text-[#a5acc0] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <Button  className="w-[250px] cursor-pointer text-base bg-[#0f3bbe] flex items-center gap-2 lg:text-[14px]  max-lg:p-6">
                <a href="" type="submit" onClick={()=>{handleSubmit()}}>Add</a>
                <PlusIcon className="w-5 h-5 max-lg:w-2 max-lg:h-2 text-white" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
