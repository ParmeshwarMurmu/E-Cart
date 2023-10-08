import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { useParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/Store/store'
import { allProductData } from '../Redux/allMenProductReducer/action'

export const ProductComp = () => {
  

  const {category} = useParams()

  const dispatch = useDispatch()


  const {data, isLoading, isError, isData} = useSelector((store)=>{
    return {
      data: store.allMenProductReducer.data,
      isLoading: store.allMenProductReducer.isLoading,
      isError: store.allMenProductReducer.isError,
      isData: store.allMenProductReducer.isData,
    }

  }, shallowEqual)


  console.log(`${category}`, "cate");

  useEffect(()=>{
   dispatch(allProductData(category))
  }, [category])


  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {
          data.map((el)=>(
            <div key={el._id} style={{display: "flex", flexWrap: "wrap", marginBottom: "50px", border: "2px solid red", width: "19%"}}>
              <ProductCard {...el} />
            </div>
          ))
      }
    </div>
  )
}
