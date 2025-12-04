import React from "react";

export default function Fifth() {
  return (
    <section className="relative w-full bg-[#FFEBEB] py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="text-[#e84b64] font-bold">Love,</span>{" "}
              <span className="text-black">Told by</span>
              <br />
              <span className="text-black">the People</span>
              <br />
              <span className="text-black">Who</span>{" "}
              <span className="text-[#e84b64] font-bold">Found It</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Real stories from people who found genuine connection on Zlovr.
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white text-lg font-bold rounded-full px-6 py-3 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Explore Real Stories
              </button>
            </div>
          </div>

          {/* Right Side - Image with Floating Icons */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Calendar Icon - Top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 lg:-top-6 lg:left-1/3">
                <svg
                  className="w-10 h-10 text-[#e84b64]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Main couple image - rounded corners */}
              <div className="relative rounded-md overflow-hidden shadow-2xl">
                <img
                  src="fifth.jpg"
                  alt="Happy couple lying on grass outdoors"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Heart Icon - Bottom Right */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 animate-pulse">
                <svg
                  className="w-14 h-14 text-[#e84b64]"
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
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-40"></div>
    </section>
  );
}
