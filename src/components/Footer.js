import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: #152210;
  color: white;
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

const Text = styled.p`
  font-family: "source sans pro";
  font-size: 1rem;
  font-weight: 300;
`

const Footer = () => {
  return (
    <>
      <StyledFooter className="container-fluid">
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-md-4">
              <Heading>Kontakt</Heading>
              <Text>
                Nostrud mollit occaecat ut cupidatat incididunt officia non
                commodo dolore consequat aliqua sit. Incididunt in esse ut in.
                Id minim deserunt amet aliqua. Magna sit veniam consectetur esse
                ipsum ullamco laborum Lorem.
              </Text>
            </div>
            <div className="col-md-4">
              <Heading>Links</Heading>
              <Menu>
                <li>Museum Natur Pur</li>
                <li>Museum Natur Pur</li>
                <li>Museum Natur Pur</li>
              </Menu>
            </div>
            <div className="col-md-4">
              <Heading>Social Media</Heading>
              <Menu>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tinder</li>
              </Menu>
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
