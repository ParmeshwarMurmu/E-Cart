
import React from 'react'
import styled from "styled-components"
import womenLatest from '../Images/womenLatest.jpg'
import Sarees from '../Images/Sarees.jpg'
import summerSale from '../Images/summerSale.jpg'
import { Box, Image } from '@chakra-ui/react'

export const WomenOffers = () => {
  return (
    <DIV className='womenOffer'>

      <div className='womenLatest'>
        <Box>
          <Image className='image' src={womenLatest} alt='Mens' />
        </Box>
      </div>

      <div className='sarees'>
        <Box>
          <Image className='image' src={Sarees} alt='Mens' />
        </Box>
      </div>

      <div className='mens'>
        <Box >
          <Image className='image' src={summerSale} alt='Mens' />
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

   width: 90%;
   grid-area: 1/1/3/2;
   
}

.mens{

width: 90%;
}

.sarees{

width: 90%;
}



/* 
@media screen and (max-width: 639px) {
 

      .womenLatest{
        height: 350px;
      }
      
      .womenLatest .image{
        height: 350px;
      }

      .sarees{
      
        padding-top: 20px;
      }

      .sarees .image{
        height: 150px;
      }
      .mens{
        padding-top: 20px;
    
      }

      .mens .image{
        height: 150px;
      }

      
    } */

    @media screen and (max-width: 425px) {
      /* Your styles for large devices go here */

      /* .womenOffer{
        width: 100%;
        height: 400px;
      } */
      
    }


   


`