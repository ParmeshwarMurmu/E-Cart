import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { singlePageData } from '../Redux/SingleProductPage/action'


export const SingleProduct = () => {

  const {category, id} = useParams()
  const dispatch = useDispatch()

  const {isLoading, isError, data} = useSelector((store)=>{

    return {
      isLoading:store.singleProductPage.isLoading,
      isError: store.singleProductPage.isError,
      data: store.singleProductPage.data

    }
  }, shallowEqual)

  console.log("id", id)



  useEffect(()=>{

    dispatch(singlePageData(id, category))
  
  })

  return (
    <DIV>SingleProduct</DIV>
  )
}

const DIV = styled.div`

border: 2px solid red;



`