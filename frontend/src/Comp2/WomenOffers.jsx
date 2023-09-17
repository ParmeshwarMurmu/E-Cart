
import React from 'react'
import styled from "styled-components"
import womenLatest from '../Images/womenLatest.jpg'
import Sarees from '../Images/Sarees.jpg'
import summerSale from '../Images/summerSale.jpg'
import { Box, Image } from '@chakra-ui/react'

export const WomenOffers = () => {
  return (
    <DIV>

      <div>
        <Box>
          <Image src={womenLatest} alt='Mens' />
        </Box>
      </div>

      <div >
        <Box>
          <Image src={Sarees} alt='Mens' />
        </Box>
      </div>

      <div >
        <Box >
          <Image src={summerSale} alt='Mens' />
        </Box>
      </div>

      

    </DIV>
  )
}


const DIV = styled.div`
 grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); /* Add this line to define 2 rows */
  gap: 10px; /* Adjust the gap as needed */


`