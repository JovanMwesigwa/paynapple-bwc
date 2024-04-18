"use client";

import React from "react";

// Define StoryProps type for the stories
interface StoryProps {
  image: string;
  title: string;
}

// Define a constant with some dummy story data
const dummyStories: StoryProps[] = [
  { image: "https://via.placeholder.com/150", title: "Story 1" },
  { image: "https://via.placeholder.com/150", title: "Story 2" },https://via.placeholder.com/150
  { image: "https://via.placeholder.com/150", title: "Story 3" },
  { image: "https://via.placeholder.com/150", title: "Story 4" },
];

const Swiper: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex overflow-hidden max-w-full">
        <div className="flex space-x-2" ref={scrollContainerRef}>
          {dummyStories.map((story, index) => (
            <div
              key={index}
              className="min-w-[120px] h-[200px] bg-gray-200 rounded-lg flex-shrink-0"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mt-2">
        <button
          onClick={scrollLeft}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Left
        </button>
        <button
          onClick={scrollRight}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Swiper;
