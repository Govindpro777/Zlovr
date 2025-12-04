import React from "react";

const categories = [
  "Getting Started",
  "Your Profile & Verification",
  "Matches & Chatting",
  "Account & Privacy",
  "Payments & Subscriptions",
  "Safety & Reporting",
  "Troubleshooting & Bugs",
  "Zlovr Policies",
];

const Support = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Hi there, how can we help<br className="hidden md:block" /> you today?
        </h1>

        {/* Search input */}
        <div className="w-full mt-8 mb-10">
          <div className="w-full max-w-md mx-auto flex items-center bg-white border border-gray-200 rounded-full shadow-sm px-4 py-2">
            <span className="text-gray-400 mr-2 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category buttons */}
        <div className="font-bold w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((item) => (
            <button
              key={item}
              className="w-full bg-[#F0A756] text-black font-medium text-sm rounded-md py-2.5 px-4 shadow-sm  transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-gray-900">
            Still Need <span className="text-[#DB1841] font-semibold">Help</span>?
          </p>
          <button className="mt-6 inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#DB1841] text-[#DB1841] text-sm font-medium bg-white hover:bg-rose-50 transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
