import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import WomenShoes1 from "../Images/WomenShoes1.jpg"
import WomenShoes2 from '../Images/WomenShoes2.jpg'
import womenSale from '../Images/womenSale.png'

export const ShoesOfferSlideShow = () => {
  
  return (
    <DIV>
      <div className='womenLatest'>
        <Box>
          <Image className='image' src={womenSale} alt='Mens' />
        </Box>
      </div>

      <div className='sarees'>
        <Box>
          <Image className='image' src={WomenShoes1} alt='Mens' />
        </Box>
      </div>

      <div  className='mens'>
        <Box >
          <Image className='image' src={WomenShoes2} alt='Mens' />
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



      @media screen and (max-width: 639px) {
      /* Your styles for large devices go here */

      .womenLatest{
        height: 350px;
        padding-top: 10px;
      }
      
      .womenLatest .image{
        height: 310px;
        
      }

      .sarees{
        padding-top: 10px;
      }

      .sarees .image{
        height: 150px;
      }


      .mens{
        padding-top: 5px;
    
      }

      .mens .image{
        height: 150px;
      }

    }



`