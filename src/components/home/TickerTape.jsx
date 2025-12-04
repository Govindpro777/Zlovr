import React, { useState } from "react";

const items = [
  "Find someone who gets you",
  "Match on what really matters",
  "Shared Values First",
  "Deeper Compatibility",
  "Authentic Connections",
  "Your next story starts here",
  "From Chat to Real Connection",
  "Love, Told by the People Who Found It",
  "Your Connection Awaits",
];

export default function TickerTape() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white py-3 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex whitespace-nowrap ${
          isHovered ? "paused" : "animate-marquee"
        }`}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-medium flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4 text-white flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.364 6.364a2 2 0 01-2.828 0l-6.364-6.364a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
