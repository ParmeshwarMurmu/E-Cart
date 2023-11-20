import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/Store/store'
import { allProductData } from '../Redux/allMenProductReducer/action'
import styled from 'styled-components'
import Pagination from './Pagination'
import { FilterComp } from './FilterComp'
import { Text } from '@chakra-ui/react'

export const ProductComp = ({ category, currentPage, onPageChange }) => {


  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { data, isLoading, isError, isData, totalData } = useSelector((store) => {
    return {
      data: store.allMenProductReducer.data,
      isLoading: store.allMenProductReducer.isLoading,
      isError: store.allMenProductReducer.isError,
      isData: store.allMenProductReducer.isData,
      totalData: store.allMenProductReducer.totalData,
    }

  }, shallowEqual)

  const [page, setPage] = useState(Math.ceil(Number(totalData) / 10))


  return (
    <DIV >

      <div className='filter'>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Text fontStyle={'md'}>Filters</Text>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <FilterComp />
        </div>
      </div>

      <div className='cardParent'>
        {

          data.map((el) => (
            // <div key={el._id} style={{ marginBottom: "50px"}}>
            <ProductCard key={el._id} {...el} cate={category} />
            // </div>
          ))
        }

      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>

        <Pagination
          totalPages={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  
  
  

  .cardParent{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    row-gap: 50px;
  
  }

  .cardParent > div{
   height: 100%;
  }


  .filter{
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1396px) {

    .cardParent{
      grid-template-columns: repeat(4, 1fr);
    }
      

      
   
      
    }

@media screen and (max-width: 1080px) {

.cardParent{
  grid-template-columns: repeat(3, 1fr);
}
  

  

  
}

@media screen and (max-width: 425px) {

.cardParent{
  grid-template-columns: repeat(2, 1fr);
}
  

  

  
}


`
