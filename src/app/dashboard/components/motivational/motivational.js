'use client'

import React from 'react'
import inspirationalPhrases from './phrases'

export default function Motivational() {
    const startTime = localStorage.getItem('startTime');
    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysElapsed = Math.floor((currentDate - new Date(startTime)) / millisecondsPerDay);
    const phraseIndex = daysElapsed % inspirationalPhrases.length;
    const currentPhrase = inspirationalPhrases[phraseIndex];

    return (
      <section className="relative isolate overflow-hidden px-6 lg:px-8">
        <div className="flex justify-between gap-4">
          <div className="w-1/2 p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
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
          <div className="w-1/2 p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
              <dl className="space-y-2">

                  <dd className="text-xl font-light md:text-3xl dark:text-white">
                      {currentPhrase}
                  </dd>
                  <dd className="flex float-right items-center space-x-1 text-sm font-medium text-blue-500">
                      <span className='-mt-6'>Frase {daysElapsed} de 31</span>
                  </dd>
              </dl>
          </div>
        </div>
      </section>
    )
}
