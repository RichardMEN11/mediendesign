import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Arrow from "../assets/download.svg"

const HeroWrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  > h1 {
    font-family: "Staatliches";
    font-size: 6rem;
    animation: animateIn 1s ease;
  }
  > p {
    font-family: "source sans pro";
    font-size: 1.5rem;
    font-weight: 300;
    animation: fadeIn 1s ease;
    animation-delay: 5s;
  }

  @keyframes animateIn {
    0% {
      letter-spacing: 1.2rem;
    }

    100% {
      letter-spacing: 0rem;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const Button = styled.a`
  color: white;
  background-color: inherit;
  border: 2px solid white;
  padding: 0.8rem 3rem;
  border-radius: 30px;
  animation: 2s ease all;
  &:hover {
    background-color: white;
    color: black !important;
    text-decoration: none;
  }
`

const Background = styled.div`
  background: ${props => `url(${props.img})`};
  background-position: bottom;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
`

const Hero = ({ image, title, subtitle }) => {
  return (
    <Background img={image.source_url}>
      <div id="first">
        <HeroWrapper className="container-fluid">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Button href="#second">Mehr Erfahren</Button>
        </HeroWrapper>
      </div>
    </Background>
  )
}

export default Hero
