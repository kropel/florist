import React from "react"
import styled from "styled-components"

const Container = props => (
  <Cont id={props.id} style={{ ...props.style }}>
    {props.children}
  </Cont>
)

export default Container

const Cont = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
