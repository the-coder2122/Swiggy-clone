import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ExploreSection() {
  const cuisines = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
  ];

  const explore = [
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me",
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-4 mb-20">
      <h2 className="text-xl font-semibold mb-3">Best Cuisines Near Me</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {cuisines.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center text-orange-500 font-bold cursor-pointer mb-14">
        Show More <FaChevronDown className="ml-2" />
      </div>

      <h2 className="text-xl font-semibold mb-3">Explore Every Restaurants Near Me</h2>
      <div className="flex flex-wrap gap-3">
        {explore.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
