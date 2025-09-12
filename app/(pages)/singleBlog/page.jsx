import { capabilities } from "@/app/mock/Navbar/capabilities";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function SingleBlogPage({ params }) {
;
const categories = Object.values(capabilities[0]); 



return (
  <Fragment>
    <section className="flex flex-col lg:flex-row items-start py-10 lg:pt-[70px] px-[5%] justify-between bg-black gap-10">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/4 flex flex-col gap-6 text-white ">
        <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-[#a5acc0]">
            {categories.map((category, index) => (
              <Link href={`/services/${category.title.toLowerCase()}/${category.items[0].searchParam}?index=0`} key={index}>
                <li className="cursor-pointer hover:text-white transition">{category.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="bg-[#1a1a1a] p-5 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Recent Posts</h3>
          <ul className="space-y-2 text-[#a5acc0]">
            <li>How to Improve UX Design</li>
            <li>Top 5 React Libraries</li>
            <li>Why Next.js is the Future</li>
          </ul>
        </div>
      </aside>

      {/* Main Blog Content */}
      <div className="flex-1">
        {/* Hero Image */}
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/services/design/webdesign.png"
            alt="Blog Placeholder"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Title & Meta */}
        <div className="text-center lg:text-left mb-6">
          <h2 className="text-white text-[60px] max-lg:text-[28px] font-bold leading-tight mb-4">
            Blog Title Here
          </h2>
          <p className="text-[#a5acc0] text-[16px]">
            Posted on <span className="text-white">September 12, 2025</span> •
            By <span className="text-white">Admin</span>
          </p>
        </div>

        {/* Blog Body */}
        <article className="prose prose-invert max-w-none text-[#d1d5db] leading-relaxed space-y-6">
          <p>
            This is the main content of your blog post. You can write multiple
            paragraphs here and style them for readability. Tailwind’s{" "}
            <code>prose</code> class makes typography beautiful with proper
            spacing and font sizing.
          </p>
          <p>
            You can also add <strong>bold text</strong>, <em>italic text</em>,
            blockquotes, code snippets, and images inside this article section.
            The styling will automatically adapt to dark mode.
          </p>
          <blockquote>
            "Design is not just what it looks like and feels like. Design is how
            it works." – Steve Jobs
          </blockquote>
          <p>
            Wrap up your blog with a conclusion or call-to-action for readers to
            comment, share, or continue exploring.
          </p>
        </article>

       
      </div>
    </section>
  </Fragment>
);
}
