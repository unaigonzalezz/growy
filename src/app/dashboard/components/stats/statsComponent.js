"use client";

import { React, useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faRuler } from "@fortawesome/free-solid-svg-icons";

export default function StatsComponent() {

  const [timesRestarted, setTimesRestarted] = useState(
    typeof window !== "undefined" ? localStorage.getItem("timesRestarted") || 0 : 0
  );

  const [elapsedTime, setElapsedTime] = useState(
    typeof window !== "undefined" ? localStorage.getItem("totalElapsedTime") || 0 : 0
  );
    
  const calcularVeces = () => {

    const [startTime, setStartTime] = useState(
      typeof window !== "undefined" ? localStorage.getItem("startTime") || 0 : 0
    );

    const startDate = new Date(startTime);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - startDate);
    const hoursPassed = timeDiff / (1000 * 60 * 60); // Convertimos el tiempo transcurrido a horas
    const intervals = hoursPassed / 1.5; // Calculamos el número de intervalos de 1.5 horas
    const nailBitingFrequencyPerInterval = 1; // Número de veces que nos mordemos las uñas por intervalo
    const veces = Math.floor(intervals * nailBitingFrequencyPerInterval); // Redondeamos hacia abajo para obtener el número entero de veces
    return veces;
  };

  const calcularCrecimiento = () => {

    const [startTime, setStartTime] = useState(
      typeof window !== "undefined" ? localStorage.getItem("startTime") || 0 : 0
    );
    const startDate = new Date(startTime);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - startDate);
    const daysPassed = timeDiff / (1000 * 60 * 60 * 24); // Convertimos el tiempo transcurrido a días
    const increment = 0.1; // Incremento diario
    const suma = (daysPassed * increment).toFixed(1); // Redondeamos la suma a 2 decimales
    return suma;
  };

  return (
    <div>
      <div className="animate__animated animate__fadeIn flex justify-center items-center">
        <section className="grid gap-6 md:grid-cols-4 p-4 md:p-8 mx-auto w-full ">
          <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <FontAwesomeIcon icon={faHashtag} /> Nº de veces que has evitado
                morderte las uñas:
              </dt>

              <dd className="text-5xl font-light md:text-6xl dark:text-white">
                {calcularVeces()}
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-pink-500">
                <span>Nos mordemos las uñas de media 14 veces por día.</span>
              </dd>
            </dl>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <FontAwesomeIcon icon={faRuler} /> Tus uñas han crecido:
              </dt>

              <dd className="text-5xl font-light md:text-6xl dark:text-white">
                {calcularCrecimiento()} MM
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-pink-500">
                <span>Las uñas crecen de media 0.1 MM por día.</span>
              </dd>
            </dl>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Has reiniciado el contador
              </dt>

              <dd className="text-5xl font-light md:text-6xl dark:text-white">
                {timesRestarted} veces
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-pink-500">
                <span>¡A por todas!</span>
              </dd>
            </dl>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Entre todos los intentos llevas
              </dt>

              <dd className="text-5xl font-light md:text-6xl dark:text-white">
                {elapsedTime} h
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-pink-500">
                <span>¡Ya casi lo tienes!</span>
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
