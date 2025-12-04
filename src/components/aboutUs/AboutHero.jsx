// components/aboutUs/AboutHero.jsx
import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-4 pt-0 sm:pt-20">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 uppercase tracking-wide mb-4">
          ABOUT US
        </h1>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 md:mb-6">
          <span className="text-black">Building</span>{" "}
          <span className="text-[#e84b64] font-bold">More Than</span>{" "}
          <span className="text-black">Just</span>
          <br />
          <span className="text-black">Matches</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
          Creating a space where real connections happen, every interaction
          matters.
        </p>

        {/* Image */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/aboutHero.jpg"
              alt="Couple smiling at a cafe"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}