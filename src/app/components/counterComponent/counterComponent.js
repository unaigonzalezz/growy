"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faCirclePlay,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import "./counterComponent.css";
import "animate.css";

export default function CounterComponent() {
  const [startTime, setStartTime] = useState(
    localStorage.getItem("startTime") || null
  );
  const [currentTime, setCurrentTime] = useState(new Date());
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleStart = () => {
    const startTime = new Date();
    setStartTime(startTime);
    localStorage.setItem("startTime", startTime);
    setCounterStarted(true);
    window.location.reload();
  };

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the counter?"
    );
    if (confirmReset) {
      setStartTime(null);
      localStorage.removeItem("startTime");
      setCounterStarted(false);
      window.location.reload();
    }
  };

  const getProgressBarWidth = () => {
    if (startTime) {
      const startDate = new Date(startTime);
      const endDate = new Date(startTime);
      endDate.setMonth(endDate.getMonth() + 1);
      const totalTime = endDate - startDate;
      const elapsedTime = currentTime - startDate;
      const progress = (elapsedTime / totalTime) * 100;
      return `${progress}%`;
    }
    return "0%";
  };

  const getTime = () => {
    if (startTime) {
      const difference = Math.floor((currentTime - new Date(startTime)) / 1000);
      const hours = Math.floor(difference / 3600) % 24;
      const days = Math.floor(difference / (3600 * 24));
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = difference % 60;
      return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return "¡Empieza ya!";
  };

  return (
    <>
      <div className="barraPrCont">
        <div className="barraPr animate-linear mb-20 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto]" style={{ width: getProgressBarWidth() }}></div>
      </div>
      <div class="text-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <p className="textAnim">¡Enhorabuena! Llevas sin morderte las uñas</p>
        <div className="flex items-center justify-center counterContainer ">
          <p className="animate-linear mb-20 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto] bg-clip-text text-8xl font-bold text-transparent mt-16">
            {getTime()}
          </p>
        </div>
        <div className="flex items-center justify-center">
          {counterStarted ? null : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
              onClick={handleStart}
            >
              <FontAwesomeIcon icon={faCirclePlay} /> Empezar
            </button>
          )}
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faArrowRotateRight} /> Resetear
          </button>
        </div>
        
      </div>

    </>
  );
}
