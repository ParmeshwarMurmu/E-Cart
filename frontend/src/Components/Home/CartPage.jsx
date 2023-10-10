import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { cartErrorAction, cartLoadingAction, cartPageData, cartSuccessAction } from '../../Redux/cartReducer/action';
import axios from 'axios';

import styled from 'styled-components';
import { Heading, Image, Text } from '@chakra-ui/react';
import { FaRupeeSign } from "react-icons/fa";

export const CartPage = () => {

  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('E-Cart_userId')
  const { cartData, isLoading, isData, isError } = useSelector((store) => {

    return {
      cartData: store.cartReducer.cartData,
      isLoading: store.cartReducer.isLoading,
      isData: store.cartReducer.isData,
      isError: store.cartReducer.isError,
    }
  }, shallowEqual)

  if (isData) {
    console.log("cartData", cartData);
  }


  useEffect(() => {
    dispatch(cartLoadingAction())
    axios.get(`http://localhost:8080/user/cart`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res)
        dispatch(cartSuccessAction(res.data.cart))
      })
      .then((err) => {
        dispatch(cartErrorAction())
      })
  }, [])

  const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      size: "l",
      href: '#',
      color: 'Salmon',
      price: '90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      size: "l",
      href: '#',
      color: 'Blue',
      price: '32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]





  return (
    <DIV>


      <div>
        <Heading as='h2' size='xl'>
          Your Items
        </Heading>
      </div>

      <div style={{display: "flex"}}>

      {/* cart item */}
      <div style={{width: '50%'}}>

        {
          products.map((el) => (
            <div key={el.id} style={{border: "2px solid red", display: "flex"}}>

            <div>
            <Image boxSize='200px' src={el.imageSrc} alt={el.name} />
              </div>

           {/* product details */}
              <div>
              <Text fontSize='md'>{el.name}</Text>
               <div style={{display: "flex"}}>
               <Text fontSize='md'>Size :</Text>
               <Text fontSize='md'>{el.size}</Text>

               </div>
               <div style={{display: "flex"}}>
               <Text fontSize='md'>Price:  </Text>
               <div style={{display: "flex"}}>
               <FaRupeeSign />
               <Text fontSize='md'>{el.price} </Text>
                </div>
               </div>
              </div>

            </div>
            
          ))
        }


      </div>


      {/* checkout */}
      <div  style={{width: '50%'}}>
      <Text fontSize='lg'>Order Summary</Text>
      
      </div>

      </div>
    </DIV>
  )

}


const DIV = styled.div`
  
`