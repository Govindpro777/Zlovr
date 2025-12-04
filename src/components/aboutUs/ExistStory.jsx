// src/components/aboutUs/ExistStory.jsx
import React from "react";

export default function ExistStory() {
  return (
    <section className="w-full bg-white py-20">
      {/* Why we Exist Section */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
          Why we <span className="text-[#e84b64] font-bold">Exist</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mt-5">
          Dating today often feels like noise—too fast, too surface, too
          impersonal. Zlovr began with a simple belief: relationships deserve
          the same care and intention as the people in them. Our goal is to slow
          things down, to make space for meaningful conversations, and to help
          people meet through values, not vanity.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto mt-16 rounded-3xl bg-[#fff3ea] flex flex-col lg:flex-row items-center p-8 sm:p-10 shadow-xl gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full pr-0 lg:pr-10 mb-6 lg:mb-0">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 text-black">
            <span className="text-black">Our</span>{" "}
            <span className="text-[#e84b64] font-bold">Story</span>
          </h3>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mt-3 max-w-xl">
            <span className="text-[#e84b64]">Zlovr</span> was born from a simple
            idea, love shouldn’t feel like a guessing game. We saw how
            technology could bring people together, but only if used with
            intention. So we built a platform that helps people meet, talk, and
            connect in ways that feel natural, safe, and genuine.
          </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img
            src="/ourStory.jpg"
            alt="Couple with rose"
            className="rounded-2xl object-cover max-w-full"
          />
        </div>
      </div>
      {/* Decorative divider */}
      <div className="flex items-center justify-center mt-24">
        <div className="w-20 h-[1px] bg-red-300"></div>
        <svg
          className="w-7 h-7 mx-2 text-red-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <div className="w-20 h-[1px] bg-red-300"></div>
      </div>
    </section>
  );
}