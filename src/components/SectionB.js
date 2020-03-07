import React, { useEffect, useState } from "react"
import "../css/layout.css"
import sendImg from "../images/plane.svg"
import ImageSliderOne from "./Layout/ImageSliders/ImageSliderOne"
import ImageSliderTwo from "./Layout/ImageSliders/ImageSliderTwo"
import ImageSliderThree from "./Layout/ImageSliders/ImageSliderThree"
import ImageSliderFour from "./Layout/ImageSliders/ImageSliderFour"
import SectionC from "./SectionC"
import client from "../../appsync"

import { navigate } from "gatsby"

const SectionB = () => {
    const gql = require("graphql-tag")

    const createdUser = gql`
      mutation createUser(
              $email: String!
      $referralCode: String!
      $case: String!
      $device: String!
      $browserDetails: AWSJSON!
      $time: String!
          )
          {
        createUser(
          input: {
            email: $email
            referralCode: $referralCode
            case: $case
            device: $device
            browserDetails: $browserDetails
            time: $time
          }
        ) {
          id
        }
      }
    `

  const [caseID, setCaseID] = useState("")

  const [userData, setUserData] = useState([])
 

  const [browser, setBrowser] = useState("unable to define")


  const [userTime, setUserTime] = useState("")


  const [buttonText, setButtonText] = useState("Get Early Access")
 


  function detectBrowser() {
    const browserArray = [
      "Chrome",
      "Firefox",
      "Safari",
      "Opera",
      "MSIE",
      "Trident",
      "Edge",
    ]

    let browserDetail,
      navigatorString = navigator.userAgent

    for (let i = 0; i < browserArray.length; i++) {
      if (navigatorString.indexOf(browserArray[i]) > -1) {
        browserDetail = browserArray[i]
        // setBrowser(browserDetail)

        break
      }
    }
  }

  // To check if the caseid is stored in the local storage. if no, get the browser details with the ip-api

  useEffect(() => {
    const myStorage = window.localStorage
    const caseIDFromLocalStorage = myStorage.getItem("caseID")

    if (caseIDFromLocalStorage) {
      var endpoint =
        "http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,query"

      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText)

          console.log("response", response)

          const userDetaisFromIpAPI = JSON.stringify(response);
          console.log("userDetaisFromIpAPI", userDetaisFromIpAPI)
          

        
          const parsedBrowserDetails = userDetaisFromIpAPI.replace(/"/g, '\\"');
          console.log("parsedBrowserDetails", parsedBrowserDetails);

          const ParsedBrowserWithQuotes = '"' + parsedBrowserDetails +'"';
          
          console.log("ParsedBrowserWithQuotes", ParsedBrowserWithQuotes)


          setBrowser(parsedBrowserDetails)
          console.log("type parsed",typeof(parsedBrowserDetails))
          
          

          if (response.status !== "success") {
            console.log("query failed: " + response.message)
            return
          }
        }
      }

      xhr.open("GET", endpoint, true)
      xhr.send()

      const caseIDValue = Math.floor(Math.random() * 2).toString();

      myStorage.setItem("caseID", caseIDValue)

      setCaseID(caseIDValue)
    } else {
      setCaseID(caseIDFromLocalStorage)
    }

    detectBrowser()
  }, [])

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const validateAndCheckOut = () => {
    const referralId = Math.random()
      .toString(36)
      .slice(-6)

    console.log("random===>", referralId)

  

    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim

    if (email !== "" && regex.test(email)) {
      setButtonText("Adding to waiting list...")

      var currentTime = new Date().toString()


    //     client()
    //       .hydrated()
    //       .then(function(cl) {
    //         console.log(cl)

    //         cl.mutate({
    //           mutation: createdUser,
    //           variables: {
    //             email: email,
    //             referralCode: referralId,
    //             case: caseID,
    //             device: "bigscreen",
    //             browserDetails: browser,
    //             time: currentTime,
    //           },
    //           fetchPolicy: "no-cache",
    //         })
    //           .then(result => {

    //             alert("registered")

    //             console.log("result appsync", result)

    //             setTimeout(() => {
    //               navigate("/th", {
    //                 state: {
    //                   refId: referralId,
    //                   device: "bigscreen",
    //                 },
    //               })
    //             }, 400)
    //           })
    //           .catch(err => {
    //             console.log(err)
    //           })
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })

    //   setTimeout(() => {
    //     navigate("/th", {
    //       state: {
    //         refId: referralId,
    //         device: "bigscreen",
    //       },
    //     })
    //   }, 400)

    
    console.log("caseID", caseID)
    console.log("userData", userData)
    console.log("browser", browser)
    console.log("time", currentTime)

    } else {
      console.log("invalid")
      setEmailError(true)
      setTimeout(() => {
        setEmailError(false)
      }, 2000)
    }
  }




let alertBox = null

  if (emailError) {
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
            onClick={() => {
              setEmailError(false)
            }}
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
        <span class="sm: font-bold lg:font-bold text-green-600">Swank</span>,
        luxury fashion video blog app.
      </p>
      <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
        Tryhaul, outfit ideas, style tips and more.
      </p>
    </div>
  )

  if (caseID === 0) {
    descriptionBlock = (
      <div>
        <p class="lg:text-6xl md:text-5xl leading-normal text-white sm: text-2xl text-center font-serif">
          <span class="sm: font-bold lg:font-bold text-green-600">Swank</span>,
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
          <span class="sm: font-bold lg:font-bold text-green-600">Swank</span>,
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

            <div class="xl:w-7/12  lg:px-16 sm: w-6/12 p-12 md:py-5 rounded-lg lead-gen-div">
              {descriptionBlock}
              <form
                onSubmit={e => {
                  e.preventDefault()
                  validateAndCheckOut()
                }}
              >
                <div class="flex lg:flex-row mt-5 lg:w-full lg:justify-center sm: flex-col sm: w-5/6 sm: m-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="lg:w-8/12 lg:mr-2 placeholder-indigo-800 lg:pb-1 pl-5 lg:m-0 h-10 text-indigo-600 lg:text-xl lg:text-left md:text-left md:w-10/12 sm: mb-5 sm: w-full sm: m-auto sm: text-center lg:rounded-sm sm: rounded-md"
                    onChange={event => {
                      setEmail(event.target.value)
                      console.log(email)
                    }}
                    onClick={() => {
                      setEmailError(false)
                    }}
                  />

                  <div
                    role="button"
                    onClick={() => {
                      validateAndCheckOut()
                    }}
                    class="cursor-pointer lg:m-0 lg:w-5/12 lg:rounded-sm md:w-7/12  h-10 py-2 px-1 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto headerButton"
                  >
                    <img
                      src={sendImg}
                      class="w-8 mr-2"
                      alt="get early access"
                    />
                    <p class="lg:text-base pr-2">{buttonText}</p>
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
