/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import theme from "../style/theme"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`

const Background = styled.div`
  background-color: #0c1508;
`

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
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Background>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </Background>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
