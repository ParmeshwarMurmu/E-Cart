import { Button, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { Categories } from './Home/Categories'
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from '@chakra-ui/icons'
import styled from "styled-components"
import { FilterComp } from '../Comp2/FilterComp'
import axios from 'axios'


export const NavCategories = () => {

  const [icon, setIcon] = useState(1)
  const [search, setSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  
  const navigate = useNavigate()


  const searchHandler = () => {
    console.log("search", search);
    // axios.get(`http://localhost:3000/product/men?category=${search}`)
    // .then((res)=>{
    //   console.log(res);
    // })
    // .then((err)=>{
    //   console.log(err);
    // })
    console.log("navigating");
    navigate('/searchBar')
    
  }

  useEffect(() => {

    const params = {
    }
    search && (params.search = search)

    search && setSearchParams(params)

  }, [searchParams, search])

  return (
    <DIV>
      <div className='allCategories'>

        <div className='categoriesSection'>
          <div>

            <div>
              <Link to={'/product/men'} >

                <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/s/v/s-mt416-metronaut-original-imagmj8ndmbetfah.jpeg?q=70'
                  alt='mens'
                />
              </Link>
            </div>

            <div className='title'>
              {/* <Link to={'/product'} ><Text>Mens</Text> </Link> */}
              <Menu>
                <MenuButton onClick={() => { setIcon((prev) => prev + 1) }} variant={'none'} as={Button} p={0} m={0} rightIcon={icon % 2 === 0 ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                  Mens
                </MenuButton>
                <MenuList>
                  <Link to={`/product`}>
                    <MenuItem value={'t-shirts'}>T-Shirts</MenuItem>
                  </Link>

                  <MenuItem>Formal Shirts</MenuItem>
                  <MenuItem>Casual-Shirts</MenuItem>
                  <MenuItem>Jeans</MenuItem>
                  <MenuItem>Formal Trousers</MenuItem>
                  <MenuItem>Track Pants</MenuItem>
                  <MenuItem>Shorts</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>

          <div>

            <Link to={'/product/women'}>
              <Categories type={'womens'} images='https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/s/k/4/l-913-jaffry-embroidery-original-imagsc36sh7khhfj.jpeg?q=70'
                alt='women'
              />
            </Link>

            <div className='title'>
              {/* <Link to={'/product'} onClick={() => { handleClick("womens") }}><Text>Womens</Text> </Link> */}

              <Menu>
                <MenuButton onClick={() => { setIcon((prev) => prev + 1) }} variant={'none'} as={Button} p={0} m={0} rightIcon={icon % 2 === 0 ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                  Womens
                </MenuButton>
                <MenuList>
                  <MenuItem>Saree</MenuItem>
                  <MenuItem>Kurtas Kurtis</MenuItem>
                  <MenuItem>Palazzos</MenuItem>
                  <MenuItem>Blouse</MenuItem>
                  <MenuItem>Salwars And Patialas</MenuItem>
                  <MenuItem>Leggings And Churidars</MenuItem>
                  <MenuItem>Lehenga Cholis</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>



          <div>

            <Link to={'/product/shoe'}>
              <Categories type={'shoe'} images='https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70'
                alt='shoe'
              />
            </Link>

            <div className='title'>
              {/* <Link to={'/product'} onClick={() => { handleClick("womens") }}><Text>Womens</Text> </Link> */}

              <Menu>
                <MenuButton onClick={() => { setIcon((prev) => prev + 1) }} variant={'none'} as={Button} p={0} m={0} rightIcon={icon % 2 === 0 ? <ChevronUpIcon /> : <ChevronDownIcon />}>
                  Shoes
                </MenuButton>
                <MenuList>
                  <MenuItem>Saree</MenuItem>
                  <MenuItem>Kurtas Kurtis</MenuItem>
                  <MenuItem>Palazzos</MenuItem>
                  <MenuItem>Blouse</MenuItem>
                  <MenuItem>Salwars And Patialas</MenuItem>
                  <MenuItem>Leggings And Churidars</MenuItem>
                  <MenuItem>Lehenga Cholis</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>


        </div>


        <div className='searchBar'>

          <Stack spacing={3} >

            <div style={{ display: "flex" }}>
              <Input placeholder='Search' size='sm' marginRight={4} border={'2px solid grey'}
                onChange={(e) => { setSearch(e.target.value) }}
              />

              <div>

                <IconButton
                  colorScheme='blue'
                  aria-label='Search database'
                  icon={<SearchIcon />}
                  p={0}
                  m={0}
                  // h={2}
                  size={'sm'}
                  onClick={searchHandler}

                />
              </div>

            </div>
          </Stack>
        </div>

        {/* <div className='filter'>
          <FilterComp />
        </div> */}


      </div>
    </DIV>
  )
}

const DIV = styled.div`

margin-bottom: 50px;

.allCategories{
  display: flex;
  justify-content: space-between;
  /* border: 2px solid black; */
 
}


.categoriesSection{
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  /* background-color: yellow; */
  /* width: 50%; */
}

.categoriesSection > div{
  margin-right: 40px;
}

.searchBar{
 /* border: 2px solid red; */
  /* width: 50%; */
}



.title{
  display: flex;
  justify-content: center;
}

.filter{
  display: none;
}

@media screen and (max-width: 425px) {

.searchBar{
  display: none;
}

.filter{
  display: block;
}

.allCategories{
  
  justify-content: space-evenly;

}
  

  

  
}

`
