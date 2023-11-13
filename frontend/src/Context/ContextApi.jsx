import { useConst } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


export const appContent = createContext()

export const ContextApi = ({children}) => {

  const [isAuth, setIsAuth] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [userCart, setUserCart] = useState([])
  const [deleteCart, setDeleteCart] = useState(false)

  useEffect(()=>{

    let token = localStorage.getItem('token')
    if(token){
      setIsAuth(true)
    }
    else{
      setIsAuth(false)
    }

  }, [])


  return (
    
    <appContent.Provider value={{isAuth, setIsAuth, totalAmount, setTotalAmount, userCart,setUserCart, deleteCart, setDeleteCart}}>{children}</appContent.Provider>
  )
}
