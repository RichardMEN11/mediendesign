import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  padding-top: 2%;
  border-bottom: 0.1px solid grey;
  background-color: inherit;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  > li:not(:first-child) {
    padding-left: 3%;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>Logo</div>
    <Menu>
      <li>Home</li>
      <li>Führungen</li>
      <li>Öffnungszeiten</li>
      <li>Anfahrt</li>
    </Menu>
  </HeaderWrapper>
)

export default Header
