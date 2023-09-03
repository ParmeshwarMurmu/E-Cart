import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import styled from "styled-components"
import { Text } from '@chakra-ui/react'

export const Main = () => {
  return (
    <DIV>
        <div style={{marginTop: "20px"}}>
        <AllRoutes />
        </div>
    </DIV>
  )
}

const DIV = styled.div`
background-color: #0ce369;
margin-top: 0px;
padding: 0px;
margin-top: 100px;

.nav{
    /* position: sticky; */
    position: fixed;
    width: 100%;
    top: 0px;
    height: 45px;
    /* background-color: #1ac1fe; */
}

.categoriesSection{
  border: 2px solid black;
  position: sticky;
  top: 45px;
}
    
`
