import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { FinalLoader } from './FinalLoader'

export const FinalSingleProductLoader = () => {
    return (
        <DIV>

            <div>
                <Flex className="skeletonContainer imageCont">
                    <Skeleton height='500px' width='350px' margin={1} />

                    <div className='skeletonDetails'>
                        <Skeleton height='10px' width='100px' margin={2} />
                        <Skeleton height='10px' width='250px' margin={2} />
                        <Skeleton height='10px' width='350px' margin={2} />
                        <Skeleton height='10px' width='50px' margin={2} />

                        <Flex className="skeletonCont">
                            <Skeleton height='50px' width='50px' margin={2} />
                            <Skeleton height='50px' width='50px' margin={2} />
                            <Skeleton height='50px' width='50px' margin={2} />
                            <Skeleton height='50px' width='50px' margin={2} />
                            <Skeleton height='50px' width='50px' margin={2} />
                        </Flex>

                        <Skeleton height='10px' width='550px' margin={2} />
                        <Skeleton height='10px' width='450px' margin={2} />
                        <Skeleton height='10px' width='750px' margin={2} />
                        <Skeleton height='10px' width='550px' margin={2} />
                        <Skeleton height='10px' width='450px' margin={2} />

                        <Flex className="skeletonContainer">
                            <Skeleton height='30px' width='100px' margin={2} />
                            <Skeleton height='30px' width='100px' margin={2} />
                        </Flex>

                    </div>

                </Flex>

                <div className='finalLoader'>
                    <FinalLoader />
                </div>

            </div>




        </DIV>
    )
}


const DIV = styled.div`

/* border: 2px solid green; */


.skeletonContainer {
    
    margin: 10px;
    display: flex;
    
    
  }

  .imageCont{
    margin-left:30px;
  }

  .skeletonDetails{
    margin-left: 80px;
  }



  .skeletonCont{
    display: flex;
  }


@media screen and (max-width: 768px) {
      /* Your styles for large devices go here */
    
        .skeletonContainer{
         flex-direction: column;
         justify-content: center;
        
     }

     .imageCont{
        margin-left: 20px;
     }
      
    }

`