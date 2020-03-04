/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Children } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import "../css/output.css";
import "../css/layout.css"
import Footer from "./Layout/Footer"



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
      <div>
     <main>{children}</main>
    <Footer />
     </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
