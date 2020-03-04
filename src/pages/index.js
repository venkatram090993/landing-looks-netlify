import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileView from "../components/MobileView"
import SectionB from "../components/SectionB"
import SectionC from "../components/SectionC"
import TestThanks from "./testThanks"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="lg:block md:block sm: hidden">
     <SectionB />
     </div>

     <div class="lg:hidden md:hidden sm: block ">
     <MobileView />
     </div>

     <div class="py-10">
     <SectionC />
     </div>

     {/* <TestThanks /> */}
    
  </Layout>
)

export default IndexPage
