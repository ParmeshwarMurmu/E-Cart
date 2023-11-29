import { Flex, Skeleton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

export const CartPageLoader = () => {
  return (
    <DIV>
            <Flex className="cartPageLoder">

               
               <div>
            

                <div>
                <Skeleton height='40px' width='300px' marginBottom={8}  />

                <Flex className='cartButtons'>

                <Skeleton height='250px' width='200px' marginRight={4} marginBottom={8}/>

                <div>
                <Skeleton height='15px' width='300px' margin={4} />
                <Skeleton height='15px' width='100px' margin={4} />
                <Skeleton height='15px' width='200px' margin={4} />
                <Skeleton height='50px' width='200px' margin={4} />

                </div>
                
                </Flex>
                </div>
               


                <div>
                

                <Flex className='cartButtons'>

                <Skeleton height='250px' width='200px' marginRight={4} marginBottom={8} />

                <div>
                <Skeleton height='15px' width='300px' margin={4} />
                <Skeleton height='15px' width='100px' margin={4} />
                <Skeleton height='15px' width='200px' margin={4} />
                <Skeleton height='50px' width='200px' margin={4} />

                </div>
                
                </Flex>
                </div>


                <div>
                

                <Flex className='cartButtons'>

                <Skeleton height='250px' width='200px' marginRight={4}  marginBottom={8}/>

                <div>
                <Skeleton height='15px' width='300px' margin={4} />
                <Skeleton height='15px' width='100px' margin={4} />
                <Skeleton height='15px' width='200px' margin={4} />
                <Skeleton height='50px' width='200px' margin={4} />

                </div>
                
                </Flex>
                </div>



                <div>
               

                <Flex className='cartButtons'>

                <Skeleton height='250px' width='200px' marginRight={4}  marginBottom={8}/>

                <div>
                <Skeleton height='15px' width='300px' margin={4} />
                <Skeleton height='15px' width='100px' margin={4} />
                <Skeleton height='15px' width='200px' margin={4} />
                <Skeleton height='50px' width='200px' margin={4} />

                </div>
                
                </Flex>
                </div>
               
               
             
                </div>

                

            </Flex>
        
        </DIV>
  )
}

const DIV = styled.div`

.cartPageLoder{
   
    flex-direction: column;
    
}

.cartButtons{
    display: flex;
}
    
`