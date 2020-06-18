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

const IndexPage = ({ data }) => {
  const {
    title,
    subtitle,
    bigtitle,
    firsttexttitle,
    firsttext,
    firsttextimage,
    secondtexttitle,
    secondtext,
    secondtextimage,
    heroimage,
    fuehrungeinstitle,
    fuehrungeinssubtitle,
    fuehrungeinsdesc,
    fuehrungeinsimg,
    fuehrungzweititle,
    fuehrungzweisubtitle,
    fuehrungzweidesc,
    fuehrungzweiimg,
    preiseins,
    preiszwei,
    preisdrei,
    preisvier,
    preiseinstitle,
    preiszweititle,
    preisdreititle,
    preisviertitle,
  } = data.text.edges[0].node.acf
  return (
    <Layout>
      <SEO title="Home" />
      <Hero image={heroimage} title={title} subtitle={subtitle}></Hero>
      <First title={bigtitle} />
      <div id="second">
        <TextSection
          title={firsttexttitle}
          text={firsttext}
          image={firsttextimage}
          posText={1}
          posImg={2}
        />
        <TextSection
          title={secondtexttitle}
          text={secondtext}
          image={secondtextimage}
          posText={2}
          posImg={1}
        />
      </div>
      <Fuehrungen
        image={data.imageOne.childImageSharp.fluid}
        fuehrungeinstitle={fuehrungeinstitle}
        fuehrungeinssubtitle={fuehrungeinssubtitle}
        fuehrungeinsdesc={fuehrungeinsdesc}
        fuehrungeinsimg={fuehrungeinsimg}
        fuehrungzweititle={fuehrungzweititle}
        fuehrungzweisubtitle={fuehrungzweisubtitle}
        fuehrungzweidesc={fuehrungzweidesc}
        fuehrungzweiimg={fuehrungzweiimg}
      />
      <Preise
        preisEins={preiseins}
        preisZwei={preiszwei}
        preisDrei={preisdrei}
        preisVier={preisvier}
        preisEinsTitle={preiseinstitle}
        preisZweiTitle={preiszweititle}
        preisDreiTitle={preisdreititle}
        preisVierTitle={preisviertitle}
      />
    </Layout>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Bild12.jpg" }) {
      ...fluidImage
    }
    text: allWordpressPage(filter: { title: { eq: "Home" } }) {
      edges {
        node {
          acf {
            title
            subtitle
            bigtitle
            firsttexttitle
            firsttext
            firsttextimage {
              source_url
            }
            secondtexttitle
            secondtext
            secondtextimage {
              source_url
            }
            heroimage {
              source_url
            }
            fuehrungeinstitle
            fuehrungeinssubtitle
            fuehrungeinsdesc
            fuehrungeinsimg {
              source_url
            }
            fuehrungzweititle
            fuehrungzweisubtitle
            fuehrungzweidesc
            fuehrungzweiimg {
              source_url
            }
            preiseins
            preiszwei
            preisdrei
            preisvier
            preiseinstitle
            preiszweititle
            preisdreititle
            preisviertitle
          }
        }
      }
    }
  }
`
