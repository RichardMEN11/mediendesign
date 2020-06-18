import React from "react"
import styled from "styled-components"
import { Button } from "../style/button.style"
import Image from "gatsby-image"

const Card = styled.div`
  border: none;
  background-color: #152210;
  color: white;
  border-radius: 0.2rem;
  margin-bottom: 4rem;
  > .row > .col-md-6 {
    > span {
      color: #586054;
      font-family: "source sans pro";
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.2rem;
    }
    > h3  {
      margin-top: 1rem;
      font-family: "Staatliches";
      font-size: 2rem;
    }
    > p {
      color: #c6c8c5;
      font-family: "source sans pro";
      font-weight: 500;
    }
  }
  > .row > .left {
    padding: 1rem 4rem;
  }
`
const SmallCard = styled.div`
  position: absolute;
  height: 2rem;
  width: 5rem;
  background-color: #152210;
`

const ImageWrapper = styled.div`
  position: relative;
`
const Fuehrungen = ({ image }) => {
  return (
    <div className="container" id="third">
      <div className="row">
        <div className="col-md-12">
          <Card>
            <div className="row">
              <div className="col-md-6 left">
                <span>Subtitle</span>
                <h3>Führung 1</h3>
                <p>
                  Reprehenderit ex veniam dolore labore tempor elit cupidatat
                  commodo. Ut dolore consectetur esse amet id nulla et. Cillum
                  qui adipisicing deserunt est sunt nisi sit excepteur esse id.
                  Do tempor pariatur fugiat occaecat officia est deserunt
                  laboris aliqua sunt ut dolore proident veniam.
                </p>
                <Button>Buchen</Button>
              </div>
              <div className="col-md-6">
                <ImageWrapper>
                  <SmallCard></SmallCard>
                  <Image
                    fluid={image}
                    style={{
                      borderTopRightRadius: "0.2rem",
                      borderbottomRightRadius: "0.2rem",
                    }}
                  />
                </ImageWrapper>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <div className="row">
              <div className="col-md-6 left">
                <span>Subtitle</span>
                <h3>Führung 1</h3>
                <p>
                  Reprehenderit ex veniam dolore labore tempor elit cupidatat
                  commodo. Ut dolore consectetur esse amet id nulla et. Cillum
                  qui adipisicing deserunt est sunt nisi sit excepteur esse id.
                  Do tempor pariatur fugiat occaecat officia est deserunt
                  laboris aliqua sunt ut dolore proident veniam.
                </p>
                <Button>Buchen</Button>
              </div>
              <div className="col-md-6">
                <Image
                  fluid={image}
                  style={{
                    borderTopRightRadius: "0.2rem",
                    borderbottomRightRadius: "0.2rem",
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Fuehrungen
