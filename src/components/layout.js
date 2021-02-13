import React from "react"

import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <NavBar>
        <Header />
      </NavBar>
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`

const NavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`

const Content = styled.main`
  margin-top: -80px;
`
