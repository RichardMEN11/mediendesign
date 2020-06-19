import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Data from "../data/data.json"

const StyledFooter = styled.footer`
  background-color: #152210;
  color: white;
  font-family: "source sans pro";
  font-size: 1rem;
  font-weight: 300;
`

const Heading = styled.h6`
  font-family: "Staatliches";
  color: #586054;
`

const Menu = styled.ul`
  list-style: none;
  font-family: "source sans pro";
  font-size: 1rem;
  font-weight: 300;
`

const Footer = () => {
  const createMarkup = html => {
    return { __html: html }
  }
  return (
    <>
      <StyledFooter className="container-fluid">
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-md-4">
              <Heading className="my-3">Kontakt</Heading>
              <div
                dangerouslySetInnerHTML={createMarkup(Data.footerkontakt)}
              ></div>
            </div>
            <div className="col-md-4">
              <Heading className="my-3">Öffnungszeiten</Heading>
              <div
                dangerouslySetInnerHTML={createMarkup(Data.footeropen)}
              ></div>
            </div>
            <div className="col-md-4">
              <Heading className="my-3">Social Media</Heading>
              Facebook
              <br />
              Instagram
            </div>
          </div>
        </div>
      </StyledFooter>
      <div className="container-fluid">
        <div className="container py-3">
          <div className="row">
            <div className="col">Impressum</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
