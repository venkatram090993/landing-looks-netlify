import React, { useEffect } from "react"

import { Link } from "gatsby"

import CookiePolicy from "../components/Policy/CookiePolicy"

import PrivacyPolicy from "../components/Policy/PrivacyPolicy"

import IntellectualPropertyPolicy from "../components/Policy/IntellectualPropertyPolicy"

import TandC from "../components/Policy/TermsAndCondition"

import homeIconImg from "../images/home.svg"

const Policy = () => {

  return (
    <div>
        
      <div class="flex flex-row justify-between bg-transparent">
        <Link to="/">
          {" "}
          <p class="lg:text-6xl md:text-6xl sm: text-5xl sm: ml-6 lg:ml-12 lg:mt-6 md:ml-12 md:mt-6 text-black"> Swank </p>{" "}
        </Link>
        <Link to="/">
          {" "}
          <img
            src={homeIconImg}
            class="lg:w-16 md:w-16 sm: w-12 lg:mr-16 lg:mt-12 md:mr-16 md:mt-12 sm: mt-4 sm: mr-4 text-black"
          />{" "}
        </Link>
      </div>

      <div class="bg-black h-1 w-11/12 m-auto"></div>

      <div class="flex lg:flex-row md:flex-row sm: flex-col overflow-y-hidden px-2 lg:-mt-8 md:h-screen">
        <div class="lg:w-3/12 md:4/12 lg:h-screen " >
          <ul class="leading-loose lg:mt-12 lg:w-full md:w-full  md:mt-6 lg:pl-12 md:pl-12 sm: pl-0 sm: w-4/6 sm: m-auto sm: mt-10">
            <a href="#cookie_policy">
              <li class=" lg:text-left md:text-left sm: text-center lg:h-20 md:h-28 md:pb-4  align-middle flex flex-col justify-center text-xl border-b-2 border-blue-600 cursor-pointer">
                Cookies Policy
              </li>
            </a>
            <a href="#intellectual_property_policy">
              <li class="lg:text-left md:text-left sm: text-center lg:h-20 md:h-32  align-middle flex flex-col justify-center text-xl border-b-2 border-blue-600 cursor-pointer">
                Intellectual Property Policy
              </li>
            </a>
            <a href="#privacy_policy">
              <li class="lg:text-left md:text-left sm: text-center lg:h-20 md:h-24   align-middle flex flex-col justify-center text-xl border-b-2 border-blue-600 cursor-pointer">
                Privacy Policy
              </li>
            </a>
            <a href="#t_and_c">
              <li class=" lg:text-left md:text-left sm: text-center lg:h-20 md:h-24   align-middle flex flex-col justify-center text-xl border-b-2 border-blue-600 cursor-pointer">
                Terms and Conditions{" "}
              </li>
            </a>
          </ul>
        </div>
        <div class="lg:w-10/12 lg:h-screen overflow-y-auto lg:mt-10 md:mt-1">
          <CookiePolicy />
          <IntellectualPropertyPolicy />
          <PrivacyPolicy />
          <TandC />
        </div>
      </div>
    </div>
  )
}

export default Policy
