import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background-color: #152210;
  color: white;
  position: relative;
  min-height: 20vh;
  h2 {
    font-family: "Staatliches";
    color: #0c1508;
    font-size: 10rem;
    position: absolute !important;
    top: 0;
    left: 0;
  }

  p {
    position: absolute;
    top: 20vh;
    font-family: "source sans pro";
    font-size: 1rem;
    font-weight: 300;
    max-width: 70%;
    padding: 3rem;
  }
`

const First = ({ title }) => {
  return (
    <Background className="container-fluid">
      <div className="container">
        <div className="row">
          <h2>{title}</h2>
        </div>
      </div>
    </Background>
  )
}

export default First
