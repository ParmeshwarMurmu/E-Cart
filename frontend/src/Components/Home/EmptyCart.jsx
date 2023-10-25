import React from 'react'
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { Text } from '@chakra-ui/react';

export const EmptyCart = () => {
  return (
    <DIV>
     
      <Text fontSize='2xl'>Oops! Your Cart Is Empty</Text>
      <FaShoppingCart fontSize={'200px'} />
      <BsEmojiFrown />
    </DIV>
  )
}

const DIV = styled.div`

border: 2px solid red;


    
`
