import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterLinkWrapper>
          <FooterDesc>
            <h1>Kwiaciarnia Ismena</h1>
            <p style={{ marginBottom: "1rem" }}>Kwiaciarnia z tradycjami.</p>
            <p>Jesteśmy z Wami już 38 lat.</p>
          </FooterDesc>
          <FooterLinkItems>
            <FooterLinkTitle>Mapa strony</FooterLinkTitle>
            <FooterLink to="/">Kwiaciarnia Ismena</FooterLink>
            <FooterLink to="/oferta">Oferta</FooterLink>
            <FooterLink to="/onas">O nas</FooterLink>
            <FooterLink to="/kontakt">Kontakt</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        {/* <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/about">Contact</FooterLink>
            <FooterLink to="/about">Destinations</FooterLink>
            <FooterLink to="/about">Sponsorships</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social media</FooterLinkTitle>
            <FooterLink to="/about">Contact</FooterLink>
            <FooterLink to="/about">Destinations</FooterLink>
            <FooterLink to="/about">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper> */}
      </FooterContainer>
      <WebsiteRights>
        Kwiaciarnia Ismena © {new Date().getFullYear()}
      </WebsiteRights>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer``

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  color: #000;
  background: #fafafb;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`

const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

const WebsiteRights = styled.p`
  border-top: 1px solid #eee;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  color: #444;
`
