
import CounterComponent from "../components/counterComponent/counterComponent";
import React from 'react'
import NavBar from "../components/navBarComponent/navBarComponent";
import StatsComponent from "./components/stats/statsComponent";
import './dashboard.css' 

export default function Dashboard() {
    return (
      <div>
        <NavBar />
        <CounterComponent />
        <StatsComponent />
      </div>
    )
  }
  