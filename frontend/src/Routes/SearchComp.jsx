import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { NavCategories } from '../Components/NavCategories'
import axios, { Axios } from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'
import { searchDataFailureAction, searchDataLoadingAction, searchDataSuccessAction, searchTitleAction } from '../Redux/searchReducer/action'
import { ProductCard } from '../Comp2/ProductCard'


export const SearchComp = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // const initialSearch = 'jeans'searchData: [],
  // isLoading: false,
  // isError: false,
  // isData: false
  const initialSearch = searchParams.get("search")
  const dispatch = useDispatch()
  const { category, searchData, isLoading, isData, isError } = useSelector((store) => {

    return {
      category: store.searchReducer.category,
      searchData: store.searchReducer.searchData,
      isLoading: store.searchReducer.isLoading,
      isError: store.searchReducer.isError,
      isData: store.searchReducer.isData,
    }

  }, shallowEqual)


  useEffect(() => {

    // const params = {
    //     search: initialSearch 
    // }

    // // search && (params.order = order)

    // initialSearch && setSearchParams(params)
    console.log(category, "category");
    dispatch(searchDataLoadingAction())
    axios.get(`http://localhost:8080/allProducts/search/${category}`)
      .then((res) => {
        console.log(res)
        dispatch(searchDataSuccessAction(res.data.data))
        dispatch(searchTitleAction(""))
      })
      .then((err) => {
        console.log(err);
        dispatch(searchDataFailureAction())
      })


  }, [initialSearch])

  // console.log("searchLoading", isLoading)
  console.log("searchData", searchData)


  return (
    <DIV>
      <NavCategories />
      {
        isLoading === true ? <SingleProductLoader /> : <div className='serachBar'>
          {
            searchData.map((el) => (
              <ProductCard key={el._id} {...el} />
            ))
          }
        </div>
      }
    </DIV>
  )
}


const DIV = styled.div`

.serachBar{
  display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    row-gap: 50px;
}
  
`