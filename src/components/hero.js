import React from "react"
import styled from "styled-components"
import HeroImg from "../images/Bild12.jpg"

const HeroWrapper = styled.div`
  background-image: url(HeroImg) center center;
`

const Hero = () => {
  return (
    <HeroWrapper className="container-fluid">
      <h1>NaturPur</h1>
    </HeroWrapper>
  )
}

export default Hero
