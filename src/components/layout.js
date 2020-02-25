/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import "../css/output.css";
import "../css/layout.css"

import HeaderBlock from '../components/HeaderBlock'
import MobileView from '../components/MobileView'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
          <div class="w-full h-16 bg-red-600 fixed inset-0 z-50 lg:block sm: hidden"></div>

     <div class="lg:block sm: hidden mt-10">
     <HeaderBlock />
     </div>
     <div class="lg:hidden sm: block">
     <MobileView />
     </div>
     </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
