import React, { useEffect } from "react"

import "../css/layout.css"

import AOS from "aos"
import "aos/dist/aos.css"

import gifImage from "../images/gifnew2.gif"
import dressImg from "../images/dress.svg"
import fashionImg from "../images/fashion.svg"
import styleTipImg from "../images/makeover.svg"

import beachImg from "../images/beach.svg"
import poolPartyImg from "../images/pool-party.svg"
import nightOutImg from "../images/martini.svg"

import vacationImg from "../images/vacation.svg"

import danceParty from "../images/girl.svg"

const SectionC = () => {
  let AOS

  useEffect(() => {
    const AOS = require("aos")
    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  return (
    <div class="lg:w-full sm: h-auto lg:py-1   sm: py-10 flex lg:flex-row sm: flex-col font-sans md:flex-col md:h-auto ">
      <div class="flex lg:flex-row align-middle lg:w-2/6 justify-center md:w-4/6  md:m-auto md:pt-20">
        <img src={gifImage} class="gifImage lg:-mt-8 lg:pb-10" alt="Demo try on haul app" />
      </div>

      <div class="flex flex-col lg:w-4/6 sm: h-auto lg:py-2 px-20 md:py-0 text-gray-600 md:w-full ">
        <h1 class="md:py-3 text-4xl font-bold text-center md:py-10 sm: py-10">
          A new way to vlog your fashion reviews
        </h1>

        <div class="flex flex-row justify-around">



          <div class="flex flex-col  justify-center lg:w-4/12 sm: w-full">
            <div
              class="flex flex-col py-10 lg:py-1 justify-center align-middle m-auto lg:bg-pink-100 md:bg-pink-100 sm: bg-pink-600 lg:text-gray-600 md:text-gray-600 sm: text-white w-full box"
              data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <img src={dressImg} class="w-20 py-3 m-auto" alt="Try on Haul feature" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Try Haul</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1 justify-center align-middle m-auto lg:bg-pink-200 md:bg-pink-200 sm: bg-purple-500 lg:text-gray-600 md:text-gray-600 sm: text-white w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="400"
              data-aos-duration="1000"
              
              >
              <img src={beachImg} alt="beach bikini and swimwear reviews" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Beach</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto lg:bg-pink-300 md:bg-pink-300 sm: bg-green-600 lg:text-gray-600 md:text-gray-600 sm: text-white w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="1000"
              
              >
              <img src={vacationImg} alt="try on haul reviews related to vacation and related occations dressing tips" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Vacation</h1>
            </div>
          </div>

          <div class="flex flex-col  justify-center w-4/12 lg:block sm: hidden">
            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-gray-100 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              data-aos-duration="1000"
              
              >
              <img src={fashionImg} alt="today's style tips" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Style Tips</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-gray-200 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="600"
              data-aos-duration="1000"
              
              
              >
              <img src={poolPartyImg} alt="how to dress for a pool party" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Pool Party</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-gray-300 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
              data-aos-duration="1000"
              
              >
              <img src={styleTipImg} alt='closet-tour' class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Closet-tour</h1>
            </div>
          </div>

          <div class="flex flex-col justify-center w-4/12 lg:block sm: hidden ">
            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-yellow-100 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="800"
              data-aos-duration="1000"
              
              >
              <img src={styleTipImg} alt='out-fit ideas related to try haul reviews.' class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Outfit ideas</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-yellow-200 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="900"
              data-aos-duration="1000"
              
              >
              <img src={nightOutImg} alt="how to dress for Girls night out" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Girls Night Out</h1>
            </div>

            <div class="flex flex-col py-10 lg:py-1  justify-center align-middle m-auto bg-yellow-300 w-full box"
            
            data-aos="flip-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="900"
              data-aos-duration="1000"
              
              >
              <img src={danceParty} alt="how to dress for a dance party" class="w-20 py-3 m-auto" />
              <h1 class="text-2xl lg:text-xl lg:py-2 m-auto">Dance party</h1>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionC
