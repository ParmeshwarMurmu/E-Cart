import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { cartErrorAction, cartLoadingAction, cartPageData, cartSuccessAction } from '../../Redux/cartReducer/action';
import axios from 'axios';

export const CartPage = () => {

  const dispatch = useDispatch();
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('E-Cart_userId')
  const {cartData, isLoading, isData, isError} = useSelector((store)=>{

      return {
          cartData: store.cartReducer.cartData,
          isLoading: store.cartReducer.isLoading,
          isData: store.cartReducer.isData,
          isError: store.cartReducer.isError,
      }
  }, shallowEqual)

  if(isData){
    console.log("cartData", cartData);
  }


  useEffect(()=>{
    dispatch(cartLoadingAction())
    axios.get(`http://localhost:8080/user/cart`,{
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res)
      dispatch(cartSuccessAction(res.data.cart))
    })
    .then((err)=>{
      dispatch(cartErrorAction())
    })
  }, [])
  return (
    <div>CartPage</div>
  )
}
