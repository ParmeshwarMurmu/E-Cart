import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { AddToCart } from './AddToCart'
import { WhilistBtn } from './WhilistBtn'
import { FaRupeeSign } from "react-icons/fa";

export const ProductCard = ({ images, brand, title, size, cate, color, price, _id , category}) => {


  return (
    <DIV>
      <div class="container">
        <div >
          {/* '/singleProduct/:category/:id'  */}
          <Link to={`/singleProduct/${cate}/${_id}/${category}`}>
            <div class="card_box">
              {/* <span></span> */}
              <Image h={'270px'} src={images[0]} alt={title} />
            </div>
          </Link>

          <div style={{ marginTop: "40px" }}>

            <div>
              <Text
                fontWeight="bold"
                fontSize="sm"
                letterSpacing="wide"
                style={{ marginBottom: "5px" }}
              >
                {brand}
              </Text>

              <Text

                fontSize="sm"
                style={{ marginBottom: "5px" }}

              >
                {title}
              </Text>



              <Text fontSize="md" style={{ display: "flex", marginBottom: "5px" }} > <span style={{ paddingTop: "3px" }}><FaRupeeSign /> </span> {price}</Text>

            </div>


          </div>






        </div>

        <div className='addAndWhi' >

          <div className='addToCart'>
            <div style={{marginBottom: "10px"}}>
              <AddToCart price={price} id={_id} />
            </div>

            <div>

              <WhilistBtn />
            </div>
          </div>


        </div>




      </div>

      
    </DIV>
  )
}

const DIV = styled.div`

  .container {
  display: flex;
  flex-direction: column;
  height: 100%;

}

.addToCart{
  width: 100%;
}



.container > div{
  height: 100%;
}

.addAndWhi{
  display: flex;
  align-items: flex-end;
  
}






.card_box {
  width: 200px;
  height: 250px;
  border-radius: 20px;
  /* background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%); */
  position: relative;
  /* box-shadow: 0 25px 50px rgba(0,0,0,0.55); */
  cursor: pointer;
  transition: all .3s;
}

.card_box:hover {
  transform: scale(0.9);
}

.card_box span {
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_box span::before {
  content: 'Premium';
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0,0,0,0.23);
}

.card_box span::after {
  content: '';
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
}





`
