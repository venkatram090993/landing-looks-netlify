import React, {useEffect} from 'react';

import sliderOneImageOne from "../../../images/slider1-1.png"
import sliderOneImageTwo from "../../../images/slider1-2.png"
import sliderOneImageThree from "../../../images/slider1-3.png"

import AOS from "aos"
import "aos/dist/aos.css"


const ImageSliderOne = () =>{


let AOS;

useEffect(()=>{
    const AOS = require('aos');
    AOS.init({
        once:true,
        })
}, [])



useEffect(()=>{

    if(AOS){
        AOS.refresh();
    }
    changeSliderOne()


})


let i = 0
let SliderOneTimeOut = 7000

  const sliderOneImages = [
    sliderOneImageTwo,
    sliderOneImageOne,
    sliderOneImageThree,
  ]

  
  function changeSliderOne() {
    document.sliderOne.src = sliderOneImages[i]

    if (i < sliderOneImages.length - 1) {
      i++
    } else {
      i = 0
    }

    setTimeout(() => {
      changeSliderOne()
    }, SliderOneTimeOut)
    
  }

  return(

    <div class="w-3/12 lg:block md:hidden sm: hidden">
    <img
      src={sliderOneImages}
      name="sliderOne"
      class="w-full lg:h-screen xl:h-screen md:h-screen"
      alt="prettyGirl-1"
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    />
  </div>
  )


  


}

export default ImageSliderOne;
