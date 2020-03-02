import React, { useRef, useState } from "react"
import Layout from "../components/layout"
import "../css/layout.css"
import bannerImg from "../images/banner-image.png"
import whatsappImg from "../images/instagram.svg"
import twitterImg from "../images/twitter.svg"
import facebookImg from "../images/facebook.svg"
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
import AOS from "aos"
import "aos/dist/aos.css"

const ThankYouPage = ({ location }) => {
  console.log("loc", location.state.refId)
  const referralId = location.state.refId

  const [copySuccess, setCopySuccess] = useState("")
  const textAreaRef = useRef(null)

const shareUrl = "http://looks.surge.sh/"+referralId

  function copyToClipboard(e) {
    textAreaRef.current.select()
    document.execCommand("copy")
    e.target.focus()
    setCopySuccess("Copied!")
  }

  return (
    <Layout>
      <div class="bg-gray-200 font-sans">
        <div class="h-screen flex flex-row justify-bottom thankYouBottom">
          <button
            class="button bg-white rounded-lg px-5 py-2 text-purple-800 lg:text-xl sm: text-base"
            onClick={() => {
              navigate("/")
            }}
          >
            Head to Home page
          </button>
        </div>

        <div
          class="py-8 flex flex-col justify-center text-white rounded-lg lg:w-2/6 sm: w-5/6 sm: px-2 m-auto thanks-div"
          style={{ background: "RGBA(0,0,0,0.8" }}
        >
          <img src={wreathImg} class="w-3/12 m-auto" />
          <h1 class="text-center m-auto lg:text-5xl sm: text-3xl">
            Thank You.
          </h1>
          <p class="text-center lg:text-xl sm: text-base py-5 text-green-400 font-semibold">
            You will now be among the first few to use Looks app.
          </p>

          <p class="text-center lg:text-2xl lg:my-4 sm: text-sm">
            Still want to be ahead of others?
          </p>
          <p class="text-center lg:text-xl sm: text-sm">
            Share the link with your friends and go ahead for every share!
          </p>
          <div>
            <form>
              <div class="flex lg:flex-row mt-5 lg:w-full sm: flex-col sm: w-5/6 sm: m-auto">
                <input
                  class="lg:w-4/5 placeholder-indigo-800 pl-5 lg:rounded-none h-10 p-2 text-indigo-800 lg:text-xl lg:text-left md:text-left sm: mb-5 sm: w-full sm: m-auto sm: text-center sm: rounded-md"
                  ref={textAreaRef}
                  value={referralId}
                />

                <div
                  onClick={copyToClipboard}
                  style={{ background: "#19328C" }}
                  class=" cursor-pointer lg:m-0 lg:w-6/12 lg:rounded-none  h-10 py-2 px-2 flex flex-row justify-center sm: w-9/12 sm: rounded-md sm: m-auto "
                >
                  <p class="lg:text-base pr-2 text-white">
                    {document.execCommand("copy") ? copySuccess : "Copy"}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-row w-1/2 m-auto justify-between py-5 mt-5">
            <WhatsappShareButton
              class="lg:w-2/12 sm: w-3/12"
              url={shareUrl}
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              class="lg:w-2/12 sm: w-3/12"
              url={shareUrl}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              class="lg:w-2/12 sm: w-3/12"
              url={shareUrl}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            {/* <img src={whatsappImg} class="lg:w-2/12 sm: w-3/12" />
            <img src={twitterImg} class="lg:w-2/12 sm: w-3/12" />
            <img src={facebookImg} class="lg:w-2/12 sm: w-3/12" /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouPage
