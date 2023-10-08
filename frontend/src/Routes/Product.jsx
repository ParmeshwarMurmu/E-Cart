import React, { useContext, useEffect } from 'react'
import { appContent } from '../Context/ContextApi'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from "styled-components"
import { SideBar } from '../Comp2/SideBar'
import { ProductComp } from '../Comp2/ProductComp'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { allProductData } from '../Redux/allMenProductReducer/action'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'

export const Product = () => {

  const { category } = useParams()

  const dispatch = useDispatch()


  const {isLoading, isError, isData } = useSelector((store) => {
    return {

      isLoading: store.allMenProductReducer.isLoading,
      isError: store.allMenProductReducer.isError,
      isData: store.allMenProductReducer.isData,
    }

  }, shallowEqual)


  useEffect(() => {
    dispatch(allProductData(category))
  }, [category])


  return (
    <>

      {
        isLoading ? <SingleProductLoader /> : <DIV>
          <div className='sideBar'>
            <SideBar />
          </div>


          <div className='productComp'>
            <ProductComp />
          </div>


        </DIV>
      }
    </>


  )
}


const DIV = styled.div`

display: flex;


.sideBar{
  width: 18%;
  
}

.productComp{
  width: 100%;
}
  
`