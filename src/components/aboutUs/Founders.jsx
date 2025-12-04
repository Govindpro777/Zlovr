// src/components/aboutUs/Founders.jsx
import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6"; // Fa6 includes FaXTwitter

function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-7 mt-5 text-[23px]">
      {/* X (Twitter) */}
      <a
        href="#"
        className="text-black hover:text-[#e84b64] transition-colors duration-300"
        aria-label="Twitter"
      >
        <FaXTwitter />
      </a>

      {/* Instagram */}
      <a
        href="#"
        className="text-black hover:text-[#e84b64] transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href="#"
        className="text-black hover:text-[#e84b64] transition-colors duration-300"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}

function FounderCard({ image, name, title, color, desc }) {
  return (
    <div
      className={`flex flex-col items-center shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-md transition-all hover:scale-105`}
      style={{ background: color }}
    >
      <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-2xl mb-6 flex justify-center items-center bg-gray-200">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-black text-center mb-2">
        {name}
      </h3>
      <p className="text-[#e84b64] font-bold text-lg sm:text-xl text-center mb-4">
        {title}
      </p>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-md mb-4">
        {desc}
      </p>
      <SocialIcons />
    </div>
  );
}

export default function Founders() {
  return (
    <section className="w-full py-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-10 mx-auto max-w-4xl">
        Meet the <span className="text-[#e84b64] font-bold">Founders</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 justify-center items-center px-4">
        <FounderCard
          image="/founder1.png"
          name="Vaibhav Maheshwari"
          title="Founder and CEO"
          color="#fde7eb"
          desc="Your time and attention are precious. We protect both with strong guidelines, fast moderation, and privacy controls you can trust."
        />
        <FounderCard
          image="/founder2.png"
          name="Mayank Maheshwari"
          title="Co-Founder"
          color="#faebe3"
          desc="Your time and attention are precious. We protect both with strong guidelines, fast moderation, and privacy controls you can trust."
        />
      </div>
    </section>
  );
}
