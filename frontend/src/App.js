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

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    // inputRef.current.focus()
  }, [])

  return (
    <DIV>

      <div className='nav'>


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

        

        </div>
      </div>

{/*     
      <div className='searchBar' style={{ border: "2px solid red"}}>
          <Input h={8} type='text' placeholder='Search' ref={inputRef} p={4} bg={'white'} />
       
        </div> */}
      

      



      {/* <AdminLogin /> */}

      <Main />
      


    </DIV>
  );
}

export default App;

const DIV = styled.div`

/* background-color: bisque; */
margin: 0px;
padding: 0px;

/* height: 400px; */

.nav{
    
    position: fixed;
    width: 100%;
    top: 0px;
    background-color: #1ac1fe;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.searchBar{
  position: fixed;
    width: 30%;
    /* left: 500px; */
    right: 10px;
    top: 60px;
}

.loginSection{
  display: flex;
  width: 20%;
  justify-content: space-between;
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
