import React from "react"
import styled from "styled-components"
import Family from "../assets/family.svg"
import Group from "../assets/group.svg"
import Book from "../assets/book.svg"
import User from "../assets/user.svg"

const Headline = styled.h4`
  font-family: "Staatliches";
  color: white;
  text-align: center;
`

const StyledFamily = styled(Family)`
  width: 20%;
  margin: 0.5rem;
`
const StyledBook = styled(Book)`
  width: 20%;
  margin: 0.5rem;
`
const StyledUser = styled(User)`
  width: 20%;
  margin: 0.5rem;
`

const StyledGroup = styled(Group)`
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

const Preise = ({
  preisEins,
  preisZwei,
  preisDrei,
  preisVier,
  preisEinsTitle,
  preisZweiTitle,
  preisDreiTitle,
  preisVierTitle,
}) => {
  return (
    <div className="container my-5 py-5" id="fourth">
      <div className="row">
        <div className="col-md-3">
          <Card>
            <StyledUser />
            <Headline>{preisEinsTitle}</Headline>
            <span>{preisEins}</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledBook />
            <Headline>{preisZweiTitle}</Headline>
            <span>{preisZwei}</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledFamily />
            <Headline>{preisDreiTitle}</Headline>
            <span>{preisDrei}</span>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <StyledGroup />
            <Headline>{preisVierTitle}</Headline>
            <span>{preisVier}</span>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Preise
