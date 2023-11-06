import { Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const AllProductsCard = (data) => {

  console.log(data)

  const [orderStatus, setOrderStatus] = useState(data.deleiveredStatus)


  useEffect(()=>{

    axios.patch(`http://localhost:8080/user/order/${data.id}/${data._id}`, {deleiveredStatus: `${orderStatus}`})
    .then((res)=>{
      console.log(res);
    })

  }, [orderStatus])


  


  return (
    <DIV status={orderStatus}>

      {
        data.productModel === 'women' ? (
          <div className='orderImages'>
            <img src={data.womensProduct.images[0]} alt="" />
          </div>
        ) : data.productModel === 'shoe' ? (
          <div className='orderImages'>
            <img src={data.shoesProduct.images[0]} alt="" />
          </div>
        ) : (
          <div className='orderImages'>
            <img src={data.mensProduct.images[0]} alt="" />
          </div>
        )
      }


      <Select className='selectStatus'
      value={orderStatus}
      onChange={(e)=>{setOrderStatus(e.target.value)}}
      >
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </Select>







    </DIV>
  )
}


const DIV = styled.div`
  
  /* border: 2px solid red; */
  width: 70%;

.orderImages{
  /* width: 30%; */

}


img{
  width: 100%;
}

/* ${props => (props.theme === "lightTheme" ? "#000000" : "#ffffff")} */

.selectStatus{
  background-color: ${props =>(props.status === 'pending' ? '#FB2A2A' : (props.status === 'shipped') ? 'orange' : '#38FB09')};
  font-size: 18px;
  color: #030303;
  margin-top: 10px;
}

option{
  background-color: aliceblue;
}



  
`