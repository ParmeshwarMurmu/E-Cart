import { Box, Flex, Skeleton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const SkeletonBox = () => (
    <Box height='270px' m={2} borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {/* Skeleton Content */}
    </Box>
);

export const AllProductLoader = () => {

    return (
        <DIV>

            <Flex className="allProductLoader">

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>

                <div>
                    <Skeleton height='270px' width='180px' margin={2} />
                    <Skeleton height='10px' width='90px' margin={2} />
                    <Skeleton height='10px' width='180px' margin={2} />
                    <Skeleton height='10px' width='50px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                    <Skeleton height='30px' width='180px' margin={2} />
                </div>


            </Flex>

            <Flex className="allProductLoaderPagination">
                <Skeleton height='50px' width='50px' margin={2} />
                <Skeleton height='50px' width='50px' margin={2} />
                <Skeleton height='50px' width='50px' margin={2} />
                <Skeleton height='50px' width='50px' margin={2} />
                
               
            </Flex>
        </DIV>
    )
}


const DIV = styled.div`

.allProductLoader{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* gap: 20px; */
    /* row-gap: 50px; */
}


.allProductLoaderPagination{
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (max-width: 1396px) {

.allProductLoader{
  grid-template-columns: repeat(4, 1fr);
}
  

  

  
}

@media screen and (max-width: 1080px) {

.allProductLoader{
grid-template-columns: repeat(3, 1fr);
}





}

@media screen and (max-width: 425px) {

.allProductLoader{
grid-template-columns: repeat(2, 1fr);
}





}

    
`