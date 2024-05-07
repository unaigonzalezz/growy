'use client'

import { React, useState } from 'react'
import inspirationalPhrases from './phrases'
import consejos from './tips'

export default function Motivational() {

    const [startTime, setStartTime] = useState(
        typeof window !== "undefined" ? localStorage.getItem("startTime") || 0 : 0
    );

    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysElapsed = Math.floor((currentDate - new Date(startTime)) / millisecondsPerDay);
    const phraseIndex = daysElapsed % inspirationalPhrases.length;
    const currentPhrase = inspirationalPhrases[phraseIndex];
    const currentConsejo = consejos[phraseIndex];

    return (
      <section className="mb-11 relative isolate overflow-hidden px-6 lg:px-8 ">
        <div className="flex justify-between gap-4">
          <div className="w-1/2 p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
              <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    <p>Frase del día: </p>
                </dt>
                  <dd className="text-xl font-light md:text-3xl dark:text-white">
                      {currentPhrase}
                  </dd>
                  <dd className="flex float-right items-center space-x-1 text-sm font-medium text-blue-500">
                      <span className='-mt-6'>Frase {daysElapsed} de 31</span>
                  </dd>
              </dl>
          </div>
          <div className="w-1/2 p-6 bg-white shadow rounded-2xl dark:bg-gray-800">
              <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    <p>Consejo del día: </p>
                </dt>
                  <dd className="text-xl font-light md:text-3xl dark:text-white">
                      {currentConsejo}
                  </dd>
                  <dd className="flex float-right items-center space-x-1 text-sm font-medium text-blue-500">
                      <span className='-mt-6'>Consejo {daysElapsed} de 31</span>
                  </dd>
              </dl>
          </div>
        </div>
      </section>
    )
}
