import React from 'react'
import Cards from './Card'
import styled from 'styled-components'


function CardContainer( {notes} ) {

      console.log(notes)



  return (
    <Container>

    {notes.map( (item,key)  => (

      <Cards 
      key={item.key} 
      title={item.title}
      desciption={item.desciption}
      img={item.img} 
      />

    ))}






    {/* {notes.map( item => {
      <Cards/>
    } )} */}
  

      {/* <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/> */}
    </Container>
  )
}

export default CardContainer

const Container = styled.div({
  display:'flex',
  justifyContent:"center",
  flexWrap: "wrap",
})