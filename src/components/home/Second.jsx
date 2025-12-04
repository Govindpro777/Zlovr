import React from "react";

export default function Second() {
  return (
    <section className="w-full bg-white py-20 relative">
      <img src="/ellipse-left.svg" alt="" className="absolute" />
      <img src="/ellipse-right.svg" alt="" className="absolute bottom-0 right-0" />
      <div className="w-14 h-14 rounded-full bg-[#F9DCE4] absolute top-[63%]  left-[7.2%]"></div>
      <div className="w-14 h-14 rounded-full bg-[#FFE4C7] absolute top-[63%]  left-[36.7%]"></div>
      <div className="w-14 h-14 rounded-full bg-[#FFEEF2] absolute top-[63%]  left-[66%]"></div>

      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Match on what{" "}
            <span className="text-[#e84b64] font-bold">really matters</span>
          </h2>

          {/* Decorative heart divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-[1px] bg-red-300"></div>
            <img src="/heart.svg" alt="heart divider" className="w-6 h-6 object-contain" />
            <div className="w-24 h-[1px] bg-red-300"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Card 1 */}
          <div className="flex flex-col items-start text-left">
            {/* Images */}
            <div className="flex space-x-3 mb-6">
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_1.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_2.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 z-1">
              Shared
              <br />
              Values First
            </h3>

            {/* Description */}
            <p className="text-[#00000082] text-base md:text-xl max-w-xs">
              Connect beyond looks with people who believe in what you believe.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start text-left">
            {/* Images */}
            <div className="flex space-x-3 mb-6">
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_3.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_4.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 z-1">
              Deeper
              <br />
              Compatibility
            </h3>

            {/* Description */}
            <p className="text-[#00000082] text-base md:text-xl max-w-xs">
              Discover matches based on lifestyle, goals, and personality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start text-left">
            {/* Images */}
            <div className="flex space-x-3 mb-6">
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_5.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="second_6.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 z-1">
              Authentic
              <br />
              Connections
            </h3>

            {/* Description */}
            <p className="text-[#00000082] text-base md:text-xl max-w-xs">
              Real people, real profiles, built for meaningful connections.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
