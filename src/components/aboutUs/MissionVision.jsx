// src/components/aboutUs/MissionVision.jsx
import React from "react";

// Heroicons SVGs, you can swap for your preferred icon library

// Mission: Target/Bullseye Icon
const MissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="#fff" />
  </svg>
);

// Vision: Eye Icon
const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      stroke="#fff"
      strokeWidth="2"
      d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
    />
    <circle cx="12" cy="12" r="3" fill="#fff" />
  </svg>
);

export default function MissionVision() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 py-20 px-4 bg-white">
      {/* Mission Card */}
      <div className="flex-1 max-w-md bg-[#ffe3ea] rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col items-center transition-all hover:scale-105">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e84b64] flex items-center justify-center mb-6 shadow-lg">
          <MissionIcon />
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 text-center">
          <span className="text-black">Our</span>{" "}
          <span className="text-[#e84b64] font-bold">Mission</span>
        </h3>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
          At Zlovr, our mission is to make online dating feel human again
          through values-first matching and thoughtful safety. We aim to build a
          future where technology helps people feel understood and turns good
          conversations into real life.
        </p>
      </div>
      {/* Vision Card */}
      <div className="flex-1 max-w-md bg-[#ffd1b5] rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col items-center transition-all hover:scale-105">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fd7c19] flex items-center justify-center mb-6 shadow-lg">
          <VisionIcon />
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 text-center">
          <span className="text-black">Our</span>{" "}
          <span className="text-[#e84b64] font-bold">Vision</span>
        </h3>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
         At Zlovr, our mission is to make online dating feel human again
          through values-first matching and thoughtful safety. We aim to build a
          future where technology helps people feel understood and turns good
          conversations into real life.
        </p>
      </div>
    </section>
  );
}