import React from "react"
import styled from "styled-components"
import Family from "../assets/family.svg"

const Headline = styled.h4`
  font-family: "Staatliches";
  color: white;
  text-align: center;
`

const StyledFamily = styled(Family)`
  width: 20%;
  margin: 0.5rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    color: #586054;
    font-family: "source sans pro";
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }
`

const Preise = () => {
  return (
    <div className="container my-5 py-5" id="fourth">
      <div className="row">
        <div className="col-md-3">
          <Card>
            <StyledFamily />
            <Headline>Preis Nr. 1</Headline>
            <span>10,00 €</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledFamily />
            <Headline>Preis Nr. 1</Headline>
            <span>10,00 €</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledFamily />
            <Headline>Preis Nr. 1</Headline>
            <span>10,00 €</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledFamily />
            <Headline>Preis Nr. 1</Headline>
            <span>10,00 €</span>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Preise
