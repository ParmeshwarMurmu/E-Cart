import React, { useContext, useEffect, useRef, useState } from 'react'
import { appContent } from '../Context/ContextApi'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from "styled-components"
import { SideBar } from '../Comp2/SideBar'
import { ProductComp } from '../Comp2/ProductComp'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { allProductData } from '../Redux/allMenProductReducer/action'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'
import Pagination from '../Comp2/Pagination'
import { Ty } from '../try/Ty'
import { NavCategories } from '../Components/NavCategories'

export const Product = ({ type }) => {

  const { category } = useParams()
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const prevCategory = useRef(category);
  // const page = searchParams.get('page')
  const [currentPage, setCurrentPage] = useState(1);

  const obj = {
    params: {
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      color: searchParams.getAll('color'),
      order: searchParams.get('order'),
      gender: searchParams.getAll('gender'),
      // page: searchParams.get('page')
    }
  }


  const { data, isLoading, urlCategory } = useSelector((store) => {
    return {

      isLoading: store.allMenProductReducer.isLoading,
      data: store.allMenProductReducer.data,
      urlCategory: store.allMenProductReducer.urlCategory,
    }

  }, shallowEqual)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };




  useEffect(() => {

    dispatch(allProductData(category, obj, currentPage));
  }, [searchParams, category, currentPage])




  return (
    <>

      <div>
        <NavCategories />
      </div>

      {
        isLoading ? <SingleProductLoader /> : <DIV>
          <div className='sideBar'>
            <SideBar />
          </div>


          <div className='productComp'>
            <ProductComp currentPage={currentPage} onPageChange={handlePageChange} category={category} />
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

@media screen and (max-width: 425px) {

.sideBar{
  display: none;
}
  

  

  
}
  
`