import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[#FFF0DF] overflow-hidden">

      {/* FULL SCREEN BG IMAGE */}
      <img
        src="/hero-bg.png"
        alt="Hero background"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-10 lg:px-16 pt-16">
        <div className="flex flex-col md:flex-row items-start justify-between w-full mt-12">

          <div className="flex-1 flex flex-col items-start mt-12">
            <h1 className="text-[2.8rem] md:text-[3.6rem] lg:text-[5rem] font-medium text-[#161616] leading-tight mb-4">
              Find <span className="text-[#DB1841]">someone</span>
              <br />
              who gets <span className="text-[#DB1841]">you</span>
            </h1>

            <p className="mt-1 mb-8 text-base md:text-xl text-[#00000082] max-w-md">
              Real connections start with understanding. Discover people who share your vibe, values, and vision, because love feels effortless when you’re truly seen.
            </p>

            <button
              className="
                bg-[linear-gradient(90deg,#DB1841_0%,#F0A756_155.51%)]
                text-white rounded-full 
                px-7 py-3.5 font-bold 
                flex items-center justify-center gap-2 
                shadow-md text-base md:text-lg 
                hover:scale-[1.03] transition-transform 
                cursor-pointer
              "
            >
              <img src="/favorite.svg" alt="heart" className="w-4 h-4 object-contain" />
              <span>Find Yours</span>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-end justify-center md:justify-end pt-20">
            <img src="/main.png" alt="Hero" className="object-contain z-10 max-h-[600px]" />
          </div>

        </div>

      </section>
    </div>
  );
}
