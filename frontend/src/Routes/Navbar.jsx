import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarBadge, AvatarGroup, Button, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import styled from "styled-components"
import ECart from '../Images/ECart.png'


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

      <div style={{marginLeft: '10px', marginRight: "10px"}}>
        <Tooltip label={'Existing User'} placement='bottom'>
          <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}>About</Button></Link>
        </Tooltip>
      </div>

      <div>
        <Tooltip label={'Existing User'} placement='bottom'>
          <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}>Contact</Button></Link>
        </Tooltip>
      </div>

    </DIV>
  )
}

const DIV = styled.div`

display: flex;

align-items: center;
justify-content: space-between;


`
