import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/Container"
import { oferts } from "../data/oferta"
import img0 from "../assets/images/oferta-slub.jpg"
import img1 from "../assets/images/oferta-pogrzeb.jpg"
import img2 from "../assets/images/oferta-komunie.jpeg"
import img3 from "../assets/images/oferta-swieta.jpg"
import img4 from "../assets/images/oferta-imieniny.jpg"

const images = [img0, img1, img2, img3, img4]

const Card = ({ title, description, image }) => {
  return (
    <CardContainer>
      <CardHeader image={images[image]}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description.map((desc, index) => (
          <CardDesc key={`desc-${desc}-${index}`}>{desc}</CardDesc>
        ))}
      </CardContent>
    </CardContainer>
  )
}

const Oferta = () => (
  <Layout>
    <SEO title="Oferta" />
    <Container>
      <Wrapper>
        {oferts.map((offer, index) => (
          <Card {...offer} key={`card-${index}`} />
        ))}
      </Wrapper>
    </Container>
  </Layout>
)

export default Oferta

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  border-radius: 20px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  margin: 3rem 2rem;
  align-items: center;
  overflow: hidden;
`

const CardHeader = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const CardTitle = styled.h2`
  padding: 1rem 0;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #f26a2e;
`

const CardContent = styled.div`
  width: 100%;
  height: 40%;
  background-color: #eee;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const CardDesc = styled.p`
  line-height: 1.9rem;
  color: #444;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  font-size: clamp(1rem, 2vw, 1.3rem);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`
