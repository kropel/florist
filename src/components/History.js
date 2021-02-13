import React from "react"
import styled from "styled-components"

// import { useWindowSize } from "../hooks/useWindowSize"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FooterImage from "../assets/images/aboutUs-footer.jpg"
import Container from "../components/Container"

const History = props => {
  // const { width } = useWindowSize()
  const width = 800

  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: { original: { src: { regex: "/history/" } } }) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const Images = data.allImageSharp.edges.map(image => (
    <Image fluid={image.node.fluid} />
  ))
  const middleText = (
    <TextWrapper>
      <Text>
        Dziękujemy Wam za to, że mogliśmy przysłużyć się do wykreowania Waszych
        cudownych historii i że Wy jesteście częścią naszej. Dziękujemy również
        za to, że choć lata mijają, to dalej tak chętnie do nas wracacie i
        niezmiennie wychodzicie zadowoleni – nie tylko ze względu na kwiatowe
        upominki, które trzymacie w rękach, ale także na mile spędzony czas.
        Ogrom satysfakcji, którą doświadczamy tworząc “małe dzieła sztuki” dla
        każdego z Was napędza nas do dalszego działania.
      </Text>
    </TextWrapper>
  )

  const middleSection = (
    <Wrapper>
      {width <= 768 && middleText}
      {Images[1]}
      {width > 768 && middleText}
    </Wrapper>
  )

  return (
    <>
      <Container id="history">
        <Wrapper>
          <TextWrapper>
            <Text>
              Od 38 lat w praktycznie niezmienionym składzie towarzyszymy Wam w
              różnych chwilach życia. Czy to smutnych, czy wesołych, zawsze
              dokładaliśmy i dalej dokładamy wszelkich starań, by pięknymi
              kwiatami uświetnić każdą z nich. Często zwierzacie nam się, że już
              od dziecka zaglądaliście z rodzicami do naszej kwiaciarni, by
              wybrać rośliny dla najbliższych i że bukiety i kompozycje
              stworzone przez nas były ważną częścią kolejnych, przełomowych dla
              Was momentów.
            </Text>
          </TextWrapper>
          {Images[2]}
        </Wrapper>

        {middleSection}

        <Wrapper>
          <TextWrapper>
            <Text>
              Różnorodność styli, technik i doświadczenie zdobyte przez te
              dekady dają nam nieograniczone możliwości - czy to w tworzeniu
              tradycyjnych wiązanek czy też bardziej nietuzinkowych. Ci, którzy
              nas odwiedzili wiedzą, że liczymy się ze zdaniem klienta, a jeśli
              trzeba chętnie dzielimy się radami. Oczywiście sugestia i uśmiech,
              który nie schodzi nam z twarzy są gratis.
            </Text>
          </TextWrapper>
          {Images[0]}
        </Wrapper>
      </Container>
      <Footer>
        <FooterWrapper width={width}>
          <FooterText>
            Wszystkich, którzy jeszcze nie trafili do nas serdecznie
          </FooterText>
          <Invite>ZAPRASZAMY!</Invite>
          <FooterText>
            Razem możemy czerpać radość z wyjątkowości i piękna kwiatów.
          </FooterText>
        </FooterWrapper>
      </Footer>
    </>
  )
}

export default History

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Footer = styled.div`
  /* background-image: url(${FooterImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */
  background: #f26a2e;
  /* background: linear-gradient(
    45deg,
    rgba(70, 176, 204, 1) 0%,
    rgba(153, 209, 236, 1) 26%,
    rgba(70, 176, 204, 1) 80%
  ); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 850px; */
  width: 100%;
`
const FooterWrapper = styled.div`
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0.1) 100%
  ); */
  max-width: ${({ width }) => (width <= 768 ? "90%" : "80%")};
  padding: ${({ width }) => (width <= 768 ? "1rem" : "4rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
  padding: 3rem 0;
  line-height: 1.6rem;
  color: #444;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  font-size: clamp(1rem, 2vw, 1.3rem);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`

const FooterText = styled.h3`
  color: #fff;
  letter-spacing: 0.11rem;
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 400;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
`
const Invite = styled(FooterText)`
  letter-spacing: 0.2rem;
  font-family: "Amatic SC";
  font-size: clamp(3.5rem, 3.6vw, 5rem);
`

const Image = styled(Img)`
  border-radius: 15px;
  width: 80%;
`
