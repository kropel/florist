import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import SubHero from "../components/SubHero"
import History from "../components/History"
import Hero from "../assets/images/aboutUs-hero.jpg"

const AboutUs = props => {
  return (
    <Layout>
      <SEO title="O nas" />
      <SubHero
        title="Poznaj swoją Kwiaciarknię"
        text="Jesteśmy z Wami od 1983r."
        scrollPointer="#history"
        heroPicture={Hero}
      />
      <History />
    </Layout>
  )
}

export default AboutUs
