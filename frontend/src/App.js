import logo from './logo.svg';
import './App.css';
import { AdminHome } from './Admin/AdminHome';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components"
import { AdminLogin } from './Admin/AdminLogin';
import { Main } from './Routes/Main';
import { Navbar } from './Routes/Navbar';
import { Button, Input, Menu, MenuButton, MenuItem, MenuList, Text, border } from '@chakra-ui/react';
import { Notification } from './Components/Home/Notification';
import { Count } from './Components/Home/Count';
import { SignInLogo } from './Components/Home/SignInLogo';
import { AfterLogin } from './Components/Home/AfterLogin';
import { MenuItemProfile } from './Components/Home/MenuItemProfile';
import { theme } from './DefaultTheme';
import { Categories } from './Components/Home/Categories';
import { appContent } from './Context/ContextApi';
import { Link, useSearchParams } from 'react-router-dom';
import {ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

function App() {

  const [icon, setIcon] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()
  const [type, setType] = useState('')
  const {isAuth} = useContext(appContent)

  const mensCategoryHandler = (e)=>{
    const {value} = e.target;
    // alert('value')
    setType(value)


  }

  useEffect(() => {

    if (type !== '') { // Only update searchParams if type is not empty
      const params = {
        type: type
      }
      setSearchParams(params)
    }

}, [type])


  return (
    <DIV theme={theme} isAuth={isAuth}>

    

      <div>
        <div className='nav'>


          <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div >
              <Navbar />
            </div>



            <div className='loginSection' >
              <div>
                <Notification />
              </div>

              <div>
                <Count />
              </div>

              <div>
                <SignInLogo />
              </div>

              {
                isAuth && <div>
                <MenuItemProfile />
              </div>
              }


            </div>

          </div>


        </div>

      </div>

      <hr />

      <div className='allCategories'>

        <div className='categoriesSection'>
          <div>
            <Link to={'/product/mens'}>

            <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/s/v/s-mt416-metronaut-original-imagmj8ndmbetfah.jpeg?q=70'
              alt='mens'
            />
            </Link>

            <div className='title'>
              {/* <Link to={'/product'} ><Text>Mens</Text> </Link> */}
              <Menu>
                <MenuButton onClick={()=>{setIcon((prev)=> prev + 1)}} variant={'none'} as={Button} p={0} m={0} rightIcon={ icon%2===0 ?  <ChevronUpIcon />  : <ChevronDownIcon />}>
                  Mens
                </MenuButton>
                <MenuList>
                  <Link to={`/product/mens`}>
                  <MenuItem onClick={mensCategoryHandler} value={'t-shirts'}>T-Shirts</MenuItem>
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

          <Link to={'/product/womens'}>
            <Categories images='https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/s/k/4/l-913-jaffry-embroidery-original-imagsc36sh7khhfj.jpeg?q=70'
              alt='women'
            />
            </Link>

            <div className='title'>
              {/* <Link to={'/product'} onClick={() => { handleClick("womens") }}><Text>Womens</Text> </Link> */}

              <Menu>
                <MenuButton onClick={()=>{setIcon((prev)=> prev + 1)}} variant={'none'} as={Button} p={0} m={0} rightIcon={ icon%2===0 ?  <ChevronUpIcon />  : <ChevronDownIcon />}>
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

          <Link to={'/product/shoes'}>
            <Categories images='https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70'
              alt='shoes'
            />
            </Link>
            <div className='title'>
              <Link to={'/product'}><Text>Shoes</Text> </Link>
            </div>
          </div>

          
        </div>


        <div className='searchBar'>
          serach
        </div>


      </div>


      <div style={{ marginTop: "80px", }}>
        <Main />
      </div>


    </DIV>
  );
}

export default App;

const DIV = styled.div`



margin: 0px;
/* padding: 0px; */
/* padding-top: 60px; */
margin-top: 50px;
font-family: Verdana, Geneva, Tahoma, sans-serif;


.nav{
    
    position: fixed;
    width: 100%;
    top: 0px;
    background-color: #1ac1fe;
    z-index: 3;

}

.categoriesNav{
  position: fixed;
  top: 48px;
  width: 100%;
  height: 30px;
  background-color: red;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 100px;
}

/* .categories{
  width: 80%;
  margin: auto;
  position: fixed;
  left: 150px;
  top: 0px;
}

.categoriesParent{
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background-color: rgba(255, 0, 0, 1);
  background-color: red;
} */



.loginSection{
  display: flex;
  width: 20%;
  justify-content: space-between;
  padding-top: 5px;
}

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

const StyledInput = styled.input`
  border: 2px solid black; /* Set default border color */
  transition: border-color 0.3s ease; /* Add a smooth transition effect */

  &:focus {
    border-color: blue; /* Change border color when focused */
    outline: none; /* Remove default focus outline */
  }



  `
