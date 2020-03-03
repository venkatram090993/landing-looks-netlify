import React, { useEffect, useState } from "react"
import "../css/layout.css"
import AOS from "aos"
import "aos/dist/aos.css"

import sendImg from "../images/plane.svg"
import logo from "../images/logo.png"

import ImageSliderOne from "./Layout/ImageSliders/ImageSliderOne"
import ImageSliderTwo from "./Layout/ImageSliders/ImageSliderTwo"
import ImageSliderThree from "./Layout/ImageSliders/ImageSliderThree"
import ImageSliderFour from "./Layout/ImageSliders/ImageSliderFour" 

import getFirebase from "../firebase"

import { navigate } from "gatsby"

const SectionB = () => {
  // Counter increment Function
  // let count
  // useEffect(()=>{

  //  count = document.getElementById("count").innerHTML;

  //  let temp = count - 500;

  // function counter(){

  //     if(temp < count){

  //         setTimeout(()=>{
  //         document.getElementById("count").innerHTML = temp;
  //         temp += 11;
  //         counter()
  //         }, 20)

  //     }
  //     else{
  //             document.getElementById("count").innerHTML = count;
  //     }

  //  }

  //  counter()

  // })

  const [caseID, setCaseID] = useState("");
    
  useEffect(()=>{

    const myStorage = window.localStorage;
    const caseIDFromLocalStorage = myStorage.getItem("caseID");




    if(caseIDFromLocalStorage == null){

        const caseIDValue = (Math.floor(Math.random() * 2));

        myStorage.setItem("caseID",caseIDValue);
       
        setCaseID(caseIDValue);


    } else{

        setCaseID(caseIDFromLocalStorage);

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

    const emailValue = email

    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim

    if (email != "" && regex.test(email)) {
      // let ref = firebase.firestore().collection("users").ref;

      // console.log(ref);

      Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
        const database = getFirebase(firebase).firestore()
        database
          .collection("users")
          .add({ emailID: email, referralId: referralId })
      })

      navigate("/thankYouPage", {
        state: {
          refId: referralId,
        },
      })
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
            New
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">
            Get the coolest t-shirts from our brand new store
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
      

      //   <div
      //     class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-600 px-4 py-3 shadow-md z-20 alertBox"
      //     role="alert"
      //   >
      //     <div class="flex">
      //       <div
      //         class="absolute inset-0 flex  h-4 w-4 justify-end ml-1 mt-1 pl-64 cursor-pointer"
      //         onClick={() => {
      //           setEmailError(false)
      //         }}
      //       >
      //         X
      //       </div>
      //       <div class="py-4">
      //         <svg
      //           class="fill-current h-6 w-6 text-red-500 mr-4"
      //           xmlns="http://www.w3.org/2000/svg"
      //           viewBox="0 0 20 20"
      //         >
      //           <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
      //         </svg>
      //       </div>
      //       <div>
      //         <p class="mt-4">Please enter a valid email ID</p>
      //       </div>
      //     </div>
      //   </div>
    )
  }




  let descriptionBlock = (

    <div>
<p class="lg:text-6xl md:text-3xl leading-normal text-white sm: text-2xl text-center font-serif">
    <span class="sm: font-bold lg:font-bold text-green-600">
      Looks
    </span>
    , luxury fashion vlog.
  </p>
  <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
    Tryhaul, outfit ideas, style tips and more.
  </p>

    </div>

  )

  if(caseID === 0){

    descriptionBlock = (

        <div>
    <p class="lg:text-6xl md:text-3xl leading-normal text-white sm: text-2xl text-center font-serif">
        <span class="sm: font-bold lg:font-bold text-green-600">
          Looks
        </span>
        , luxury fashion vlog.
      </p>
      <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
      Tryhaul, outfit ideas, style tips and more.
      </p>
    
        </div>
    
      )


  }else{

    descriptionBlock = (

        <div>
    <p class="lg:text-6xl md:text-3xl md:mt-2 leading-normal text-white sm: text-2xl text-center font-serif">
        <span class="sm: font-bold lg:font-bold text-green-600">
          Looks
        </span>
        , sassy new way to fashion vlog
      </p>
      <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
      Tryhaul, outfit ideas, style tips and more.
      </p>
    
        </div>
    
      )
  }





  return (
    <div class="h-screen lg:leading-normal sm: w-full bg-black font-sans">
      <div class="flex flex-col h-screen">
        <div class="flex flex-row w-full h-screen">
          {alertBox}

          <ImageSliderThree />

          <ImageSliderOne />

          <ImageSliderTwo />

          <ImageSliderFour />

          <div class="xl:w-7/12 lg:w-11/12 sm: w-6/12 p-12 md:py-5 rounded-lg lead-gen-div">
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
                  class="lg:w-5/12 placeholder-indigo-800 pl-5 lg:m-0 lg:rounded-l-full h-10 p-2 text-indigo-600 lg:text-xl lg:text-left md:text-left sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md"
                  onChange={event => {
                    setEmail(event.target.value)
                    console.log(email)
                  }}
                  onClick={() => {
                    setEmailError(false)
                  }}
                />

                <div
                  onClick={() => {
                    validateAndCheckOut()
                  }}
                  style={{ background: "#19328C" }}
                  class=" cursor-pointer lg:m-0 lg:w-4/12 lg:rounded-r-full  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto headerButton"
                >
                  <img src={sendImg} class="w-8 mr-2" />
                  <p class="lg:text-base pr-2 text-white">Get early access</p>
                </div>
              </div>
            </form>
          </div>

          {/* <div class="w-64 h-64 bg-blue-700 absolute">
              
              <p id="count">2000</p><p>Users have registered already. Register Now!</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SectionB
