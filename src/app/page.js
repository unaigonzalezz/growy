'use client'

import HeroComponent from "./components/heroComponent/heroComponent";
import AboutUsComponent from "./components/aboutUsComponent/aboutUsComponent";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <HeroComponent />
    <AboutUsComponent />
    <Timeline/>
    <Footer />
    </>
  );
}
