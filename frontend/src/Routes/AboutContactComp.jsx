import { Button} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';

export const AboutContactComp = () => {

    return (
        <DIV>
            <div className='about' style={{ marginLeft: '10px', marginRight: "10px" }}>
                {/* <Tooltip label={'Contact'} placement='bottom'> */}
                <Link to={'aboutSection'} smooth={true} duration={500} offset={-50}><Button variant={'none'} fontSize={'18px'} style={{ color: 'white' }}>About</Button></Link>
                {/* </Tooltip> */}
            </div>

            <div className='contact'>
                {/* <Tooltip label={'Contact'} placement='bottom'> */}
                <Link to={'aboutSection'} smooth={true} duration={500} offset={-50}><Button variant={'none'} fontSize={'18px'} style={{ color: 'white' }}>Contact</Button></Link>
                {/* </Tooltip> */}
            </div>
        </DIV>
    )
}

const DIV = styled.div`
display: flex;

align-items: center;
justify-content: space-between;


@media screen and (max-width: 520px) {
 
 .about{
   display: none;
 }

 .contact{
   display: none;
 }



}



    
`
