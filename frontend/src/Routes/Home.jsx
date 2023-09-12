import React from 'react'
import styled from "styled-components"
import { Categories } from '../Components/Home/Categories'
import { Text } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import Slideshow from '../try/Try'

export const Home = () => {
  // const [params, setParams] = useSearchParams()

  

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
            <Link to={'/product'} ><Text>Mens</Text> </Link>
          </div>
        </div>

        <div>
          <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/s/k/4/l-913-jaffry-embroidery-original-imagsc36sh7khhfj.jpeg?q=70'
            alt='women'
          />

          <div className='title'>
          <Link to={'/product'}><Text>Womens</Text> </Link>
          </div>
        </div>

        <div>
          <Categories images='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70'
            alt='mobiles'
          />
          <div className='title'>
          <Link to={'/product'}><Text>Mobiles</Text> </Link>
          </div>
        </div>

        <div>
          <Categories images='https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70'
            alt='shoes'
          />
          <div className='title'>
          <Link to={'/product'}><Text>Shoes</Text> </Link>
          </div>
        </div>

        <div>
          <Categories images='https://rukminim2.flixcart.com/image/612/612/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70'
            alt='watches'
          />
          <div className='title'>
          <Link to={'/product'}><Text>Watches</Text> </Link>
          </div>
        </div>
        </div>


        <div className='searchBar'>
        serach
        </div>


      </div>

      <Slideshow />

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


`
