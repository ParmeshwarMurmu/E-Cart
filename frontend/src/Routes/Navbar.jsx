import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
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
            />{' '}
          </WrapItem>
          
        </Wrap>
      </Link>
      {/* <Link to={"/product"}>Product</Link> */}
    </DIV>
  )
}

const DIV = styled.div`
/* margin-top: 50px; */
/* border: 2px solid red; */
display: flex;
/* justify-content: center; */
align-items: center;
justify-content: space-between;


`
