import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { cartErrorAction, cartLoadingAction, cartPageData, cartSuccessAction } from '../../Redux/cartReducer/action';
import axios from 'axios';

import styled from 'styled-components';
import { Button, Heading, Image, Text } from '@chakra-ui/react';
import { FaRupeeSign } from "react-icons/fa";
import { Delete } from '../../Comp2/Delete';
import { DeleteBtn } from '../../Comp2/DeleteBtn';
import { SingleProductLoader } from '../../Comp2/SingleProductLoader'
import { EmptyCart } from './EmptyCart';




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

  let totalAmount = 0;
  if (isData) {

    cartData.forEach((ele) => {

      if (ele.productModel === "men") {
        totalAmount = totalAmount + ele.mensProduct.price
      }
      else if (ele.productModel === "women") {
        totalAmount = totalAmount + ele.womensProduct.price
      }
      else if (ele.productModel === "shoe") {
        totalAmount = totalAmount + ele.shoesProduct.price
      }

    });

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





  return (
    <DIV>

      {
        isLoading === true ? <SingleProductLoader /> : ( isData && cartData.length >0 ) ? <div>
          <div>
            <Heading as='h2' size='xl'>
              Your Items
            </Heading>
          </div>

          <div style={{ display: "flex" }}>

            {/* cart item */}
            <div style={{ width: '50%' }}>

              {
                isData && cartData.map((el) => (
                  <div key={el.id} style={{ display: "flex", marginBottom: "10px" }}>

                    <div>

                      {
                        el.productModel === 'men' ? (
                          <div style={{ display: "flex" }}>

                            <div>
                              <Image boxSize={'200px'} src={el.mensProduct.images[0]} alt={el.mensProduct.title} />
                            </div>

                            {/* Product detail */}

                            <div style={{ paddingLeft: "15px" }}>
                              <Text fontSize='md' style={{ marginBottom: "5px" }}>{el.mensProduct.title}</Text>

                              <div style={{ display: "flex", marginBottom: "5px" }}>
                                <Text fontSize='md'>Size :</Text>
                                <Text fontSize='md'>{el.size}</Text>

                              </div>

                              <div style={{ display: "flex", marginBottom: "10px" }}>
                                <Text fontSize='md'>Price:  </Text>
                                <div style={{ display: "flex" }}>
                                  <FaRupeeSign />
                                  <Text fontSize='md'>{el.mensProduct.price} </Text>
                                </div>
                              </div>


                              <div style={{ display: "flex", alignItems: "flex-end" }}>
                                <DeleteBtn />
                              </div>

                            </div>
                          </div>
                        ) : el.productModel === 'women' ? (
                          // Render for 'women' case

                          <div style={{ display: "flex" }}>
                            <div>
                              <Image boxSize={'200px'} src={el.womensProduct.images[0]} alt={el.womensProduct.title} />
                            </div>

                            {/* Product detail */}
                            <div style={{ paddingLeft: "15px" }}>
                              <Text fontSize='md' style={{ marginBottom: "5px" }}>{el.womensProduct.title}</Text>
                              <div style={{ display: "flex", marginBottom: "5px" }}>
                                {
                                  el.size && (
                                    <>
                                      <Text fontSize='md'>Size :</Text>
                                      <Text fontSize='md'>{el.size}</Text>
                                    </>
                                  )
                                }

                              </div>
                              <div style={{ display: "flex", marginBottom: "10px" }}>
                                <Text fontSize='md'>Price:  </Text>
                                <div style={{ display: "flex" }}>
                                  <FaRupeeSign />
                                  <Text fontSize='md'>{el.womensProduct.price} </Text>
                                </div>
                              </div>

                              <div style={{ display: "flex", alignItems: "flex-end" }}>
                                <DeleteBtn />
                              </div>

                            </div>
                          </div>
                          // <Image boxSize={'200px'} src={el.womensProduct.images[0]} alt={el.womensProduct.title} />
                        ) : el.productModel === 'shoe' ? (
                          // Render for 'shoe' case

                          <div style={{ display: "flex" }}>
                            <div>
                              <Image boxSize={'200px'} src={el.shoesProduct.images[0]} alt={el.shoesProduct.title} />
                            </div>

                            {/* Product detail */}
                            <div style={{ paddingLeft: "15px" }}>
                              <Text fontSize='md' style={{ marginBottom: "5px" }}>{el.shoesProduct.title}</Text>
                              <div style={{ display: "flex", marginBottom: "5px" }}>
                                <Text fontSize='md'>Size :</Text>
                                <Text fontSize='md'>{el.size}</Text>

                              </div>
                              <div style={{ display: "flex", marginBottom: "10px" }}>
                                <Text fontSize='md'>Price:  </Text>
                                <div style={{ display: "flex" }}>
                                  <FaRupeeSign />
                                  <Text fontSize='md'>{el.shoesProduct.price} </Text>
                                </div>
                              </div>

                              <div style={{ display: "flex", alignItems: "flex-end" }}>
                                <DeleteBtn />
                              </div>

                            </div>
                          </div>
                          // <Image boxSize={'200px'} src={el.shoesProduct.images[0]} alt={el.shoesProduct.title} />
                        ) : (
                          // Render for all other cases
                          ""
                        )
                      }

                    </div>



                  </div>

                ))
              }


            </div>


            {/* checkout */}
            <div style={{ width: '50%', border: "2px solid red" }} className='orderSumarryDiv'>


              <div className='orderSummary'>
                <div>

                  <Heading as='h3' size='md'>
                    Order Summary
                  </Heading>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text fontSize='md'>Total Items : </Text>
                  <Text fontSize='md'><span> {isData && cartData.length}</span></Text>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>

                  <Text fontSize='md'>Estimated Tax : </Text>

                  <div style={{ display: "flex" }}>
                    <div style={{ paddingTop: "5px" }}>

                      <FaRupeeSign />
                    </div>
                    <span>10.00</span>
                  </div>
                </div>


                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text fontSize='md'>Total Price : </Text>

                  <div style={{ display: "flex" }}>
                    <div>

                      <FaRupeeSign />
                    </div>
                    <span>{totalAmount + 10}.00</span>
                  </div>

                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                  <Button colorScheme='blue'>Checkout</Button>
                </div>




              </div>

            </div>

          </div>

        </div>  : <EmptyCart />

      }

    </DIV>
  )

}


const DIV = styled.div`

.orderSummaryDiv{
  box-shadow: 0 25px 50px rgba(0,0,0,0.55);
}

.orderSummary{
  background-color: #75b4ebb5;
  width: 70%;
  margin: auto;
  padding: 10px;
}
  
`