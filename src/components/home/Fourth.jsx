import React from "react";

export default function Fourth() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-white via-pink-50 to-white  px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-40"></div>

      {/* Decorative curves */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E84B64"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,86.1C-23.8,84.6,-39.4,78.6,-52.8,69.8C-66.2,61,-77.4,49.4,-83.8,35.2C-90.2,21,-91.8,4.2,-88.7,-11.4C-85.6,-26.9,-77.8,-41.2,-66.8,-52.8C-55.8,-64.4,-41.6,-73.3,-26.4,-79.8C-11.2,-86.3,4.9,-90.4,20.6,-88.2C36.3,-86,51.6,-77.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="text-black">From Chat to</span>{" "}
              <span className="text-[#e84b64] font-bold">Real Connection</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Meet like-minded people offline and turn meaningful conversations
              into real-life moments.
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white text-lg font-bold rounded-full px-6 py-3 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Connect
              </button>
            </div>
          </div>

          {/* Right Side - Couple Image with Background */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background shape */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%] bg-gradient-to-br from-orange-200 via-pink-200 to-orange-100 rounded-[3rem] -rotate-3 shadow-2xl"></div>

              {/* Main couple image */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="fourth.png"
                  alt="Happy couple embracing"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating heart decorations */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-bounce z-20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.364 6.364a2 2 0 01-2.828 0l-6.364-6.364a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="absolute bottom-12 -left-6 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg z-20">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.364 6.364a2 2 0 01-2.828 0l-6.364-6.364a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Small decorative circles */}
              <div className="absolute top-20 -left-8 w-6 h-6 bg-pink-300 rounded-full opacity-70"></div>
              <div className="absolute bottom-32 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFC0CB"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
