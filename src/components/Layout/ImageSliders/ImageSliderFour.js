import React, { useEffect } from "react"

import sliderFourImageOne from "../../../images/slider4-1.png"
import sliderFourImageTwo from "../../../images/slider4-2.png"
import sliderFourImageThree from "../../../images/slider4-3.png"

import AOS from "aos"
import "aos/dist/aos.css"

const ImageSliderFour = () => {
  let AOS

  useEffect(() => {
    const AOS = require("aos")
    AOS.init({
      once: true,
    })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
    changeSliderFour()
  })

  let i = 0
  let SliderFourTimeOut = 8000

  const sliderFourImages = [
    sliderFourImageTwo,
    sliderFourImageOne,
    sliderFourImageThree,
  ]

  function changeSliderFour() {
    document.sliderFour.src = sliderFourImages[i]

    if (i < sliderFourImages.length - 1) {
      i++;
      SliderFourTimeOut += 1000;
    } else {
      i = 0
    }

    setTimeout(() => {
        changeSliderFour()
    }, SliderFourTimeOut)
  }

  return (
    <div class="lg:w-3/12 lg:block md:block md:w-1/2 sm: hidden">
    <img
      src={sliderFourImageOne}
      name="sliderFour"
      class="w-full lg:h-screen xl:h-screen md:h-screen"
      alt="prettyGirl-1"
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    />
  </div>
  )
}

export default ImageSliderFour
