import { useConst } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


export const appContent = createContext()

export const ContextApi = ({children}) => {

  const [isAuth, setIsAuth] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)


  return (
    
    <appContent.Provider value={{isAuth, setIsAuth, totalAmount, setTotalAmount}}>{children}</appContent.Provider>
  )
}
