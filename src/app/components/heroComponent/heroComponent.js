"use client";

import React from "react";
import "./heroComponent.css";

export default function HeroComponent() {
  return (
    <div>
      <nav className="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed" id="topnav">
      <div className="mx-auto max-w-7xl  lg:px-8 ">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:hidden px-4">
              <a href="/" className="flex items-center">
                <img className='h-9' src='/assets/logo.png' />
              </a>
            </div>
            <div
              className="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 "
              id="navbar"
            >
              <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
              <a
                href="/"
                className="hidden lg:flex items-center"
              >
                <img className='h-9' src='/assets/logo.png' />
              </a>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                <a href="/dashboard"><button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                  Dashboard
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-8  lg:pt-32 bg-[url('https://i.ibb.co/8js1pcr/1691055810.png')] bg-center dark:bg-gray-900 bg-cover ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3" >
              ¡Aprende sobre la onicofagia!
            </span>
            <a
              href="/about"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <h1 className="max-w-2xl mx-auto text-balance font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            <br />
            <img src='/assets/logo.png' />
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            La onicofagia es como tener una fiesta de picoteo, pero con tus
            propias uñas como aperitivos.
          </p>
          <a
            href="/dashboard"
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
          >
            ¡Quiero crecer!
            <svg
              className="ml-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="flex justify-center">
            <img className="rounded-lg"
              src="/assets/pc.png"
              alt="Dashboard image"
            />
          </div>
        </div>
        <br/>
        <br/>
      </section>
    </div>
  )
}
