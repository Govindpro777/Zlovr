import React from "react";

export default function Third() {
  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Chat Interface Mockup */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 mt-8 sm:mt-12 md:mt-0">
            {/* Main container with shadow instead of border */}
            <img
              src="home_3.jpg"
              alt="Happy couple lying on grass outdoors"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              <span className="text-[#DB1841] font-bold">Your</span>{" "}
              <span className="text-black">next story</span>
              <br />
              <span className="text-black">starts</span>{" "}
              <span className="text-[#DB1841] font-bold">here</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Starting something new can feel uncertain, but every beautiful
              story begins with courage. Here, you'll find people looking for
              more than just a match—they're looking for meaning. And your next
              story is waiting for you to begin it
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="bg-[linear-gradient(90deg,#DB1841_0%,#F0A756_155.51%)] cursor-pointer text-white text-lg font-bold rounded-full px-6 py-3 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
