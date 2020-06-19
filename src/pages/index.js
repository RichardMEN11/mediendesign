import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { graphql } from "gatsby"
import TextSection from "../components/textSection"
import Fuehrungen from "../components/fuehrungen"
import Zeiten from "../components/zeiten"
import Preise from "../components/preise"
import First from "../components/first"
import Data from "../data/data.json"
import firsttextimage from "../images/Bild10.png"
import secondtextimage from "../images/Bild13.jpg"
import fuehrungeinsimg from "../images/Bild5.jpg"
import fuehrungzweiimg from "../images/Bild2.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title={Data.title} subtitle={Data.subtitle}></Hero>
      <First title={Data.bigtitle} />
      <div id="second">
        <TextSection
          title={Data.firsttexttitle}
          text={Data.firsttext}
          image={firsttextimage}
          posText={1}
          posImg={2}
        />
        <TextSection
          title={Data.secondtexttitle}
          text={Data.secondtext}
          image={secondtextimage}
          posText={2}
          posImg={1}
        />
      </div>
      <Fuehrungen
        fuehrungeinstitle={Data.fuehrungeinstitle}
        fuehrungeinssubtitle={Data.fuehrungeinssubtitle}
        fuehrungeinsdesc={Data.fuehrungeinsdesc}
        fuehrungeinsimg={fuehrungeinsimg}
        fuehrungzweititle={Data.fuehrungzweititle}
        fuehrungzweisubtitle={Data.fuehrungzweisubtitle}
        fuehrungzweidesc={Data.fuehrungzweidesc}
        fuehrungzweiimg={fuehrungzweiimg}
      />
      <Preise
        preisEins={Data.preiseins}
        preisZwei={Data.preiszwei}
        preisDrei={Data.preisdrei}
        preisVier={Data.preisvier}
        preisEinsTitle={Data.preiseinstitle}
        preisZweiTitle={Data.preiszweititle}
        preisDreiTitle={Data.preisdreititle}
        preisVierTitle={Data.preisviertitle}
      />
    </Layout>
  )
}

export default IndexPage
