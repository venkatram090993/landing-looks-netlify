import React, {useEffect} from "react"
import "../css/layout.css"
// import AOS from "aos"
// import "aos/dist/aos.css"

import image1 from "../images/image-tr3.png"
import image2 from "../images/image-2-tr7.png"
import image3 from "../images/image-3-tr4.png"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"

// import logo from "../images/logo.png";

const MobileView = () =>{

// Has to use this block if incase you are using AOS to be difined on the first encounter or else you'll get BUILD issue
    
//     let AOS;
//   useEffect(() => {
//     const AOS = require("aos");
//     AOS.init({
//       once: true,
//     });
//   }, []);

//   useEffect(() => {
//     if (AOS) {
//       AOS.refresh();
//     }
//   });



  return (
      <div class="flex flex-row">
  <div class="lg:w-3/12 md:w-1/2 sm: h-screen">
            <img
              src={sliderOneImageOne}
              class="lg:h-screen lg:w-screen md:w-screen sm: h-screen sm: w-full"
              alt="prettyGirl-1"
              data-aos="zoom-in"
              data-aos-duration="1700"
              data-aos-delay="300"
            />
          </div>
             <div
            class="lg:w-4/12 sm: w-6/12 lead-gen-div"
            data-aos="zoom-out"
            data-aos-duration="1200"
            data-aos-delay="1800"
          >
            <p class="lg:text-3xl md:text-3xl leading-normal text-white sm: text-5xl sm: text-center">
            <span class="sm: font-bold lg:font-bold text-green-600">Looks</span>, luxury fashion vlog.
            </p>
            <p class="lg:text-xl leading-normal text-white sm: text-xl lg:mt-2 sm: mt-3 md:mt-2 sm: text-center">
              Short tryhaul, quick tutorials and more.
            </p>
            <div class="flex lg:flex-row mt-5 lg:w-full sm: flex-col sm: w-5/6 sm: m-auto">
              <input class="lg:w-1/2 lg:rounded-tl-full h-10 p-2 text-black sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md" autoFocus />
              <div
                onClick={() => {
                  alert("Thanks")
                }}
                style={{ background: "#19328C" }}
                class=" cursor-pointer lg:m-0 lg:w-6/12  h-10 py-2 lg:px-2 sm: px-1 flex flex-row justify-center sm: w-10/12 lg:rounded-br-full sm: rounded-md sm: m-auto "
              >
                <img src={sendImg} class="w-8 lg:mr-2 sm: mr-1 " />
                <p class="lg:text-base pr-2 text-white" onClick={()=>{navigate('/thankYouPage')}}>Get early access</p>
              </div>
            </div>
          </div>
          
                </div>
  )
}

export default MobileView