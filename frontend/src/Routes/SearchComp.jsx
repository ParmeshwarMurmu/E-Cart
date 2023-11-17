import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export const SearchComp = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const initialSearch = 'jeans'
    // const initialSearch = searchParams.get("search")
    console.log("initialSearch", initialSearch);


    useEffect(() => {

        const params = {
            search: initialSearch 
        }

        // search && (params.order = order)

        initialSearch && setSearchParams(params)
        


    }, [searchParams])


  return (
    <div>
        Searching ....
    </div>
  )
}
