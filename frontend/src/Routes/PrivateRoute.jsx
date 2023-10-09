import React, { useContext } from 'react'
import { appContent } from '../Context/ContextApi'
import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({children}) => {

  const {isAuth} = useContext(appContent)
  const toast = useToast()

  if(isAuth){
    return children
  }
  else{
    
    return <Navigate to={'/login'}/>
   
  }
}
