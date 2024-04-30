
import CounterComponent from "../components/counterComponent/counterComponent";
import React from 'react'
import NavBar from "../components/navBarComponent/navBarComponent";
import StatsComponent from "./components/stats/statsComponent";
import Motivational from "./components/motivational/motivational";
import './dashboard.css' 

export default function Dashboard() {
    return (
      <div>
        <NavBar></NavBar>
        <CounterComponent></CounterComponent>
        <StatsComponent></StatsComponent>
        <Motivational></Motivational>

      </div>
    )
  }
  