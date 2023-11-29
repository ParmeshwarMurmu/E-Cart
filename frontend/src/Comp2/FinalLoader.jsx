import { Flex, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const FinalLoader = () => {
    return (
        <DIV>
            <Flex className="skeleton-Container">
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton className='loader' height='250px' width='200px' margin={1} />
                <Skeleton className='loader' height='250px' width='200px' margin={1} />
                <Skeleton className='loader' height='250px' width='200px' margin={1} />
                {/* <Skeleton height='250px' width='200px' margin={1} /> */}
               
             
            </Flex>
        </DIV>
    )
}

const DIV = styled.div`

.skeleton-Container {
    /* border: 2px solid red; */
    margin: 10px;
  }



  @media screen and (max-width: 768px) {
      /* Your styles for large devices go here */
     .loader{
        display: none;
     }
      
    }

`
