import React, { useContext, useEffect, useRef } from 'react'
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
  const [searchParams, setSearchParams] = useSearchParams()
  const prevCategory = useRef(category);

  const obj = {
    params:{
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      color: searchParams.getAll('color')
    }
  }


  const {data, isLoading,urlCategory } = useSelector((store) => {
    return {

      isLoading: store.allMenProductReducer.isLoading,
      data: store.allMenProductReducer.data,
      urlCategory: store.allMenProductReducer.urlCategory,
    }

  }, shallowEqual)


  // console.log("SS", data);
  


  // useEffect(() => {
  //   // dispatch(allProductData(category))

  //   if (category !== urlCategory) {
  //     console.log("&&&");
  //     dispatch(allProductData(category));
  //     // prevCategory.current = category;
  //   }
   

  // }, [category])


  // useEffect(() => {
    
  //     dispatch(allProductData(category, obj));
  //   // }

  // }, [searchParams])

  console.log("obj", obj);

  useEffect(() => {
    console.log("Obj uEEFFECT", obj);
    dispatch(allProductData(category, obj));
  }, [searchParams])




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