import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
     <Link to={"/"}>Home</Link>
     <Link to={"/product"}>Product</Link>
    </div>
  )
}