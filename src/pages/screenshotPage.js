import React, {useEffect, useState, useRef} from "react"
import "../css/layout.css"
import getFirebase from "../firebase"
import sendImg from "../images/plane.svg"
import sliderOneImageOne from "../images/slider1-1.png"
import { navigate } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import "../css/c.css";

import shareIcon from "../images/share.svg"


import cracker from "../images/congratulation.svg"
import sparkle from '../images/clean.svg';

import {
    WhatsappIcon,
    TwitterIcon,
    FacebookIcon,
    WhatsappShareButton,
    FacebookShareButton,
    TwitterShareButton,
  } from "react-share"

const Rewards = ({location}) =>{








let AOS

const [url, setUrl] = useState("http://looks.surge.sh/")



useEffect(() => {
      const AOS = require("aos")
      AOS.init({
        once: true,
      })
      
      document.getElementById("instaDiv").style.transition = "all 1s ease-in-out" ;
      document.getElementById("instaDiv").style.opacity = 100;
      
      const {state} = location;
      const URLtick = state.refURL;

      setUrl(URLtick)


      
}, [])


  
useEffect(() => {
      if (AOS) {
        AOS.refresh()
      }
})



const textAreaRef = useRef(null);

function copyToClipboard(e) {
  textAreaRef.current.select();
  document.execCommand('copy');
  // This is just personal preference.
  // I prefer to not show the the whole text area selected.
  e.target.focus();
};

function bottomSheet(){

    document.getElementById("backDrop").style.transition = "all 1s ease-in-out" ;
    document.getElementById("backDrop").style.zIndex = 100;

    document.getElementById("bottomSheet").style.transition = "all 1s ease-in-out" ;
    document.getElementById("bottomSheet").style.zIndex = 100;

}



function closeBottomSheet(){

    setTimeout(()=>{

        document.getElementById("backDrop").style.zIndex = -1;

            document.getElementById("bottomSheet").style.zIndex = -1;  
    }, 100)

   

}


const [showRefURL, setShowRefURL] = useState(true)
  
  let showRefURLComp = null

  if (showRefURL) {
    showRefURLComp = (
        <div 
        onClick={()=>{
            copyToClipboard();
            alert("copied!!!")
          
      }} id="instaDiv" style={{background:"RGBA(180,180,180,0.5)", opacity:0}}  class="text-center text-md text-white font-bold py-2 w-11/12  rounded-md z-20 showRefURL flex flex-row justify-center">

      <p class="mr-2" id="elem" >check </p> <input id="select" class="w-7/12 bg-transparent"  ref={textAreaRef}
          value={url} />   <img src={cracker} class="w-6" />  <img src={sparkle} class="w-8 h-6" />
      </div>
)
  }

  if (typeof window === "undefined") {
    return <></>
  }

return (
    <div>
      <div class=" h-screen flex flex-row">
  <div class="relative" onClick={closeBottomSheet}>
      {showRefURLComp}
            <img
              src={sliderOneImageOne}
              class="h-screen w-full"
              alt="prettyGirl-1"
            />
          </div>
             <div
            class="screenshot-container"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="1800"
            
          >
            <p class="leading-normal text-white text-5xl text-center">
            <span class="font-bold text-green-600">Looks</span>, luxury fashion vlog.
            </p>
            <p class="leading-normal text-white text-xl mt-2 text-center">
            Tryhaul, outfit ideas, style tips and more.
            </p>
            <div class="flex mt-5 flex-col w-5/6 m-auto">
              <input class="h-10 p-2 text-black mb-5 w-full m-auto text-center rounded-md" placeholder="Enter e-mail"/>
              <div
               style={{ background: "#19328C" }}
                class=" cursor-pointer h-10 py-2 px-1 flex flex-row justify-center w-10/12 rounded-md m-auto "
              >
                <img src={sendImg} class="w-8 mr-1 " />
                <p class="lg:text-base pr-2 text-white">Get early access</p>
              </div>

              <div style={{background:"RGBA(0,0,0,0.7)"}} class="mt-10 w-1/6 m-auto rounded-full flex flex-row justify-center"   onClick={bottomSheet}>
              <img src={shareIcon} class=" p-3 " />
              </div>
            </div>
          </div>
          </div>
          
          <div id="backDrop" onClick={closeBottomSheet} > 

          <div id="bottomSheet" class="flex flex-row w-1/2 m-auto justify-evenly rounded-t-lg py-5 mt-5">
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

          </div>


          </div>

        </div>
  )
}



export default Rewards