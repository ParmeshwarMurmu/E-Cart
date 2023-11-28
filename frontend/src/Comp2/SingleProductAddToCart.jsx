import React, { useContext } from 'react'
import styled from 'styled-components'
import { appContent } from '../Context/ContextApi'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export const SingleProductAddToCart = ({category, id, userSize, type}) => {

  const {isAuth} = useContext(appContent)
  const navigate = useNavigate()
  const toast = useToast()
  const token = localStorage.getItem('token')


  const addToCartHandler = ()=>{
   


    if(isAuth){
   
      let data;
      if((type === 'saree' || type === 'lehenga cholis') || (userSize !== "")){
      
        if(category ==='men'){
          data = {
            mensProduct: id,
            productModel: `${category}`,
            size:userSize,
            quantity: 1,
          deleiveredStatus: "pending"
          }
        }
        else if(category === 'women'){
          data = {
            womensProduct: id,
            productModel: `${category}`,
            size:userSize,
            quantity: 1,
            deleiveredStatus: "pending"
          }
        }
        else if(category === 'shoe'){
          data = {
            shoesProduct: id,
            productModel: `${category}`,
            size:userSize,
            quantity: 1,
            deleiveredStatus: "pending"
          }
        }
      // data = {
      //   productId: id,
      //   productModel: `${category}`,
      //   size:userSize
      // }

      // console.log("addtocart", data);

      axios.post('https://e-cart-5jh7.onrender.com/user/addToCart', data, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
      .then((res)=>{

        if(res.data.msg === 'Product added to your cart'){

          toast({
            title: 'Cart',
            description: `${res.data.msg}`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Cart',
            description: `${res.data.msg}`,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
  
       
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      toast({
        title: 'Size',
        description: `Please Select Size`,
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }

    }
    else{
      toast({
        title: 'Login',
        description: `Please Login To Proceed`,
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })

      navigate('/login')
    }
    
  }
    return (
        <DIV>
            <button class="CartBtn" onClick={addToCartHandler}>
                <span class="IconContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </span>
                <p class="text">Add to Cart</p>
            </button>
        </DIV>
    )
}


const DIV = styled.div`

.CartBtn {
  width: 200px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: rgb(255, 208, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .5s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 17, 17);
  z-index: 1;
  transition-duration: .5s;
  font-size: 1.04em;
  font-weight: 600;
}

.CartBtn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: .5s;
}

.CartBtn:hover .text {
  transform: translate(10px,0px);
  transition-duration: .5s;
}

.CartBtn:active {
  transform: scale(0.95);
  transition-duration: .5s;
}

    
`
