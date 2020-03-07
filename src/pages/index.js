import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileView from "../components/MobileView"
import SectionB from "../components/SectionB"
import { Helmet } from "react-helmet"




const IndexPage = () => (
  <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Swank</title>
        </Helmet>
    <SEO title="Home" />
    <div class="lg:block md:block sm: hidden">
     <SectionB />
     </div>

     <div class="lg:hidden md:hidden sm: block ">
     <MobileView />
     </div>
  </Layout>
)

export default IndexPage
