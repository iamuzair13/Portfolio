"use client";
import { useParams, useSearchParams } from "next/navigation";
import { capabilities } from "@/app/mock/Navbar/capabilities";
import Image from "next/image";
import Link from "next/link";
import { Fragment, use, useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function BlogClient() {
  const [blog, setBlog] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);

  const categories = Object.values(capabilities[0]);
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs`);
        const blogData = await response.json();
        const singleBlog = blogData.data.find((b) => b._id === blogId);

        setRecentPosts(blogData.data.slice(-3)); // Get last 5 blogs as recent posts

        if (response.ok) {
          setBlog(singleBlog);
          // console.log("Fetched blog:", singleBlog);
        } else {
          console.error(
            "Failed to fetch blog:",
            blogData.message || blogData.error
          );
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  return (
    <Fragment>
      <section className="flex flex-col lg:flex-row items-start py-10 lg:pt-[70px] px-[5%] justify-between bg-black gap-10">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6 text-white ">
          <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-[#a5acc0]">
              {categories.map((category, index) => (
                <Link
                  href={`/services/${category.title.toLowerCase()}/${
                    category.items[0].searchParam
                  }?index=0`}
                  key={index}
                >
                  <li className="cursor-pointer hover:text-white transition">
                    {category.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Recent Posts</h3>
            {recentPosts.length === 0 ? (
              <p className="text-[#a5acc0]">No recent posts available.</p>
            ) : (
              <ul className="space-y-2">
                {recentPosts.map((post, index) => (
                  <Link key={index} href={`/singleBlog?id=${post._id}`}>
                    <li className="cursor-pointer hover:text-white transition">
                      {post.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Blog Content */}
        <div className="flex-1">
          {/* Hero Image */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src={blog.blogImage || "/blog-placeholder.jpg"}
              alt="Blog Placeholder"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blog Title & Meta */}
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-white text-[60px] max-lg:text-[28px] font-bold leading-tight mb-4">
              {blog.title || "Blog Title Placeholder"}
            </h2>
            <p className="text-[#a5acc0] text-[16px]">
              Posted on{" "}
              <span className="text-white">
                {blog.publishedAt || "September 12, 2025"}
              </span>{" "}
              • By <span className="text-white">{blog.author || "Admin"}</span>
            </p>
          </div>

          {/* Blog Body */}
          <article className="prose prose-invert max-w-none text-[#d1d5db] leading-relaxed space-y-6">
            <p>
              {(() => {
                if (!blog?.content) {
                  return (
                    <p>
                      This is a placeholder for the blog content. The actual
                      content will be displayed here once fetched from the
                      server.
                    </p>
                  );
                }

                // Split content into 4 parts
                const parts = blog.content.split(" ");
                const chunkSize = Math.ceil(parts.length / 4);
                const chunks = [];

                for (let i = 0; i < parts.length; i += chunkSize) {
                  chunks.push(parts.slice(i, i + chunkSize).join(" "));
                }

                return chunks.map((part, index) => <p key={index}>{part}</p>);
              })()}
            </p>
          </article>
        </div>
      </section>
    </Fragment>
  );
}
