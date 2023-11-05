import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AllOrderComp } from './AllOrderComp';
import styled from 'styled-components'

export const AllOrders = () => {

    const [orderData, setOrderData] = useState([])


    console.log("orderData", orderData)

    useEffect(() => {
        axios.get(`http://localhost:8080/allProducts/order`,{
          })
          .then((res)=>{
            console.log(res);
            setOrderData(res.data.allOrders)
          })
          .catch((err)=>{
            console.log(err);
          })
    }, [])


    
  return (
    <DIV>
    {
        orderData.map((el)=>(
            <div key={el._id}>
                <AllOrderComp {...el} />

            </div>
        ))
    }
    </DIV>
  )
}

const DIV = styled.div`
    display: grid;
grid-template-columns: repeat(3, 1fr);
`
