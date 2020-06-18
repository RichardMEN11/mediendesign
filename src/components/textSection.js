import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`

const Heading = styled.h2`
  font-family: "Staatliches";
  font-size: 2rem;
`

const Text = styled.p`
  font-family: "source sans pro";
  font-size: 1rem;
  font-weight: 300;
`

const TextSection = ({ title, text, image, posText, posImg }) => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className={`col-md-6 order-${posText}`}>
          <FlexContainer>
            <div>
              <Heading>{title}</Heading>
              <Text>{text}</Text>
            </div>
          </FlexContainer>
        </div>
        <div className={`col-md-6 order-${posImg}`}>
          <img src={image.source_url} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default TextSection
