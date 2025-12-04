import React from "react";

export default function Sixth() {
  return (
    <section className="relative w-full  bg-gradient-to-br from-gray-50 via-white to-pink-50 py-16 px-4 overflow-hidden flex items-center justify-center space-y-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E84B64"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,86.1C-23.8,84.6,-39.4,78.6,-52.8,69.8C-66.2,61,-77.4,49.4,-83.8,35.2C-90.2,21,-91.8,4.2,-88.7,-11.4C-85.6,-26.9,-77.8,-41.2,-66.8,-52.8C-55.8,-64.4,-41.6,-73.3,-26.4,-79.8C-11.2,-86.3,4.9,-90.4,20.6,-88.2C36.3,-86,51.6,-77.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-64 h-64  opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E84B64"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,86.1C-23.8,84.6,-39.4,78.6,-52.8,69.8C-66.2,61,-77.4,49.4,-83.8,35.2C-90.2,21,-91.8,4.2,-88.7,-11.4C-85.6,-26.9,-77.8,-41.2,-66.8,-52.8C-55.8,-64.4,-41.6,-73.3,-26.4,-79.8C-11.2,-86.3,4.9,-90.4,20.6,-88.2C36.3,-86,51.6,-77.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-black">Your</span>{" "}
            <span className="text-[#e84b64] font-bold">Connection</span>{" "}
            <span className="text-black">Awaits</span>
          </h2>

          {/* Main Image Container */}
          <div className="relative w-full max-w-lg">
            <div className="rounded-md overflow-hidden shadow-2xl">
              <img
                src="sixth.jpg"
                alt="Couple looking at each other with genuine connection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl px-4">
            Thousands are meeting people who truly understand them on Zlovr.
            Share moments, spark meaningful conversations, and discover
            relationships that go beyond the surface.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
        <button className="bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white text-lg font-bold rounded-full px-6 py-3 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Discover Matches
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      {/* <div className="absolute top-1/4 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-24 w-20 h-20 bg-pink-300 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div> */}
    </section>
  );
}
