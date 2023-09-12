import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import styled from "styled-components"
import { Text } from '@chakra-ui/react'
import { AdminHome } from '../Admin/AdminHome'
import FileUploadForm from '../Components/FileUpload'
import { SignInLogo } from '../Components/Home/SignInLogo'

export const Main = () => {
  return (
    <DIV>
         <div style={{ width: "80%", margin: "auto"}}>
        <AllRoutes />
        </div> 


    </DIV>
  )
}

const DIV = styled.div`

    
`
