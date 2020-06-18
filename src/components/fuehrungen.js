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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Fuehrungen = ({
  image,
  fuehrungeinstitle,
  fuehrungeinssubtitle,
  fuehrungeinsdesc,
  fuehrungeinsimg,
  fuehrungzweititle,
  fuehrungzweisubtitle,
  fuehrungzweidesc,
  fuehrungzweiimg,
}) => {
  return (
    <div className="container" id="third">
      <div className="row">
        <div className="col-md-12">
          <Card>
            <div className="row">
              <div className="col-md-6 left">
                <span>{fuehrungeinssubtitle}</span>
                <h3>{fuehrungeinstitle}</h3>
                <p>{fuehrungeinsdesc}</p>
                <Button>Buchen</Button>
              </div>
              <div className="col-md-6">
                <ImageWrapper>
                  <img
                    src={fuehrungeinsimg.source_url}
                    style={{
                      borderTopRightRadius: "0.2rem",
                      borderbottomRightRadius: "0.2rem",
                      height: "100%",
                      width: "100%",
                    }}
                    className="img"
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
                <span>{fuehrungzweisubtitle}</span>
                <h3>{fuehrungzweititle}</h3>
                <p>{fuehrungzweidesc}</p>
                <Button>Buchen</Button>
              </div>
              <div className="col-md-6">
                <img
                  src={fuehrungzweiimg.source_url}
                  style={{
                    borderTopRightRadius: "0.2rem",
                    borderbottomRightRadius: "0.2rem",
                    height: "100%",
                    width: "100%",
                  }}
                  className="img"
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
