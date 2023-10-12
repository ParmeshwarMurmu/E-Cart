
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import menShoesOffer1 from '../Images/menShoesOffer1.jpg'
import menShoesOffer2 from '../Images/menShoesOffer2.jpg'
import menShoesOffer3 from '../Images/menShoesOffer3.png'

export const MenShoesOffer = () => {
    return (
        <DIV>
          <div className='menLatest'>
            <Box>
              <Image className='image' src={menShoesOffer3} alt='Mens' />
            </Box>
          </div>
    
          <div className='sarees'>
            <Box>
              <Image className='image' src={menShoesOffer1} alt='Mens' />
            </Box>
          </div>
    
          <div  className='mens'>
            <Box >
              <Image className='image' src={menShoesOffer2} alt='Mens' />
            </Box>
          </div>
    
          
    
    
        </DIV>
      )
}



const DIV = styled.div`
  
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 5px;


.menLatest{

   width: 90%;
   grid-area: 1/1/3/2;
   margin-top: 30px;
   
}

.mens{

width: 90%;
}

.sarees{

width: 90%;
}



@media screen and (max-width: 639px) {
      /* Your styles for large devices go here */

      /* .menLatest{
        height: 350px;
        padding-top: 10px;
      }
      
      .menLatest .image{
        height: 310px;
        
      }

      .sarees{
        padding-top: 10px;
      }

      .sarees .image{
        height: 150px;
      }


      .mens{
        padding-top: 10px;
    
      }

      .mens .image{
        height: 150px;
      } */

    }


    


`
