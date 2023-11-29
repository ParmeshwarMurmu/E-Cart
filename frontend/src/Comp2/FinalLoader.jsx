import { Flex, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const FinalLoader = () => {
    return (
        <DIV>
            <Flex className="skeletonContainer">
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
                <Skeleton height='250px' width='200px' margin={1} />
            </Flex>
        </DIV>
    )
}

const DIV = styled.div`

.skeletonContainer {
    /* border: 2px solid red; */
    margin: 10px;
  }

`
