import React from 'react'
import styled from 'styled-components'
import { Image, } from '@chakra-ui/react';

export const UserOrderComp = ({ orderDate, products }) => {

  console.log("products", products)
  // console.log("@@@@@@");

  return (
    <DIV>
      {
        products.map((el) => (
          <div key={el._id}>

            {
              el.productModel === 'shoe' ? (<div>

                <Image src={el.shoesProduct.images[0]} alt='shoe images' />

              </div>) : el.productModel === 'women' ? <div>
                <Image src={el.womensProduct.images[0]} alt='women images' />
              </div> : <div>
                <Image src={el.mensProduct.images[0]} alt='women images' />
              </div>
            }

          </div>
        ))
      }

    </DIV>
  )
}

const DIV = styled.div`

`
