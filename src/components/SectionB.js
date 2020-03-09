import React from "react"
import "../css/layout.css"
import sendImg from "../images/plane.svg"
import ImageSliderOne from "./Layout/ImageSliders/ImageSliderOne"
import ImageSliderTwo from "./Layout/ImageSliders/ImageSliderTwo"
import ImageSliderThree from "./Layout/ImageSliders/ImageSliderThree"
import ImageSliderFour from "./Layout/ImageSliders/ImageSliderFour"
import SectionC from "./SectionC"

const SectionB = (props) => {


//   function detectBrowser() {
//     const browserArray = [
//       "Chrome",
//       "Firefox",
//       "Safari",
//       "Opera",
//       "MSIE",
//       "Trident",
//       "Edge",
//     ]

//     let browserDetail,
//       navigatorString = navigator.userAgent

//     for (let i = 0; i < browserArray.length; i++) {
//       if (navigatorString.indexOf(browserArray[i]) > -1) {
//         browserDetail = browserArray[i]
//         // setBrowser(browserDetail)

//         break
//       }
//     }
//   }

  // To check if the caseid is stored in the local storage. if no, get the browser details with the ip-api

  
  let alertBox = null

  if (props.emailError) {
    alertBox = (
      <div class="bg-indigo-900 text-center py-3 lg:px-4  z-20 alertBox">
        <div
          class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            Error
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">
            Please enter a valid email id
          </span>
          <div
            class=" cursor-pointer px-2 py-1"
            onClick={props.toggleEmail}
          >
            X
          </div>
        </div>
      </div>
    )
  }

  let descriptionBlock = (
    <div>
      <p class="lg:text-6xl md:text-5xl leading-normal text-white sm: text-2xl text-center font-serif">
        <span class="sm: font-bold lg:font-bold text-green-600">Swanky</span>,
        luxury fashion video blog app.
      </p>
      <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
        Tryhaul, outfit ideas, style tips and more.
      </p>
    </div>
  )

  if (props.caseID === 0) {
    descriptionBlock = (
      <div>
        <p class="lg:text-6xl md:text-5xl leading-normal text-white sm: text-2xl text-center font-serif">
          <span class="sm: font-bold lg:font-bold text-green-600">Swanky</span>,
          luxury fashion vlog app.
        </p>
        <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
          Tryhaul, outfit ideas, style tips and more.
        </p>
      </div>
    )
  } else {
    descriptionBlock = (
      <div>
        <p class="lg:text-6xl md:text-5xl md:mt-2 leading-normal text-white sm: text-2xl text-center font-serif">
          <span class="sm: font-bold lg:font-bold text-green-600">Swanky</span>,
          fashion vlog app.
        </p>
        <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
          Tryhaul, outfit ideas, style tips and more.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div class="h-screen lg:leading-normal sm: w-full bg-black font-sans">
        <div class="flex flex-col h-screen">
          <div class="flex flex-row w-full h-screen">
            {alertBox}

            <ImageSliderThree />

            <ImageSliderOne />

            <ImageSliderTwo />

            <ImageSliderFour />

            <div class="xl:w-7/12 lg:w-8/12  lg:px-20 sm: w-6/12 p-12 md:py-5 rounded-lg lead-gen-div">
              {descriptionBlock}
              <form
                onSubmit={e => {
                  e.preventDefault()
                  props.validateAndCheckOut()
                }}
              >
                <div class="flex lg:flex-row mt-5 lg:w-full lg:justify-center sm: flex-col sm: w-5/6 sm: m-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="lg:w-8/12 lg:mr-2 lg:pb-1 pl-5 lg:m-0 h-10 text-gray-800 lg:text-xl lg:text-left md:text-left md:w-10/12 sm: mb-5 sm: w-full sm: m-auto sm: text-center lg:rounded-sm sm: rounded-md"
                    onChange={props.emailCollector}
                    onClick={props.toggleEmail}
                  />

                  <div
                    role="button"
                    onClick={()=>{props.validateAndCheckOut("bigScreen")}}

                    class="cursor-pointer lg:m-0 xl:5/12 lg:w-6/12 lg:rounded-sm md:w-7/12  h-10 py-2 px-1 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto headerButton"
                  >
                    <img
                      src={sendImg}
                      class="w-8 mr-2"
                      alt="get early access"
                    />
                    <p class="lg:text-base pr-2">{props.buttonText}</p>
                  </div>
                </div>
              </form>
              <div class="flex justify-center flex-row my-5 text-white text-center text-3xl md:text-2xl">
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionC />
    </div>
  )
}

export default SectionB
