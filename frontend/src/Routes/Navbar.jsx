import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarBadge, AvatarGroup, Button, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import styled from "styled-components"
import ECart from '../Images/ECart.png'
import { Searching } from '../Components/Searching'


export const Navbar = () => {
  return (
    <DIV>
      <Link to={"/"}>
        <Wrap>

          <WrapItem>
            <Avatar
              size='md'
              name='Prosper Otemuyiwa'
              src={ECart}
            />
          </WrapItem>

        </Wrap>
      </Link>

      <div className='about' style={{marginLeft: '10px', marginRight: "10px"}}>
        <Tooltip label={'About'} placement='bottom'>
          <Link to={'/login'}><Button variant={'none'} fontSize={'18px'} style={{color: 'white'}}>About</Button></Link>
        </Tooltip>
      </div>

      <div className='contact'>
        <Tooltip label={'Contact'} placement='bottom'>
          <Link to={'/login'}><Button variant={'none'} fontSize={'18px'} style={{color: 'white'}}>Contact</Button></Link>
        </Tooltip>
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
/* 
@media screen and (max-width: 520px) {

.searchBar{
  display: none;
}


  
} */





`
