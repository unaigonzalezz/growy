
import CounterComponent from "../components/counterComponent/counterComponent";
import React from "react";
import NavBar from "../components/navBarComponent/navBarComponent";
import StatsComponent from "./components/stats/statsComponent";
import Motivational from "./components/motivational/motivational";
import Footer from "../components/footer/footer";
import "./dashboard.css";

export const metadata  = {
  title: 'Growy',
}

export default function Dashboard() {
  return (
    <>
      <div className="dark:bg-gray-900 text-white w-full h-full">
        <NavBar></NavBar>
        <CounterComponent text='Unasito'></CounterComponent>
        <StatsComponent></StatsComponent>
        <Motivational></Motivational>
        <Footer></Footer>
      </div>
    </>
  );
}
