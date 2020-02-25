import React, {useEffect} from "react"
import "../css/layout.css"
import AOS from "aos"
import "aos/dist/aos.css"

import image1 from "../images/image-tr3.png"
import image2 from "../images/image-2-tr7.png"
import image3 from "../images/image-3-tr4.png"
import image4 from "../images/pretty-3.jpg"

import sendImg from "../images/plane.svg"
import logo from "../images/logo.png"

const SectionB = () => {

    let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div class="lg:h-screen lg:leading-normal overflow-y-hidden sm: w-full sm: h-screen bg-red-800" >
      <div class="flex flex-col">
        <div class="flex flex-row w-full">
          <div class="w-3/12 lg:block md:hidden sm: hidden">
            <img
              src={image3}
              class="h-screen w-full"
              alt="prettyGirl-1"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            />
          </div>

          <div class="lg:w-3/12 lg:block md:block md:w-1/2 sm: hidden">
            <img
              src={image2}
              class="h-screen w-full"
              alt="prettyGirl-1"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            />
          </div>

          
          <div class="lg:w-3/12 lg:block md:block md:w-1/2 sm: hidden">
            <img
              src={image1}
              class="h-screen w-full"
              alt="prettyGirl-1"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            />
          </div>


          <div class="lg:w-3/12 lg:block md:hidden md:w-1/2 sm: hidden">
            <img
              src={image4}
              class="lg:h-screen lg:w-screen md:w-screen sm: h-screen sm: w-full"
              alt="prettyGirl-1"
              data-aos="zoom-in"
              data-aos-duration="1700"
              data-aos-delay="300"
            />
          </div>

          <div
            class="lg:w-5/12 sm: w-6/12 lead-gen-div"
            
          >
            <p class="lg:text-6xl md:text-3xl leading-normal text-white sm: text-2xl text-center">
              <span class="sm: font-bold lg:font-bold text-green-500">Looks</span>, a sassy new way to fashion vlog.
            </p>
            <p class="lg:text-xl leading-normal text-white sm: text-xl lg:mt-2 sm: mt-3 md:mt-2 text-center">
              Short tryhaul, quick tutorials and more.
            </p>
            <div class="flex lg:flex-row mt-5 lg:w-full sm: flex-col sm: w-5/6 sm: m-auto">
              <input class="lg:w-1/2 lg:rounded-none h-10 p-2 text-black sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md" />
              <div
                onClick={() => {
                  alert("Thanks")
                }}
                style={{ background: "#19328C" }}
                class=" cursor-pointer lg:m-0 lg:w-6/12 lg:rounded-none  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto "
              >
                <img src={sendImg} class="w-8 mr-2" />
                <p class="lg:text-base pr-2 text-white">Get early access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionB
