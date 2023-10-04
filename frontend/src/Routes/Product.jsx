import React, { useContext, useEffect } from 'react'
import { appContent } from '../Context/ContextApi'
import { useSearchParams } from 'react-router-dom'
import styled from "styled-components"
import { SideBar } from '../Comp2/SideBar'
import { ProductComp } from '../Comp2/ProductComp'

export const Product = () => {
  
  // const [searchParams, setSearchParams] = useSearchParams()
  // const initialCategory = searchParams.get('category')
  // const {handleClick, Params} = useContext(appContent)


  // useEffect(()=>{

  //   const params = {category: Params}
  //   setSearchParams(params);

  // }, [Params])


  // useEffect(() => {
  //   setSearchParams({ category: Params || initialCategory });
  // }, [Params]);




  return (
    <DIV>

      <div className='sideBar'>
         <SideBar />
      </div>


      <div className='productComp'>
        <ProductComp />
      </div>

    </DIV>
  )
}


const DIV = styled.div`
border: 2px solid red;
display: flex;


.sideBar{
  width: 18%;
  border: 2px solid black;
}

.productComp{
  border: 2px solid green;
  width: 100%;
}
  
`