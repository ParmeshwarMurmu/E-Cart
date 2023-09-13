import logo from './logo.svg';
import './App.css';
import { AdminHome } from './Admin/AdminHome';
import { useEffect, useRef } from 'react';
import styled from "styled-components"
import { AdminLogin } from './Admin/AdminLogin';
import { Main } from './Routes/Main';
import { Navbar } from './Routes/Navbar';
import { Input, Text, border } from '@chakra-ui/react';
import { Notification } from './Components/Home/Notification';
import { Count } from './Components/Home/Count';
import { LoginPopover } from './Components/Home/LoginPopover';
import { SignInLogo } from './Components/Home/SignInLogo';
import { AfterLogin } from './Components/Home/AfterLogin';
import { MenuItemProfile } from './Components/Home/MenuItemProfile';
import { theme } from './DefaultTheme';
import { Categories } from './Components/Home/Categories';
import { Try } from './try/Try';
import { Home } from './Routes/Home';

function App() {


  return (
    <DIV theme={theme}>

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
                <LoginPopover />
              </div>

              <div>
                <MenuItemProfile />
              </div>


            </div>

          </div>


        </div>

      </div>
   
     <hr />


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


`

const StyledInput = styled.input`
  border: 2px solid black; /* Set default border color */
  transition: border-color 0.3s ease; /* Add a smooth transition effect */

  &:focus {
    border-color: blue; /* Change border color when focused */
    outline: none; /* Remove default focus outline */
  }



  `
