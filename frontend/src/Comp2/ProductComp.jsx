import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/Store/store'
import { allProductData } from '../Redux/allMenProductReducer/action'
import styled from 'styled-components'
import Pagination from './Pagination'

export const ProductComp = ({ category }) => {


  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { data, isLoading, isError, isData } = useSelector((store) => {
    return {
      data: store.allMenProductReducer.data,
      isLoading: store.allMenProductReducer.isLoading,
      isError: store.allMenProductReducer.isError,
      isData: store.allMenProductReducer.isData,
    }

  }, shallowEqual)

  const [page, setPage] = useState(Math.ceil(data.length / 10))

  const initialPage = searchParams.get("page")
  const [currentPage, setCurrentPage] = useState(1);
  // const [gender, setGender] = useState(initialPage || 1)

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Button with text "${page}" clicked`);
  };



  useEffect(() => {

  
     const params = {
        page: currentPage
      }
    

    setSearchParams(params)

  }, [currentPage])







  return (
    <DIV className='cardParent'>
      {
        data.map((el) => (
          <div key={el._id} style={{ marginBottom: "50px" }}>
            <ProductCard {...el} category={category} />
          </div>
        ))
      }

      <Pagination
        totalPages={page}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* totalPages, currentPage, onPageChange */}
    </DIV>
  )
}

const DIV = styled.div`
  
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;


`
