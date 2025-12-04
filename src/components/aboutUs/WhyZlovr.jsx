// src/components/aboutUs/WhyZlovrDifferent.jsx
import React from "react";

export default function WhyZlovrDifferent() {
  return (
    <section className="w-full bg-white max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start md:items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
            <span className="text-black">Why</span>{" "}
            <span className="text-[#e84b64] font-bold">Zlovr</span> Feels
            <br className="hidden sm:block" />
            <span className="text-black">Different</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            We built Zlovr to move beyond the usual swipe-and-forget.
            <br className="hidden sm:block" />
            Every detail is designed to bring honesty, depth, and intention back
            into modern dating—so real people can find real connection.
          </p>
        </div>

        {/* Right Side */}
     {/* Right Side */}
<div className="flex flex-col gap-10 sm:gap-12 md:gap-16 mt-10 md:mt-0 
                items-center md:items-start text-left pl-0 sm:pl-20">
  <FeatureCheck text="Shared values first" />
  <FeatureCheck text="Safety you can feel" />
  <FeatureCheck text="Authentic by design" />
  <FeatureCheck text="From chat to real" />
</div>

      </div>
    </section>
  );
}

function FeatureCheck({ text }) {
  return (
    <div className="flex items-center justify-start sm:justify-start">
      <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#e84b64] mr-4 sm:mr-5 items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 20 20" className="h-4 w-4 sm:h-5 sm:w-5 text-white">
          <path
            d="M7.629 13.057l-3.619-3.615a1 1 0 111.414-1.414l2.207 2.207 5.207-5.207a1 1 0 111.414 1.414l-6.207 6.207z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
        {text}
      </span>
    </div>
  );
}
