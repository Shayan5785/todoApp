import React from 'react'
import Cards from './Card'
import styled from 'styled-components'

function CardContainer() {
  return (
    <Container>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </Container>
  )
}

export default CardContainer

const Container = styled.div({
  display:'flex',
  justifyContent:"center",
  flexWrap: "wrap",
})