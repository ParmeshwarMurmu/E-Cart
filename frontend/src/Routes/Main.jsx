import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import styled from "styled-components"
import { Text } from '@chakra-ui/react'
import { AdminHome } from '../Admin/AdminHome'
import FileUploadForm from '../Components/FileUpload'
import { SignInLogo } from '../Components/Home/SignInLogo'
import { NavCategories } from '../Components/NavCategories'

export const Main = () => {
  return (
    <DIV>
      
      <div style={{ width: "90%", margin: "auto" }}>
        <AllRoutes />
      </div>


    </DIV>
  )
}

const DIV = styled.div`

    
`
