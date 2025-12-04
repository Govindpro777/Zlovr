// src/components/aboutUs/SafetyPledge.jsx
import React from "react";

function ShieldHeartIcon() {
  return (
    <span className="inline-flex w-16 h-16 sm:w-20 sm:h-20 items-center justify-center rounded-full bg-[#e84b64] mb-6 shadow-xl">
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l7 4v5c0 5-3.5 9.2-7 10-3.5-0.8-7-5-7-10V7l7-4z" stroke="#fff" strokeWidth="2" />
        <path d="M9.7 11a2.33 2.33 0 013.5 0l.1.12a.81.81 0 001.4.4.95.95 0 00.2-1.09A4.13 4.13 0 0012 9.1a4.13 4.13 0 00-2.9 1.33.95.95 0 00.2 1.09.81.81 0 001.4-.4l.1-.12z" fill="#fff"/>
      </svg>
    </span>
  );
}

export default function SafetyPledge() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto bg-[#f5f5f5] rounded-3xl shadow-xl w-full px-8 sm:px-12 py-12 flex flex-col items-center text-center">
        <ShieldHeartIcon />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4">
          <span className="text-black">Safety</span>{" "}
          <span className="text-[#e84b64] font-bold">and</span>{" "}
          <span className="text-black">Integrity</span>
          <br />
          <span className="text-[#e84b64] font-bold">Pledge</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
          Your time and attention are precious. We protect both with strong guidelines, fast moderation, and privacy controls you can trust.
        </p>
        <div className="text-sm sm:text-base font-medium text-gray-500 space-x-1">
          <a
            href="#"
            className="underline hover:text-[#e84b64] transition-colors"
          >
            Terms & Conditions
          </a>
          {" | "}
          <a
            href="#"
            className="underline hover:text-[#e84b64] transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}