import React from "react"

import styled, { keyframes } from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { AiOutlineArrowDown } from "react-icons/ai"

const SubHero = ({
  heroPicture,
  title,
  text,
  scrollPointer,
  darkThemeArrow,
}) => {
  return (
    <Container HeroPicture={heroPicture}>
      {title && <HeroTitle>{title}</HeroTitle>}
      {text && <HeroText>{text}</HeroText>}
      {scrollPointer && (
        <Arrow
          darkThemeArrow={darkThemeArrow}
          onClick={() => {
            scrollTo(scrollPointer)
          }}
        />
      )}
    </Container>
  )
}

export default SubHero

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url(${props.HeroPicture})`};
  background-position: center center;
  position: relative;
`
const HeroTitle = styled.h1`
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 3rem;
`
const HeroText = styled.p`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`
const arrowAnimation = keyframes`
  0% { bottom: 5%; }
  100% { bottom: 1%; }
`
const arrowTheme = {
  light: {
    color: "rgba(255, 255, 255, 0.6)",
    colorHover: "#eee",
    borderColor: "transparent",
    borderColorHover: "#eee",
  },
  dark: {
    color: "#999",
    colorHover: "#666",
    borderColor: "transparent",
    borderColorHover: "#666",
  },
}
const Arrow = styled(AiOutlineArrowDown)`
  animation: ${arrowAnimation} 1s ease-out infinite alternate;
  position: absolute;
  left: 50%;
  bottom: 2%;
  color: ${props =>
    props.darkThemeArrow ? arrowTheme.dark.color : arrowTheme.light.color};
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border: 2px solid
    ${props =>
      props.darkArrow
        ? arrowTheme.dark.borderColor
        : arrowTheme.light.borderColor};
  border-radius: 1.1rem;
  transition: all 0.5s;

  &:hover {
    animation-play-state: paused;
    border-color: ${props =>
      props.darkThemeArrow
        ? arrowTheme.dark.borderColorHover
        : arrowTheme.light.borderColorHover};
    color: ${props =>
      props.darkThemeArrow
        ? arrowTheme.dark.colorHover
        : arrowTheme.light.colorHover};
  }
`
