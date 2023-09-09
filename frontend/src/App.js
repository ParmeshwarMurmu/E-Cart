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

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    // inputRef.current.focus()
  }, [])

  return (
    <DIV theme={theme}>

      <div className='nav'>
      

      <div style={{border: "2px solid white",width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>

        <div style={{border: "2px solid red"}}>
          <Navbar />
        </div>

        

        <div className='loginSection' style={{ border: "2px solid red" }}>
          <div>
           <Notification />
        </div>

        <div>
          <Count/>
        </div>

        <div>
          <LoginPopover/>
        </div>

        <div>
          <MenuItemProfile />
        </div>

      
        </div>

        </div>

        
      </div>

      <div style={{marginTop: "60px",border: "2px solid red"}} className='categories'>
        PPDOAJOJJFDF
      </div>


      <Main />
      


    </DIV>
  );
}

export default App;

const DIV = styled.div`

margin: 0px;
padding: 0px;
font-family: Verdana, Geneva, Tahoma, sans-serif;

.nav{
    
    position: fixed;
    width: 100%;
    top: 0px;
    background-color: #1ac1fe;
    border: 2px solid black;

}

.categories{
  width: 80%;
  margin: auto;
}


.searchBar{
  position: fixed;
    width: 30%;
    right: 10px;
    top: 60px;
}

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
