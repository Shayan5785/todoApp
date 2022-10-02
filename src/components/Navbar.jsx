import React from 'react'
import styled from 'styled-components'
import Description from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  return (
    <Container>
      <span style={ {display:"flex", alignItems:"center" } }>
        <Description fontSize="large"/>
        notes
      </span>
    
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab style={{backgroundColor: "#ffffff"}} size="small" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>


    </Container>


  )
}

export default Navbar

const Container = styled.div({
  backgroundColor: "#FFD00F",
  height:'10vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'uppercase',
  gap:'10px',
  fontSize: "35px",
  margin: '20pz',
})