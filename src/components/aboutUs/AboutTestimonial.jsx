// components/aboutUs/AboutTestimonial.jsx
import React, { useState, useEffect } from "react";

export default function AboutTestimonial() {
  const testimonials = [
    {
      image: "/ryan.jpg",
      quote: "Two weeks in, one long coffee, and it just felt easy.",
      name: "Ryan, 27",
    },
    {
      image: "/sarah.jpg",
      quote:
        "Zlovr changed everything—found someone who truly gets me, no games, just real talk.",
      name: "Sarah, 29",
    },
    {
      image: "/alex.jpg",
      quote:
        "From shared values to our first date, it all clicked perfectly. Grateful for this space.",
      name: "Alex, 31",
    },
    {
      image: "/jessica.jpg",
      quote:
        "Safety and depth in every match. It's refreshing to connect without the noise.",
      name: "Jessica, 26",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="flex items-center justify-center">
          <div className="w-20 h-[1px] bg-red-300"></div>
          <svg
            className="w-7 h-7 mx-2 text-red-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div className="w-20 h-[1px] bg-red-300"></div>
        </div>
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-0">
          <span className="text-black">It Started</span>{" "}
          <span className="text-[#e84b64] font-bold">Here</span>
        </h2>

        {/* Testimonials Carousel */}
        <div
          className="relative mt-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Outside the card, reduced distance */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative bg-[#fff3ea] rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto border border-[#e84b64]/10 overflow-hidden">
            {/* Diagonal Line Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fd734f]/20 to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-4 pt-4 pb-8">
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg border-4 border-white"
              />

              {/* Quote */}
              <p className="text-gray-600 text-base sm:text-lg md:text-xl italic leading-relaxed max-w-md text-center">
                {testimonial.quote}
              </p>

              {/* Name */}
              <div className="text-xl sm:text-2xl font-semibold text-black">
                {testimonial.name}
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#e84b64] scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
