import React, { useEffect } from "react"

import sliderThreeImageOne from "../../../images/slider3-1.png"
import sliderThreeImageTwo from "../../../images/slider3-2.png"
import sliderThreeImageThree from "../../../images/slider3-3.png"

import AOS from "aos"
import "aos/dist/aos.css"

const ImageSliderThree = () => {
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
    changeSliderThree()
  })

  let i = 0
  let SliderThreeTimeOut = 6000

  const sliderThreeImages = [
    sliderThreeImageTwo,
    sliderThreeImageOne,
    sliderThreeImageThree,
  ]

  function changeSliderThree() {
    document.sliderThree.src = sliderThreeImages[i]

    if (i < sliderThreeImages.length - 1) {
      i++
    } else {
      i = 0
    }

    setTimeout(() => {
        changeSliderThree()
    }, SliderThreeTimeOut)
  }

  return (
    <div class="lg:w-3/12 lg:block md:block md:w-1/2 sm: hidden">
    <img
      src={sliderThreeImageOne}
      name="sliderThree"
      class="w-full lg:h-screen  xl:h-auto md:h-screen"
      alt="prettyGirl-1"
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    />
  </div>
  )
}

export default ImageSliderThree
