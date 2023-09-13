import React, { useContext, useEffect } from 'react'
import styled from "styled-components"
import { Categories } from '../Components/Home/Categories'
import { Box, Image, Text } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import Slideshow from '../try/Try'
import Mens from "../Images/Mens.jpg"
import { appContent } from '../Context/ContextApi'

export const Home = () => {

  
  const {handleClick, Params} = useContext(appContent)

  // useEffect(()=>{

  //   const params={
  //     category: searchParams
  //   }

  //   setSearchParams(params)

  // }, [searchParams])


  // console.log(params);
  
  return (
    <DIV>

      <div className='allCategories'>

        <div className='categoriesSection'>
          <div>
            <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/s/v/s-mt416-metronaut-original-imagmj8ndmbetfah.jpeg?q=70'
              alt='mens'
            />

            <div className='title'>
              <Link to={'/product'} onClick={()=>{handleClick("mens")}}><Text>Mens</Text> </Link>
            </div>
          </div>

          <div>
            <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/s/k/4/l-913-jaffry-embroidery-original-imagsc36sh7khhfj.jpeg?q=70'
              alt='women'
            />

            <div className='title'>
              <Link to={'/product'} onClick={()=>{handleClick("womens")}}><Text>Womens</Text> </Link>
            </div>
          </div>

          <div>
            <Categories images='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70'
              alt='mobiles'
            />
            <div className='title'>
              <Link to={'/product'} onClick={()=>{handleClick("mobiles")}}><Text>Mobiles</Text> </Link>
            </div>
          </div>

          <div>
            <Categories images='https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70'
              alt='shoes'
            />
            <div className='title'>
              <Link to={'/product'}  onClick={()=>{handleClick("shoes")}}><Text>Shoes</Text> </Link>
            </div>
          </div>

          <div>
            <Categories images='https://rukminim2.flixcart.com/image/612/612/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70'
              alt='watches'
            />
            <div className='title'>
              <Link to={'/product'}  onClick={()=>{handleClick("watches")}}><Text>Watches</Text> </Link>
            </div>
          </div>
        </div>


        <div className='searchBar'>
          serach
        </div>


      </div>

      {/* Mensection slideshow */}
      <div className='mens'>
        <div style = {{backgroundColor: "green"}}>
          <Box boxSize='300px'>
            <Image src={Mens} alt='Mens' />
          </Box>
        </div>

        <div style = {{ width: "80%"}}>
          <Slideshow />
        </div>
      </div>

    </DIV>
  )
}

const DIV = styled.div`
/* 
display: flex;
justify-content: flex-start; */
 
.allCategories{
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
 
}

.categoriesSection{
  display: flex;
  justify-content: space-between;
  background-color: yellow;
  width: 50%;
}

.searchBar{
  background-color: red;
  /* width: 50%; */
}

.title{
  display: flex;
  justify-content: center;
}

.mens {
  /* background-color: aliceblue; */
  display: flex;
 } 

 .mens > div{
  /* border: 2px solid black; */
 }


`
