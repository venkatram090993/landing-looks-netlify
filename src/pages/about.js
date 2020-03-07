import React from "react"
import Layout from "../components/layout"
import ImageSliderTwo from "../components/Layout/ImageSliders/ImageSliderTwo"
import ImageSliderFour from "../components/Layout/ImageSliders/ImageSliderFour"

const About = () => {
  return (
    <Layout>
      <div style={{ fontFamily: "Montserrat" }} class="flex flex-row">
        <ImageSliderFour />
        <ImageSliderTwo />
        <div class="flex flex-col m-auto align-top w-2/6">
          <h1 class="text-6xl -mt-40 mb-5 text-center">What are we upto?</h1>
          <p class="text-2xl text-center">
            We are building a platform for you to showcase your fashion reviews and tips the short-sweet vlog way!.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
