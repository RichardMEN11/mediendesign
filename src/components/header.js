import React from "react"
import styled from "styled-components"
import { Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../images/NP_Logo.png"

const StyledNavBar = styled(Navbar)`
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #152210;
  > div {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: white;
    padding: 0.5rem;
  }
  a:hover {
    text-decoration: none;
  }
`

const Header = ({}) => {
  return (
    <StyledNavBar expand="lg" sticky="top">
      <Navbar.Brand href="#">
        <img src={Logo} width="50" />
      </Navbar.Brand>
      <div className="mr-5">
        <a href="#first">Home</a>

        <a href="#second">Über uns</a>

        <a href="#third">Führungen</a>

        <a href="#fourth">Preise</a>
      </div>
    </StyledNavBar>
  )
}

export default Header
