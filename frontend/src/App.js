import logo from './logo.svg';
import './App.css';
import { AdminHome } from './Admin/AdminHome';
import { useEffect, useRef } from 'react';
import styled from "styled-components"
import { AdminLogin } from './Admin/AdminLogin';
import { Main } from './Routes/Main';
import { Navbar } from './Routes/Navbar';
import { Input, Text } from '@chakra-ui/react';

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    // inputRef.current.focus()
  }, [])

  return (
    <DIV>

      <div className='nav'>

        <Navbar />

        <div>
          <Input h={8}  type='text' placeholder='Search'/>
        </div>

        <div>
          logo
        </div>
      </div>

      {/* <div className='categoriesSection'>
        <Text fontSize={'2xl'}>Categories</Text>
      </div> */}
      {/* <AdminHome /> */}



      {/* <AdminLogin /> */}

      <Main />


    </DIV>
  );
}

export default App;

const DIV = styled.div`

background-color: bisque;
margin: 0px;
padding: 0px;

/* height: 400px; */

.nav{
    /* position: sticky; */
    /* padding: 20px 0px 20px 0px; */
    position: fixed;
    width: 100%;
    top: 0px;
    /* height: 45px; */
    /* z-index: 10; */
    background-color: #1ac1fe;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.categoriesSection{
  border: 2px solid black;
  position: sticky;
  top: 45px;
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
