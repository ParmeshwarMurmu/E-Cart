import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"


export const AfterLogin = () => {
  return (
    <DIV>
        <Wrap>
          <WrapItem>
            <Avatar
              size='sm'
              name='Prosper Otemuyiwa'
              src={"http://localhost:3000/static/media/ECart.2e87f26d610f15288a8c.png"}
            />{' '}
          </WrapItem>
          
        </Wrap>

     
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

