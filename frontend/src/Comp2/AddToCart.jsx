import { useToast } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import { useContext } from 'react'
import { appContent } from '../Context/ContextApi'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export const AddToCart = ({ price, id , cate}) => {

  const toast = useToast();
  let { category } = useParams()
  
  const { isAuth } = useContext(appContent)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  if(category === undefined){
    category=cate

  }

  console.log("category In CART", category)
  console.log("search In CART", cate)

  

  const addToCartHandler = () => {
    let data;

    if (isAuth) {

      if (category === 'men') {
        data = {
          mensProduct: id,
          productModel: `${category}`,
          // size:userSize
          quantity: 1,
          size: "",
          deleiveredStatus: "pending"
        }

      }
      else if (category === 'women') {
        data = {
          womensProduct: id,
          productModel: `${category}`,
          quantity: 1,
          deleiveredStatus: "pending"
          // size:userSize
        }
      }
      else if (category === 'shoe') {
        data = {
          shoesProduct: id,
          productModel: `${category}`,
          quantity: 1,
          size: "",
          deleiveredStatus: "pending"
          // size:userSize
        }
      }


      axios.post('https://e-cart-5jh7.onrender.com/user/addToCart', data, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
        .then((res) => {

          if (res.data.msg === 'Product added to your cart') {

            toast({
              title: 'Cart',
              description: `${res.data.msg}`,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          }
          else {
            toast({
              title: 'Cart',
              description: `${res.data.msg}`,
              status: 'error',
              duration: 4000,
              isClosable: true,
            })
          }


        })
        .catch((err) => {
          console.log(err);
        })


    }
    else {
      toast({
        title: `Login`,
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
      <div data-tooltip={`Price: ${price}`} class="button" onClick={addToCartHandler}>
        <div class="button-wrapper">
          <div class="text">Add To Cart</div>
          <span class="icon">
            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </span>
        </div>
      </div>


    </DIV>
  )
}

const DIV = styled.div`

.button {
  /* --width: 100px; */
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color:  rgb(255, 162, 0);
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  /* border-radius: 0.45em; */

  transition: background 0.3s;
}

.button::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: #555;
  font-size: 0.9rem;
  color: #fff;
  border-radius: .25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.button::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #555;
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

.button::after,.button::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;

}

.button-wrapper,.text,.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #090909;
}

.text {
  top: 0
}

.text,.icon {
  transition: top 0.5s;
}

.icon {
  color: #050505;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 24px;
  height: 24px;
}

.button:hover {
  background: #43e915;
}

.button:hover .text {
  top: -100%;
}

.button:hover .icon {
  top: 0;
}

.button:hover:before,.button:hover:after {
  opacity: 1;
  visibility: visible;
}

.button:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.button:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}




    
`
