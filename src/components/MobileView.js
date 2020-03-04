import React, { useEffect, useState } from "react"
import "../css/layout.css"
import getFirebase from "../firebase"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"

const MobileView = () => {
  const [caseID, setCaseID] = useState("")

  const [userData, setUserData] = useState([])

  const [buttonText, setButtonText] = useState("Get Early Access")

  useEffect(() => {
    const myStorage = window.localStorage
    const caseIDFromLocalStorage = myStorage.getItem("caseID")

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).firestore()

      database
        .collection("users")
        .get()
        .then(snapshot => {
          let userDataArr = []
          snapshot.docs.forEach(doc => {
            userDataArr.push(doc.data())
          })

          setUserData(userDataArr)
        })
    })

    if (caseIDFromLocalStorage === null) {
      const caseIDValue = Math.floor(Math.random() * 2)

      myStorage.setItem("caseID", caseIDValue)

      setCaseID(caseIDValue)
    } else {
      setCaseID(caseIDFromLocalStorage)
    }
  }, [])

  useEffect(() => {
    const lazyApp = import("firebase/app")
    const lazyDatabase = import("firebase/firestore")

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).firestore()
    })
  })

  const lazyApp = import("firebase/app")
  const lazyDatabase = import("firebase/firestore")

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const validateAndCheckOut = () => {
    const referralId = Math.random()
      .toString(36)
      .slice(-6)

    console.log("random===>", referralId)

    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim

    if (email !== "" && regex.test(email)) {
      for (let user of userData) {
        if (user.emailID == email) {
          alert("user Exist")
          return false
        } else {
          Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
            const database = getFirebase(firebase).firestore()

            setButtonText("Loading...")
            // database
            //   .collection("users")
            //   .add({ emailID: email, referralId: referralId, case: caseID, device:"bigger screen" })
          })

          setTimeout(()=>{
            navigate("/thankYouPage",{state:{device : "mobile"}})
          },400)

           
        }
      }
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
      <div class="bg-indigo-900 text-center py-3 w-5/6 z-20 alertBoxMobile">
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

  const [showRefURL, setShowRefURL] = useState(true)

  function DisplayShowURL() {
    setShowRefURL(true)
  }

  if (typeof window === "undefined") {
    return <></>
  }

  return (
    <div class="flex flex-row">
      <div class="h-screen relative">
        {alertBox}
        <img
          src={sliderOneImageOne}
          class="h-screen w-full"
          alt="prettyGirl-1"
          data-aos="zoom-in"
          data-aos-duration="1700"
          data-aos-delay="300"
        />
      </div>
      <div
        class="lead-gen-div"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="1800"
      >
        <p class="leading-normal text-white text-5xl text-center">
          <span class="font-bold text-green-600">Looks</span>, luxury fashion
          vlog.
        </p>
        <p class="leading-normal text-white text-xl mt-2 text-center">
          Tryhaul, outfit ideas, style tips and more.
        </p>
        <div class="flex mt-5 flex-col w-5/6 m-auto">
          <input
            class="h-10 p-2 text-black mb-5 w-full m-auto text-center rounded-md"
            placeholder="Enter e-mail"
            onChange={event => {
              setEmail(event.target.value)
              console.log(email)
            }}
            onClick={() => {
              setEmailError(false)
            }}
          />
          <div
            style={{ background: "#19328C" }}
            class=" cursor-pointer h-10 py-2 px-1 flex flex-row justify-center w-10/12 rounded-md m-auto "
          >
            <img src={sendImg} class="w-8 mr-1 " />
            <p
              class="lg:text-base pr-2 text-white"
              onClick={() => {
                validateAndCheckOut()
              }}
            >
              {buttonText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileView
