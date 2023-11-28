import React, { useContext } from 'react'
import { appContent } from '../Context/ContextApi'
import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'



export const PrivateRoute = ({children}) => {

  const {isAuth, setIsAuth} = useContext(appContent)
  // const toast = useToast()
  let token = localStorage.getItem('token')
  

  // console.log("PrivateRoute isAuth", isAuth);
  // console.log("pr token", token);

  if(isAuth || token){
    return children
  }
  else{
    
    return <Navigate to={'/login'}/>
   
  }
}
