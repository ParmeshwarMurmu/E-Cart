import React, { useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductComp = () => {
  const [data, setData] =  useState([1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,,3,3,3,3,3,3])
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {
          data.map(()=>(
            <div style={{display: "flex", flexWrap: "wrap", marginBottom: "50px", border: "2px solid red", width: "19%"}}>
              <ProductCard />
            </div>
          ))
      }
    </div>
  )
}
