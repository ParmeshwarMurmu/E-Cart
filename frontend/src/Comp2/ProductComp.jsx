import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/Store/store'
import { allProductData } from '../Redux/allMenProductReducer/action'

export const ProductComp = ({category}) => {
  
  
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  

  const {data, isLoading, isError, isData} = useSelector((store)=>{
    return {
      data: store.allMenProductReducer.data,
      isLoading: store.allMenProductReducer.isLoading,
      isError: store.allMenProductReducer.isError,
      isData: store.allMenProductReducer.isData,
    }

  }, shallowEqual)

  const obj = {
    params:{
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      color: searchParams.getAll('color')
    }
  }

  useEffect(()=>{
    // dispatch(allProductData(category, obj));
  }, [setSearchParams])

  



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
