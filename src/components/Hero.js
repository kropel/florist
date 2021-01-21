import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/videoHero.mp4"
import Poster from "../assets/images/heroPoster.jpg"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          poster={Poster}
          playsinline
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Lorem, ipsum dolor.</HeroH1>
          <HeroP>Lorem ipsum dolor sit amet consectetur.</HeroP>
          <Button big="true" primary="true" round="true" to="/trips">
            Sprawdź Ofertę
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  /* :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.2) 4%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 100%
    );
  } */
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  padding: 0rem calc((100vw- 1300px) / 2);
  max-height: 100%;
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`
