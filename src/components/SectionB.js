import React, { useEffect, useState } from "react"
import "../css/layout.css"
import sendImg from "../images/plane.svg"
import ImageSliderOne from "./Layout/ImageSliders/ImageSliderOne"
import ImageSliderTwo from "./Layout/ImageSliders/ImageSliderTwo"
import ImageSliderThree from "./Layout/ImageSliders/ImageSliderThree"
import ImageSliderFour from "./Layout/ImageSliders/ImageSliderFour"
import SectionC from './SectionC'
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

  const [caseID, setCaseID] = useState("")

  const [userData, setUserData] = useState([])

  const [browser , setBrowser] = useState("unable to define")

  const [userTime, setUserTime] = useState("")

  const [buttonText, setButtonText] = useState("Get Early Access")


  function detectBrowser () {

    const browserArray = ["Chrome", "Firefox", "Safari", "Opera", "MSIE", "Trident", "Edge" ]

    let browserDetail, navigatorString = navigator.userAgent;


    for ( let i = 0; i < browserArray.length; i++ ){

        if((navigatorString.indexOf(browserArray[i]) > -1 )){

            browserDetail = browserArray[i];
            setBrowser(browserDetail)

            break;
        }
        
    }

    var currentTime = new Date();
    setUserTime(currentTime);


  }


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

    detectBrowser();

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


        setButtonText("Adding to waiting list...")


        setTimeout(()=>{
            navigate("/thankYouPage", {
                state: {
                  refId: referralId,
                },
              })
        },400)




    //  for(let user of userData ){

    //     if(user.emailID == email){
    //         alert("user Exist")
    //         return false;
    //     }
    //     else{
    //     Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
    //         const database = getFirebase(firebase).firestore()
    //         database
    //           .collection("users")
    //           .add({ emailID: email, referralId: referralId, case: caseID, device:"largeScreen", browserDetail: browser, time: userTime  })
    //       })
    
         
    //     }


        

    //  }

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
      <p class="lg:text-6xl md:text-3xl leading-normal text-white sm: text-2xl text-center font-serif">
        <span class="sm: font-bold lg:font-bold text-green-600">Looks</span>,
        luxury fashion video blogging app.
      </p>
      <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
        Tryhaul, outfit ideas, style tips and more.
      </p>
    </div>
  )

  if (caseID === 0) {
    descriptionBlock = (
      <div>
        <p class="lg:text-6xl md:text-3xl leading-normal text-white sm: text-2xl text-center font-serif">
          <span class="sm: font-bold lg:font-bold text-green-600">Looks</span>,
          luxury fashion video blogging app.
        </p>
        <p class="lg:text-2xl leading-normal text-white sm: text-xl  lg:mt-0 sm: mt-3 md:mt-2 text-center">
          Tryhaul, outfit ideas, style tips and more.
        </p>
      </div>
    )
  } else {
    descriptionBlock = (
      <div>
        <p class="lg:text-6xl md:text-3xl md:mt-2 leading-normal text-white sm: text-2xl text-center font-serif">
          <span class="sm: font-bold lg:font-bold text-green-600">Looks</span>,
          sassy new way to post fashion V-blogs. 
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
                  role="button"
                  onClick={() => {
                    validateAndCheckOut()
                  }}
                  style={{ background: "#19328C" }}
                  class=" cursor-pointer lg:m-0 lg:w-4/12 lg:rounded-r-full  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto headerButton"
                >
                  <img src={sendImg} class="w-8 mr-2" alt="get early access" />
                  <p class="lg:text-base pr-2 text-white">{buttonText}</p>
                </div>
              </div>
            </form>
            <div class="flex justify-center flex-row my-5 text-white text-center text-3xl"><p>Launch in April.</p></div>
          </div>
          {/* <div class="w-64 h-64 bg-blue-700 absolute">
              
              <p id="count">2000</p><p>Users have registered already. Register Now!</p>
          </div> */}
        </div>
      </div>
    </div>

    <SectionC />
    </div>
  )
}

export default SectionB
