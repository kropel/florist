import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

import SubHero from "../components/SubHero"
import HeroPicture from "../assets/images/contact-hero.jpg"
import Container from "../components/Container"
import Address from "../components/Address"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <SubHero
        heroPicture={HeroPicture}
        title="Kontakt"
        text="Napisz do nas lub zadzwoń."
        scrollPointer="#contact"
        darkThemeArrow
      />

      <Container id="contact" style={{ padding: 0 }}>
        <Wrapper>
          <Address />
          <ContactForm />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Contact

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: auto;
`
