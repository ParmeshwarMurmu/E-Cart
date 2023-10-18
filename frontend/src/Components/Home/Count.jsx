import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { appContent } from '../../Context/ContextApi'
import { cartErrorAction, cartLoadingAction, cartSuccessAction } from '../../Redux/cartReducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

export const Count = () => {

  // const {isAuth} = useContext(appContent)
  // const dispatch = useDispatch()
  // const token = localStorage.getItem('token')
  // let totalProduct = 0;

  // const { cartData, isData } = useSelector((store) => {

  //   return {
  //     cartData: store.cartReducer.cartData,
  //     isData: store.cartReducer.isData,
  
  //   }
  // }, shallowEqual)

  // if(isData){
  //   totalProduct = cartData.length
    
  // }

  // console.log("tttttttt", totalProduct)

  // useEffect(()=>{

  //   if(isAuth){
  //     dispatch(cartLoadingAction())
  //   axios.get(`http://localhost:8080/user/cart`, {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res)
  //       dispatch(cartSuccessAction(res.data.cart))
  //     })
  //     .then((err) => {
  //       dispatch(cartErrorAction())
  //     })
  //   }
  // })


    return (
        <DIV>
            {/* <button>Notification By HTML Data attribute</button> */}
            <Link to={'/cart'}>
            <button class="button">
                <svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
            </button>
            </Link>
        </DIV>
    )
}

const DIV = styled.div`
button {
  position: relative;
  /* margin: 1rem; */
  z-index: 2;
  border-radius: 8px;
  appearance: none;
  /* padding: 5px; */
  transition: all 0.2s;
  /* border: 2px solid black; */
}

button svg path{
    fill: #181717;
}

button {
  /* padding: 1.2rem; */
  position: relative;
  z-index: 1;
}

button::before {
  /* content:  ${props => (props.isAuth === true ?  props.totalProduct : props.totalProduct)}; */
  position: absolute;
  display: flex;
  top: -0.75em;
  right: -0.75em;
  height: 1em;
  width: 1em;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  color: white;
  z-index: 999;
  transition: all 0.2s;
}

button:hover {
  /* border-radius: 3px; */
  border-color: red;
}

button:hover::before {
  /* height: 2em; */
  /* width: 2em; */
  font-size: 1.5em;
}
`
