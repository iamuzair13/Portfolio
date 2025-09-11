"use client";
import { useState } from "react";
import { boolean } from "zod";
export default function BlogPostForm() {
  
const [formData, setFormData] = useState({
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  category: "",
  tags: "",
  seoTitle: "",
  seoDescription: "",
  keywords: "",
  latest: false,
  author: "",
  publishedAt: new Date().getDate(),
  blogImage: null,
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value, files, type, checked } = e.target;

  if (type === "file" && files?.length > 0) {
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  } else if (type === "checkbox") {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });

    const res = await fetch("/API/blogs", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert(result.message);

    // reset form
    setFormData({
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      category: "",
      tags: "",
      seoTitle: "",
      seoDescription: "",
      keywords: "",
      author: "",
      latest: false,
      publishedAt: new Date().getDate(),
      blogImage: null,
    });
  } catch (err) {
    console.error("Error submitting blog:", err);
    alert("Something went wrong ❌");
  }

  setLoading(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#c7d2fe] py-8 px-2">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6"
      >
        {" "}
        <h2 className="text-3xl font-bold text-[#0f3bbe] mb-4 text-center">
          {" "}
          Create Blog Post{" "}
        </h2>{" "}
        {/* Title */}{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Title
          </label>{" "}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
            placeholder="Enter blog title"
            required
          />{" "}
        </div>{" "}
        {/* Slug */}{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Slug / URL
          </label>{" "}
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
            placeholder="auto-generated or custom-slug"
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Author
          </label>{" "}
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
            placeholder="Enter blog author"
            required
          />{" "}
        </div>
        {/* Blog Image */}{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Featured Image
          </label>{" "}
          <input
            type="file"
            name="blogImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#0f3bbe] file:text-white"
          />{" "}
        </div>{" "}
        {/* Excerpt */}{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Excerpt / Meta Description
          </label>{" "}
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
            placeholder="Short description (SEO-friendly, ~160 chars)"
          />{" "}
        </div>{" "}
        {/* Content */}{" "}
        <div>
          {" "}
          <label className="block font-semibold text-[#0f3bbe] mb-1">
            Content
          </label>{" "}
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
            placeholder="Write your blog content here..."
          />{" "}
        </div>{" "}
        {/* Category & Tags */}{" "}
        <div className="flex flex-col md:flex-row gap-4">
          {" "}
          <div className="flex-1">
            {" "}
            <label className="block font-semibold text-[#0f3bbe] mb-1">
              Category
            </label>{" "}
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
              placeholder="e.g. Technology"
            />{" "}
          </div>{" "}
          <div className="flex-1">
            {" "}
            <label className="block font-semibold text-[#0f3bbe] mb-1">
              Tags (comma separated)
            </label>{" "}
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
              placeholder="e.g. nextjs, seo, webdev"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <label className="block font-semibold text-[#0f3bbe] mb-1">
              Mark as Latest
            </label>
            <input
              type="checkbox"
              name="latest"
              checked={formData.latest}
              onChange={(e) =>
                setFormData({ ...formData, latest: e.target.checked })
              }
              className="w-4 h-4"
            />
          </div>
        </div>{" "}
        {/* SEO */}{" "}
        <div className="border-t pt-4">
          {" "}
          <h3 className="text-lg font-semibold text-[#0f3bbe] mb-2">
            SEO Settings
          </h3>{" "}
          <div className="flex flex-col md:flex-row gap-4">
            {" "}
            <div className="flex-1">
              {" "}
              <label className="block font-semibold text-[#0f3bbe] mb-1">
                SEO Title
              </label>{" "}
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
                placeholder="Custom SEO title (optional)"
              />{" "}
            </div>{" "}
            <div className="flex-1">
              {" "}
              <label className="block font-semibold text-[#0f3bbe] mb-1">
                Focus Keywords
              </label>{" "}
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
                placeholder="keyword1, keyword2"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {" "}
            <div className="flex-1">
              {" "}
              <label className="block font-semibold text-[#0f3bbe] mb-1">
                SEO Description
              </label>{" "}
              <textarea
                name="seoDescription"
                value={formData.seoDescription}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f3bbe] outline-none"
                placeholder="Custom SEO description"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button
          type="submit"
          className="w-full bg-[#0f3bbe] text-white p-3 rounded-xl font-semibold hover:bg-[#1e4bb8] transition"
        >
          {" "}
          Save Blog Post{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
