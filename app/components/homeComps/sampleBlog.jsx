import React, { useState } from "react";
import { cardData } from "./BlogCard";  // adjust this path

export default function BlogFilter() {
  // 1. Get unique filter labels
  const filterOptions = [...new Set(cardData.map((card) => card.filterby))];

  // 2. State to store selected filters
const [selectedFilters, setSelectedFilters] = useState([]);


  // 3. Toggle checkbox selection
const handleCheckboxChange = (filter) => {
    setSelectedFilters((prev) =>
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

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* ✅ Filters */}
      <div className="w-full md:w-1/4 space-y-2">
        <h2 className="text-lg font-semibold">Filter by:</h2>
        {filterOptions.map((filter) => (
          <label key={filter} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => handleCheckboxChange(filter)}
            />
            {filter}
          </label>
        ))}
      </div>

      {/* ✅ Filtered Posts */}
      <div className="w-full md:w-3/4 grid gap-4">
        {filteredPosts.map((post, index) => (
          <div key={index} className="p-4 border rounded">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.text}</p>
            <p className="text-sm text-gray-500">{post.category}</p>
            <p className="text-sm">{post.filterby}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// user name : chuzair600
// mongo pass : cSgj7dRAW0j2F3HK
