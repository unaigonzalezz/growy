'use client'

import { React, useState, useEffect } from "react";
import NavBar from "../components/navBarComponent/navBarComponent";
import CounterComponent from "../components/counterComponent/counterComponent";
import StatsComponent from "./components/stats/statsComponent";
import Motivational from "./components/motivational/motivational";
import Faq from "./components/faq/faq";
import Footer from "../components/footer/footer";
import "./dashboard.css";


export default function Dashboard() {
  const [startTime, setStartTime] = useState(
    typeof window !== "undefined" ? localStorage.getItem("startTime") || 0 : 0
  );
  const [showModules, setShowModules] = useState(false);

  // Cuando startTime se actualiza, activa el renderizado de los módulos
  useEffect(() => {
    setShowModules(!!startTime);
  }, [startTime]);

  return (
    <>
      <div className="dark:bg-gray-900 text-white w-full h-full">
        <NavBar />
        <CounterComponent text='Unasito' />
        {showModules && <StatsComponent />}
        {showModules && <Motivational />}
        <Faq/>
        <Footer />
      </div>
    </>
  );
}