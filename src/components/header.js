import React from "react"
import styled from "styled-components"
import { Navbar, Nav } from "react-bootstrap"

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

const Header = ({ siteTitle }) => {
  return (
    <StyledNavBar expand="lg" sticky="top">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
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
