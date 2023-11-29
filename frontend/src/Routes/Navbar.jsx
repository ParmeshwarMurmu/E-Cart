import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar,Button, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import styled from "styled-components"
import ECart from '../Images/ECart.png'
// import { Link } from 'react-scroll';
import { AboutContactComp } from './AboutContactComp';



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

      <AboutContactComp />

    

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
