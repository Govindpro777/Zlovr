// Home.jsx (updated - removed Footer, as it's now in App)
import React from "react";
import Hero from "./components/home/Hero";
import TickerTape from "./components/home/TickerTape";
import Second from "./components/home/Second";
import Third from "./components/home/Third";
import Fourth from "./components/home/Fourth";
import Fifth from "./components/home/Fifth";
import Sixth from "./components/home/Sixth";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TickerTape /> */}
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </>
  );
}