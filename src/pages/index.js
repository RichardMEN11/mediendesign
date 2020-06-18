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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero image={data.imageOne.childImageSharp.fluid}></Hero>
    <First />
    <div id="second">
      <TextSection
        title="Placeholder"
        text="Lorem consequat amet velit qui minim velit cillum excepteur aute culpa veniam enim amet."
        image={data.imageOne.childImageSharp.fluid}
        posText={1}
        posImg={2}
      />
      <TextSection
        title="Placeholder"
        text="Lorem consequat amet velit qui minim velit cillum excepteur aute culpa veniam enim amet."
        image={data.imageOne.childImageSharp.fluid}
        posText={2}
        posImg={1}
      />
    </div>
    <Fuehrungen image={data.imageOne.childImageSharp.fluid} />
    <Preise />
  </Layout>
)

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
  }
`
