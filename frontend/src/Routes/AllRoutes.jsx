import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from './Home'
import { Product } from './Product'
import { appContent } from '../Context/ContextApi'
import { SingleProduct } from './SingleProduct'
import { AdminHome } from '../Admin/AdminHome'
import { Si2 } from '../try/Si2'
import { SingleProductPage } from './SingleProductPage'
import { CartPage } from '../Components/Home/CartPage'
import { PrivateRoute } from './PrivateRoute'
import { Login } from './Login'
import { SignUp } from './SignUp'

export const AllRoutes = () => {
  // const {handleClick, Params} = useContext(appContent)

  return (
    <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/product/:category' element={<Product/>} />
        <Route path='/admin' element={<AdminHome/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        
        <Route path='/singleProduct/:category/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        } />
        
    </Routes>
  )
}
