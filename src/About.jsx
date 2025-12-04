// src/About.jsx (new - simple page with AboutHero)
import React from "react";
import AboutHero from "./components/aboutUs/AboutHero";
import ExistStory from "./components/aboutUs/ExistStory";
import MissionVision from "./components/aboutUs/MissionVision";
import WhyZlovr from "./components/aboutUs/WhyZlovr";
import SafetyPledge from "./components/aboutUs/SafetyPledge";
import Founders from "./components/aboutUs/Founders";
import AboutTestimonial from "./components/aboutUs/AboutTestimonial";
import FAQSection from "./components/aboutUs/FAQSection";

export default function About() {
  return (
    <>
      <AboutHero />
      <ExistStory />
      <MissionVision />
      <WhyZlovr />
      <SafetyPledge />
      <Founders />
      <AboutTestimonial />
      <FAQSection />
    </>
  );
}
