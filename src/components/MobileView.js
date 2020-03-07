import React, { useEffect, useState } from "react"
import "../css/layout.css"
import getFirebase from "../firebase"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"
import SectionC from './SectionC'


const MobileView = () => {
  const [caseID, setCaseID] = useState("")

  const [userData, setUserData] = useState([])

  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    const myStorage = window.localStorage

    const caseIDFromLocalStorage = myStorage.getItem("caseID")

    // Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
    //   const database = getFirebase(firebase).firestore()

    //   database
    //     .collection("users")
    //     .get()
    //     .then(snapshot => {
    //       let userDataArr = []
    //       snapshot.docs.forEach(doc => {
    //         userDataArr.push(doc.data())
    //       })

    //       setUserData(userDataArr)
    //     })
    // })

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

        setButtonClicked(true)

        setTimeout(()=>{
          navigate("/th",{state:{device : "mobile", refId: referralId}})
        },600)

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
      style={{background: "rgba(0,0,0,0.5)", marginTop:"220px", marginBottom:"165px"}}
        class="w-11/12 py-5 m-auto"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="1800"
        id="lead-div"
        
      >
        <p class="leading-normal text-white text-4xl text-center">
          <span class="font-bold text-green-600">Looks</span>, luxury fashion video blogging app.
        </p>
        <p class="leading-normal text-white text-xl my-6 text-center px-2">
          Tryhaul, outfit ideas, style tips and more.
        </p>
        <div class="flex mt-5 flex-col w-5/6 m-auto">
            <form  onSubmit={(e)=>{
            e.preventDefault();
            validateAndCheckOut();
            }}>
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
         
          {

              buttonClicked ?  <div
              class=" cursor-pointer bg-blue-900 h-10 py-2 px-1 flex flex-row justify-center w-10/12 m-auto pointer-events-none ">
              {/* <img src={sendImg} class="w-8 mr-1 " /> */}
              <p
                class="lg:text-base pr-2 text-white"
              >
               Adding to waiting list...
              </p>
            </div> :
             <div
             style={{ background: "#19328C" }}
             class=" cursor-pointer h-10 py-2 px-1 flex flex-row justify-center w-10/12 rounded-md m-auto "
             onClick={() => {
                validateAndCheckOut();
               }}
           >
             <img src={sendImg} class="w-8 mr-1 " />
             <p
               class="lg:text-base pr-2 text-white"
             >
                  Get Early Access  
             </p>
           </div>
          }
        </div>

        <div class="flex justify-center flex-row my-5 text-white text-center text-3xl"><p>Launch in April.</p></div>
      </div>
    </div>

    <SectionC />

    </div>
  )
}

export default MobileView


 {/* <img
          src={sliderOneImageOne}
          class="h-screen w-full" 
          alt="prettyGirl-1"
          data-aos="zoom-in"
          data-aos-duration="1700"
          data-aos-delay="300"
        /> */}