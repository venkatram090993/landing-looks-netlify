import React, { useEffect, useState } from "react"
import "../css/layout.css"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"
import SectionC from "./SectionC"

const MobileView = (props) => {


    const [buttonClicked, setButtonClicked] = useState(false)


let alertBox = null

  if (props.emailError) {
    alertBox = (
      <div class="bg-indigo-900 text-center rounded-full py-3 w-5/6 z-20 alertBoxMobile">
        <div
          class="p-2 bg-indigo-800 items-center rounded-full text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
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


  if (typeof window === "undefined") {
    return <></>
  }

  return (
    <div>
      <div class="flex flex-col justify-center container-div">
        {/* <div class="relative h-screen"> */}
        {alertBox}
        {/* </div> */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            marginTop: "220px",
            marginBottom: "165px",
          }}
          class="w-11/12 py-5 m-auto"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="1800"
          id="lead-div"
        >
          <p class="leading-normal text-white text-4xl text-center">
            <span class="font-bold text-green-600">Swanky</span>, luxury fashion
            vlog app.
          </p>
          <p class="leading-normal text-white text-xl my-6 text-center px-2">
            Tryhaul, outfit ideas, style tips and more.
          </p>
          <div class="flex mt-5 flex-col w-5/6 m-auto">
            <form
              onSubmit={e => {
                e.preventDefault()
                props.validateAndCheckOut("mobile")
              }}
            >
              <input
                class="h-10 p-2 text-black mb-5 w-full m-auto text-center rounded-md"
                placeholder="Enter your email"
                onChange={props.emailCollector}
                onClick={props.toggleEmail}
              />
            </form>

            {buttonClicked ? (
              <div class=" cursor-pointer bg-blue-900 h-10 py-2 px-1 flex flex-row justify-center w-10/12 m-auto pointer-events-none ">
                {/* <img src={sendImg} class="w-8 mr-1 " /> */}
                <p class="lg:text-base pr-2 text-white">
                  Adding to waiting list...
                </p>
              </div>
            ) : (
              <div
                style={{ background: "#19328C" }}
                class=" cursor-pointer h-10 py-2 px-1 flex flex-row justify-center w-10/12 rounded-md m-auto "
                onClick={() => {
                  props.validateAndCheckOut("mobile")
                }}
              >
                <img src={sendImg} class="w-8 mr-1 " />
                <p class="lg:text-base pr-2 text-white">Get Early Access</p>
              </div>
            )}
          </div>

          <div class="flex justify-center flex-row my-5 text-white text-center text-3xl">
            <p>Launch in April.</p>
          </div>
        </div>
      </div>

      <SectionC />
    </div>
  )
}

export default MobileView
