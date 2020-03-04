import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"
import "../css/layout.css"
import { navigate } from "gatsby"
import wreathImg from "../images/wreath.svg"
import {
  WhatsappIcon,
  TwitterIcon,
  FacebookIcon,
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share"

import clipboard from '../images/paste.svg'

const ThankYouPage = ({location}) => {
  const [copySuccess, setCopySuccess] = useState("Copied")
  const [refId, setRefId] = useState("")
  const [url, setUrl] = useState("http://looks.surge.sh/")
  const textAreaRef = useRef(null)
  let shareUrl = "http://looks.surge.sh/"

  const [textChange, setTextChange] = useState(
    " Share the link with your friends and go ahead for every share!"
  )

  useEffect(() => {
    shareUrl = "http://looks.surge.sh/"
    setRefId("hi")
    setUrl("http://looks.surge.sh?")
  }, [])
  

  useEffect(()=>{
    

    let time = 5;

    let counterTimer = setInterval(() => {

    --time;

    document.getElementById("counter").innerHTML = time;
    if(time === 0){

      clearInterval(counterTimer); 

      const emailValue = location.state.emailID;

      navigate("/screenshotPage",{state: {
        refURL : "www.looks.surge.sh",
        emailID : emailValue
    }})
      
    }
        
    }, 1200);

    

  })

  const shareUrlToShare = "http://looks.surge.sh/"+"?URLSDD"

  function copyToClipboard(e) {
    textAreaRef.current.select()
    document.execCommand("copy")
    e.target.focus()
    setCopySuccess("Copy");
  }

  if (typeof window === "undefined") {
    return <></>
  }



  return (
    <>
      <div class="bg-gray-200 font-sans">
        <div class="h-screen flex flex-row justify-bottom thankYouBottom">
          <button
            class="button bg-white rounded-lg px-5 py-2 text-purple-800 lg:text-xl sm: text-base sm: py-1"
            onClick={() => {

                const emailValue = location.state.emailID;
                
              navigate("/",{state: {
                refURL : "www.looks.surge.sh",
                emailID : emailValue
            }})

            }}
          >
            Head to Home page
          </button>
        </div>

        <div
          class="lg:py-4 flex flex-col justify-center text-white rounded-lg lg:w-4/6 sm: w-5/6 sm: px-2 sm: py-1 sm: pt-10 m-auto thanks-div"
          style={{ background: "RGBA(0,0,0,0.8" }}
        >
          <img
            src={wreathImg}
            class="w-3/12 lg:w-2/12 m-auto"
            alt="Thank you page"
          />
          <h1 class="text-center m-auto lg:text-5xl sm: text-3xl">
            Thank You.
          </h1>
          <p class="text-center lg:text-xl sm: text-base py-5 lg:py-1 text-green-400 font-semibold">
            You will now be among the first few to use Looks app.
          </p>

          <p class="text-center lg:text-2xl my-4 lg:my-2 sm: text-sm">
            Still want to be ahead of others?
          </p>
          <p class="text-center lg:py-5 lg:text-3xl sm: text-sm lg:block md:block sm: hidden">
            {textChange}
          </p>
          <p class="text-center lg:py-5 lg:text-3xl sm: text-sm lg:hidden md:hidden sm: block">
           Share screenshot &amp; Link and go ahead for others!
          </p>

          <div  id="counter" class="text-6xl text-center mt-10 -mb-10">5</div>
          <div>
            <form>
              <div class="flex lg:flex-row justify-center mt-5 lg:w-3/6 sm: flex-col sm: w-5/6 sm: m-auto">
                <input
                  class=" lg:block md:block sm: hidden lg:w-4/6 placeholder-indigo-800 mr-5 pl-5 lg:rounded-none h-10 p-2 text-indigo-800 lg:text-xl lg:text-left md:text-left sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md"
                  ref={textAreaRef}
                  value={refId}
                />

                <div
                  role="button"
                  onClick={() => {
                    setTextChange("Aye! Now share it with your friends and let them know you are ahead.")
                    // copyToClipboard()
                  }}
                  style={{ background: "#19328C" }}
                  class=" lg:block md:block sm: hidden  cursor-pointer lg:m-0 lg:w-3/12 lg:flex lg:flex-row lg:justify-center  lg:rounded-none  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto "
                >  
                <img src={clipboard} class="w-1/6   mr-3" />
                <p class="lg:text-base pr-2 text-white text-center">
                    {document.execCommand("copy") ? copySuccess : "Copy"}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-row w-1/2 m-auto justify-between py-5 mt-5">
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYouPage
