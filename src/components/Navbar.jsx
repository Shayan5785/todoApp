import React from 'react'
import styled from 'styled-components'
import Description from '@mui/icons-material/Description';

function Navbar() {
  return (
    <Container>
      <Description fontSize="large"/>
      notes
    </Container>
  )
}

export default Navbar

const Container = styled.div({
  backgroundColor: "#FFD00F",
  height:'10vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  gap:'10px',
  fontSize: "35px",
})