import { useConst } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


export const appContent = createContext()

export const ContextApi = ({children}) => {

    const [Params, setParams] = useState("");

    const handleClick = (cat) => {
        setParams(cat);
      };

    

  return (
    
    <appContent.Provider value={{handleClick, Params}}>{children}</appContent.Provider>
  )
}
