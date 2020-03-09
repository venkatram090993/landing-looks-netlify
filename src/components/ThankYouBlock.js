import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"
import "../css/layout.css"
import "../css/thanksDiv.css"
import wreathImg from "../images/wreath.svg"
import bgPic from "../images/newImage.png"
import girls from '../images/figma-crop.png';


import FloatingDiv from "./ThanksPageComp/FloatingDiv"

// import {
//   WhatsappIcon,
//   TwitterIcon,
//   FacebookIcon,
//   WhatsappShareButton,
//   FacebookShareButton,
//   TwitterShareButton,
// } from "react-share"
import clipboard from "../images/paste.svg"

const ThankYouPage = props => {
  const [copySuccess, setCopySuccess] = useState("Copy")
  const [refId, setRefId] = useState("")
  const [url, setUrl] = useState("http://looks.surge.sh/?ref=")
  const textAreaRef = useRef(null)
  let shareUrl = "http://looks.surge.sh/?ref="


  const [textChange, setTextChange] = useState(
    " Share the link with your friends and go ahead for every share!"
  )

  const [isDelayed, setIsDelayed] = useState(false)

  useEffect(() => {
    shareUrl = "http://looks.surge.sh/" + props.refId
    setRefId(props.refId)
    setUrl("http://looks.surge.sh/?ref=" + props.refId)

    let time = props.count

    let counterTimer
    let timerToTriggerButtonDisplay

        if(props.device === "mobile"){

            timerToTriggerButtonDisplay = setTimeout(()=>{

                setIsDelayed(true);

            },5000)

        counterTimer = setInterval(() => {

        --time;

        document.getElementById("counter").innerHTML = time;

        if(time === 0){

          clearInterval(counterTimer);

          //action here

        }

        }, props.counterTime);

    }

    return () => {
      clearInterval(counterTimer)
      clearTimeout(timerToTriggerButtonDisplay)
    }
  })

  //   const shareUrl = "http://looks.surge.sh/"+refId

  function copyToClipboard(e) {
    textAreaRef.current.select()
    document.execCommand("copy")
    e.target.focus()
    setCopySuccess("Copied!")
  }

  if (typeof window === "undefined") {
    return <></>
  }

  const PrevThanksDiv = (
    <div class="lg:m-auto lg:pt-10 lg:px-24 sm: pb-10 ">
      <img
        src={wreathImg}
        class="w-3/12 lg:w-2/12 m-auto"
        alt="Thank you page"
      />
      {/* <h1 class="text-center m-auto lg:text-5xl sm: text-3xl">Thank You.</h1> */}
      <h1 class="text-center lg:text-6xl sm: text-4xl">
        You're in the queue.
      </h1>

      {/* <p class="text-center lg:text-xl sm: text-xl py-5 lg:py-1 text-green-400 font-semibold">
        We have added your email-id to our waiting list.
      </p> */}

      {/* <p class="text-center lg:text-xl my-4 lg:my-2 sm: text-xl">
            Still want to be ahead of others?
          </p> */}
      {/* <p class="text-center lg:py-5 lg:text-3xl sm: text-base lg:block md:hidden sm: hidden">
        Share the <span class="text-blue-600 text-5xl"> Link </span> <br /> and
        stay ahead for others!
      </p> */}

      <p class=" text-center  lg:pt-10 lg:pb-10 lg:text-3xl sm: text-base lg:block md:hidden sm: hidden">
        Get ahead of the Q by sharing a word about us.
      </p>

      {/* for my reference I have commented out this text */}

      {/* <p class="text-center lg:py-5 lg:text-3xl sm: text-2xl md:text-3xl lg:hidden md:block sm: block">
        Share <br /> <span class="text-blue-600 text-5xl"> screenshot </span>{" "}
        &amp; <span class="text-blue-600 text-5xl"> Link </span> and stay ahead
        for others!
      </p> */}

      <p class="text-center lg:py-5 lg:text-3xl sm: text-2xl md:text-3xl lg:hidden md:block sm: block mt-6 ">
        spread the word to get your friends join you
      </p>

      {/* <div id="counter" class=" lg:hidden sm: block md:hidden text-6xl text-center mt-6">
        {props.count}
      </div> */}

      <div>
        <form>
          <div class="flex lg:flex-row mt-5 lg:m-auto sm: flex-col sm: w-5/6 sm: m-auto" id="form-div">
            <input
              class=" lg:w-4/5 border-b-2 border-gray-600 placeholder-indigo-800 mr-2 lg:rounded-none h-10 p-2 text-indigo-800 lg:text-xl lg:text-left md:text-left sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md lg:block md:block sm: hidden"
              ref={textAreaRef}
              value={url}
            />

            <div
              role="button"
              onClick={() => {
                setCopySuccess("Copied")
                copyToClipboard()
              }}
              class=" lg:block md:block sm: hidden bg-green-500 cursor-pointer lg:m-0 lg:w-3/12 lg:flex lg:flex-row lg:justify-center  lg:rounded-none  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto"
            >
              <img src={clipboard} class="w-1/6 mr-3" />
              <p class="lg:text-base pr-2 text-white text-center">
                {document.execCommand("copy") ? copySuccess : "Copy"}
              </p>
            </div>




            { isDelayed ? <div
                id="counter"
                class=" lg:hidden sm: block md:hidden text-6xl -mt-5  text-center"
              >
                {props.count}
              </div> : null}


            <div
              role="button"
              onClick={() => {
            document.getElementById("form-div").style.transition = "all 5s ease-in";
            props.clickToSwitch()
              }}
              class=" mt-3 lg:hidden md:hidden sm: block cursor-pointer  bg-green-500 lg:m-0 lg:w-3/12 lg:flex lg:flex-row lg:justify-center  lg:rounded-none  h-10 py-1 px-2 flex flex-row justify-center sm: w-8/12 sm: rounded-md sm: m-auto sm: flex sm: flex-col sm: justify-center"
            >
              <p class="text-xl pr-2 text-white text-center">Let's go</p>
            </div>
          </div>
        </form>
      </div>

      {/* <div class="flex flex-row w-1/2 m-auto justify-between py-5 mt-5">
            <WhatsappShareButton
              class="lg:w-full sm: w-3/12"
              url={url}
            >
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              class="lg:w-full sm: w-3/12"
              url={url}
            >
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              class="lg:w-full sm: w-3/12"
              url={url}
            >
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <img src={whatsappImg} class="lg:w-2/12 sm: w-3/12" />
            <img src={twitterImg} class="lg:w-2/12 sm: w-3/12" />
            <img src={facebookImg} class="lg:w-2/12 sm: w-3/12" /> 
                </div> */}
    </div>
  )

  return (
    <Layout>
      <div class="flex flex-row h-screen">
        <div class="lg:hidden md:block sm:block">
          <FloatingDiv>{PrevThanksDiv}</FloatingDiv>
        </div>

        <div class="h-screen w-4/6 bg-white lg:block md:hidden sm: hidden">
          <div class=" lg:block md:hidden sm: hidden lg:flex lg:flex-col lg:justify-center h-full">
            {PrevThanksDiv}
          </div>
        </div>

        <div class="h-full overflow-y-hidden lg:w-3/6 md:w-full sm: w-full">
          <img src={bgPic} class=" lg:hidden md:block sm: block lg:h-full md:w-full lg:w-full sm: w-full" />
          <img src={girls} class=" lg:block md:hidden sm:hidden  lg:h-full md:w-full lg:w-full sm: h-full" />
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouPage
