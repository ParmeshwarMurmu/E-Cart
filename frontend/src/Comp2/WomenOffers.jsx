
import React from 'react'
import styled from "styled-components"
import womenLatest from '../Images/womenLatest.jpg'
import Sarees from '../Images/Sarees.jpg'
import summerSale from '../Images/summerSale.jpg'
import { Box, Image } from '@chakra-ui/react'

export const WomenOffers = () => {
  return (
    <DIV>

      <div className='womenLatest'>
        <Box>
          <Image src={womenLatest} alt='Mens' />
        </Box>
      </div>

      <div className='sarees'>
        <Box>
          <Image src={Sarees} alt='Mens' />
        </Box>
      </div>

      <div  className='mens'>
        <Box >
          <Image src={summerSale} alt='Mens' />
        </Box>
      </div>

      




    </DIV>
  )
}


const DIV = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0px;


.womenLatest{
   border: 2px solid green;
   width: 90%;
   grid-area: 1/1/3/2;
   
}

.mens{
border: 2px solid red;
width: 90%;
}

.sarees{
border: 2px solid black ;
width: 90%;
}



`