import React, { useContext, useEffect } from 'react'
import { appContent } from '../Context/ContextApi'
import { useSearchParams } from 'react-router-dom'

export const Product = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const {handleClick, Params} = useContext(appContent)


  // useEffect(()=>{

  //   const params = {category: Params}
  //   setSearchParams(params);

  // }, [Params])


  useEffect(() => {
    setSearchParams({ category: Params || initialCategory });
  }, [Params]);




  return (
    <div>Product Page</div>
  )
}
