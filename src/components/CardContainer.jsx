import React from 'react'
import Cards from './Card'
import styled from 'styled-components'

function CardContainer( {notes} ) {
  return (
    <Container>
    {notes.map( item  => (
      <Cards 
      key={item.id} 
      title={item.title}
      desciption={item.desciption}
      img={item.img} 
      />
    ))}
    </Container>
  )
}

export default CardContainer

const Container = styled.div({
  display:'flex',
  justifyContent:"center",
  flexWrap: "wrap",
})