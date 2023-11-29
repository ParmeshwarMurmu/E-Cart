import React from 'react'
import notFound from '../Images/searchNot Found.jpg'
import { Heading, Highlight, Image } from '@chakra-ui/react'
import styled from 'styled-components'


export const NoItem = () => {
    return (
        <DIV>

            <div className='notFoundSearch'>

                <Image src={notFound} />

                <div className='head'>
                    <div>

                        <Heading as='h4' size='lg'>
                            <Highlight
                                query={['Sorry']}
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                            >
                                We're Sorry. We were not able to find a match. Try another search
                            </Highlight>
                        </Heading>

                        <Heading as='h4' size='md' mt={'10px'}>
                            Try Searching Categories Ex. jeans, t-shirts, formal, saree, blouse, palazzos
                        </Heading>
                    </div>
                </div>
            </div>
        </DIV>
    )
}

const DIV = styled.div`

/* width: 100%; */
/* border: 2px solid black; */
display: flex;
justify-content: center;
align-items: center;

.notFoundSearch{
    /* border: 2px solid red; */
    display: flex;
    /* justify-content: center;
    align-items: center; */
}

.head{
    display: flex;
     justify-content: center;
    align-items: center;
}


@media screen and (max-width: 425px) {
  
    .notFoundSearch{
        flex-direction: column;
    }

}
    
`