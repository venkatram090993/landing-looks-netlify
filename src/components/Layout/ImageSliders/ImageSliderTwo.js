import React, { useEffect } from "react"

import sliderTwoImageOne from "../../../images/slider2-1.png"
import sliderTwoImageTwo from "../../../images/slider2-2.png"
import sliderTwoImageThree from "../../../images/slider2-3.png"

import AOS from "aos"
import "aos/dist/aos.css"

const ImageSliderTwo = () => {
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
    changeSliderTwo()
  })

  let i = 0
  let SliderTwoTimeOut = 10~000

  const sliderTwoImages = [
    sliderTwoImageTwo,
    sliderTwoImageOne,
    sliderTwoImageThree,
  ]

  function changeSliderTwo() {
    document.sliderTwo.src = sliderTwoImages[i]

    if (i < sliderTwoImages.length - 1) {
      i++
    } else {
      i = 0
    }

    setTimeout(() => {
      changeSliderTwo()
    }, SliderTwoTimeOut)
  }

  return (
    <div class="lg:w-3/12 lg:block md:block md:w-1/2 sm: hidden">
      <img
        src={sliderTwoImageTwo}
        name="sliderTwo"
        class="w-full lg:h-screen  xl:h-auto md:h-screen"
        alt="prettyGirl-1"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
      />
    </div>
  )
}

export default ImageSliderTwo
