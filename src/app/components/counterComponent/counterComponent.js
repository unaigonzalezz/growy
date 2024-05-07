"use client";

import { React, useState, useEffect } from "react";
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
    typeof window !== "undefined" ? localStorage.getItem("startTime") || 0 : 0
  );
  const [currentTime, setCurrentTime] = useState(new Date());
  const [counterStarted, setCounterStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  var timesRestarted = 0;

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
    const elapsedTime = Math.floor((currentTime - new Date(startTime)) / 1000);
    const timesRestarted = localStorage.getItem("timesRestarted") || 0;
    localStorage.setItem("timesRestarted", parseInt(timesRestarted) + 1);
    const totalElapsedTime = localStorage.getItem("totalElapsedTime") || 0;
    localStorage.setItem("totalElapsedTime", parseInt(totalElapsedTime) + elapsedTime);
    const minutesElapsed = Math.floor(elapsedTime / 60);
    setStartTime(null);
    localStorage.removeItem("startTime");
    setCounterStarted(false);
    window.location.reload();
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
      {startTime !== 0 && startTime &&  (
        <div className="barraPrCont dark:bg-gray-800">
          <div className="barraPr animate-linear mb-20 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto]" style={{ width: getProgressBarWidth() }}></div>
        </div>
      )}
      <div className="text-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <p className="textAnim text-white -mt-6"></p>
        {startTime !== 0 && startTime && (
          <p className="textAnim text-white">¡Enhorabuena! Llevas sin morderte las uñas</p>
        )}
        <p className="textCounter text-center animate-linear mb-20 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto] bg-black bg-clip-text text-8xl font-bold text-white mt-16">
          {getTime()}
        </p>
        <div className="flex items-center justify-center counterContainer forestBg">
        </div>
        <p className="text-white text-center">¡Recuerda que debes reiniciar el contador cada vez que te muerdas las uñas!</p>
        <div className="flex items-center justify-center">
        {!startTime &&  (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
            onClick={handleStart}
          >
            <FontAwesomeIcon icon={faCirclePlay} /> Empezar</button>
        )}
        {startTime !== 0 && startTime && (
          <>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faArrowRotateRight} /> Resetear
          </button>
          <br/>
          </>
        )}

        </div>
        
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ¿Estás seguro que quieres reiniciar el contador?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Recuerda que si reinicias el contador perderás todo el progreso que has hecho hasta ahora.<br/>
                    No importa caer en el camino, lo importante es levantarse... <br/><br/>¡Animo!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleReset()}
                  >
                    Reiniciar contador
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  );
}
