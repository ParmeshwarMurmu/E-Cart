import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { AddToCart } from './AddToCart'
import { WhilistBtn } from './WhilistBtn'

export const ProductCard = () => {
    return (
        <DIV>
            <div class="container">
                <div>
                <Link to={'/singleProduct'}>
                <div class="card_box">
                    {/* <span></span> */}
                    <Image src='https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/h/q/w/xxl-r-peacock-blue-stoneberg-original-imageum82pyz8c9q.jpeg?q=70' />
                </div>
                </Link>

                <div style={{marginTop: "40px", border: "2px solid blue"}}>
                    
                    <div>
                    <Text >Brand</Text>
                    {/* <Text >Title: hnxjxcjcjcjjcjcsdfifigdhif jdifhdifodafd</Text> */}
                    <p>snasjbcjadbjcjadbcbsdjcbj jdbcujabca cjcbaj cacbdishcfasc b </p>
                    <Text >Price</Text>
                    <Text >Size</Text>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <AddToCart />
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
  align-items: center;
  justify-content: center;
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
