import { capabilities } from "@/app/mock/Navbar/capabilities";
import Link from "next/link";
import { Fragment } from "react";

export default function Capabilities({ onClose }) {
  const categories = Object.values(capabilities[0]); // Extract Design, Development, eCommerce, SEO

  return (
    <Fragment>
      <div className="flex flex-row max-lg:flex-row flex-wrap max-lg:px-2 overflow-y-auto max-lg:max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="w-50 lg:border-r border-gray-800 mr-4 last:border-none max-lg:w-[calc(100%/2-1rem)] max-lg:pt-4 max-lg:mb-4"
          >
            <h4 className="font-semibold text-base max-lg:text-sm">
              {category.title}
            </h4>
            {category.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row mt-2 justify-between group max-lg:mt-1"
              >
                <div className="flex flex-row gap-2 items-center">
                  {item.icon}
                  <Link
                    href={`/services/${item.category}/${item.searchParam}?index=${item.id - 1}`}
                    className="block text-sm ml-2 py-1 border-b-1 border-transparent group-hover:border-blue-600 max-lg:text-xs"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
}
