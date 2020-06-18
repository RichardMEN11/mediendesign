import React from "react"
import Image from "gatsby-image"

const Zeiten = ({ image }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <Image
            fluid={image}
            style={{
              height: "40vh",
            }}
          />
        </div>
        <div className="col-md-6">
          <div className="container">
            <h3>Öffnungszeiten:</h3>
            <ul>
              <li>Montag: 09:00 - 20:00</li>
              <li>Montag: 09:00 - 20:00</li>
              <li>Montag: 09:00 - 20:00</li>
              <li>Montag: 09:00 - 20:00</li>
              <li>Montag: 09:00 - 20:00</li>
              <li>Montag: 09:00 - 20:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zeiten
