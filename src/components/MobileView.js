import React, { useEffect, useState } from "react"
import "../css/layout.css"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"
import SectionC from "./SectionC"
import client from "../../appsync"

const MobileView = () => {
  const gql = require("graphql-tag")

//   const createdUser = gql`
//     mutation createUser(
//             $email: String!
//     $referralCode: String!
//     $case: String!
//     $device: String!
//     $browserDetails: AWSJSON!
//     $time: String!
//         )
//         {
//       createUser(
//         input: {
//           email: $email
//           referralCode: $referralCode
//           case: $case
//           device: $device
//           browserDetails: $browserDetails
//           time: $time
//         }
//       ) {
//         id
//       }
//     }
//   `

// const createdVisitor = gql`
// mutation createVisitor(
//   $referrer: String!
//   $marketerId: String!
//   $browserDetails: AWSJSON!
//   $time: String!
// ) {
//   createVisitor(
//     input: {
//       referrer: $referrer
//       marketerId: $marketerId
//       browserDetails: $browserDetails
//       time: $time
//     }
//   ) {
//     id
//   }
// }
// `

const [marketerId, setMarketerId] = useState("")

const [refId, setRefId] = useState("")

  const [browser, setBrowser] = useState("unable to define")

  const [caseID, setCaseID] = useState("");

  let ParsedBrowserWithQuotes

  const [buttonClicked, setButtonClicked] = useState(false)
  
  
  
  useEffect(() => {
    const urlFromLocation = window.location.href

    const newURL = new URL(urlFromLocation)

    console.log(newURL.searchParams.has("marketerId"))

    let marketerIdFromLocation;

    if (newURL.searchParams.has("marketerId")) {
         marketerIdFromLocation = newURL.searchParams.get("marketerId").toString()
        console.log(marketerIdFromLocation);
        setMarketerId(marketerIdFromLocation)
      }

    const currentTime = new Date().toString()

    const myStorage = window.localStorage
    const caseIDFromLocalStorage = myStorage.getItem("caseID")

    const dataFromLocalStorage = myStorage.getItem("dataFromLocalStorage")

    let ParsedBrowserWithQuotes

    if (!caseIDFromLocalStorage || !dataFromLocalStorage) {
      const caseIDValue = Math.floor(Math.random() * 2).toString()

      myStorage.setItem("caseID", caseIDValue)
      setCaseID(caseIDValue)

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

          ParsedBrowserWithQuotes = '"' + parsedBrowserDetails +'"';


          setBrowser(ParsedBrowserWithQuotes);


          myStorage.setItem("dataFromLocalStorage", ParsedBrowserWithQuotes)

        //   client()
        // .hydrated()
        // .then(function(cl) {
        //   console.log(cl)

        // cl.mutate({
        //     mutation: createdVisitor,
        //     variables: {

        //         referrer: refId,
        //         marketerId: marketerIdFromLocation,
        //     browserDetails: ParsedBrowserWithQuotes,
        //     time: currentTime,
        //      },
        //       fetchPolicy: "no-cache",
        //     })
        //    .then(result => {

        //         console.log("result appsync", result)
        //       })
        //       .catch(err => {
        //         console.log(err)
        //       })
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })


          if (response.status !== "success") {
            console.log("query failed: " + response.message)
            return
          }

          
        }
      }

      xhr.open("GET", endpoint, true)
      xhr.send();

    } else {
      setCaseID(caseIDFromLocalStorage)
      setBrowser(dataFromLocalStorage)
    }
  }, [])


  
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const validateAndCheckOut = () => {

    
 
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim

          var currentTime = new Date().toString()



    if (email !== "" && regex.test(email)) {
      setButtonClicked(true)

      const referralId = Math.random()
          .toString(36)
          .slice(-6)
    
        setRefId(referralId);


      

    //   client()
    //     .hydrated()
    //     .then(function(cl) {
    //       console.log(cl)

    //       cl.mutate({
    //         mutation: createdUser,
    //         variables: {
    //           email: email,
            //   referralCode: refId,
    //           case: caseID,
    //           device: "bigscreen",
    //           browserDetails: browser,
    //           time: currentTime,
    //         },
    //         fetchPolicy: "no-cache",
    //       })
    //         .then(result => {
    //           console.log("result appsync", result)
    //           setTimeout(() => {
    //             navigate("/th", {
                //   state: { device: "mobile", refId: refId },
    //             })
    //           }, 600)
    //         })
    //         .catch(err => {
    //           console.log(err)
    //         })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })

    //   console.log("caseID", caseID)
    //   console.log("browser", browser)
    //   console.log("time", currentTime)
      setTimeout(() => {
                    navigate("/th", {
                      state: { device: "mobile", refId: refId },
                    })
                  }, 600)

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

  const [showRefURL, setShowRefURL] = useState(true)

  function DisplayShowURL() {
    setShowRefURL(true)
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
                validateAndCheckOut()
              }}
            >
              <input
                class="h-10 p-2 text-black mb-5 w-full m-auto text-center rounded-md"
                placeholder="Enter your email"
                onChange={event => {
                  setEmail(event.target.value)
                  console.log(email)
                }}
                onClick={() => {
                  setEmailError(false)
                }}
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
                  validateAndCheckOut()
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

{
  /* <img
          src={sliderOneImageOne}
          class="h-screen w-full" 
          alt="prettyGirl-1"
          data-aos="zoom-in"
          data-aos-duration="1700"
          data-aos-delay="300"
        /> */
}
