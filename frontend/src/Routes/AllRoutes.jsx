import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from './Home'
import { Product } from './Product'
import { appContent } from '../Context/ContextApi'

export const AllRoutes = () => {
  const {handleClick, Params} = useContext(appContent)

  return (
    <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
    </Routes>
  )
}
