import logo from './logo.svg';
import './App.css';
import { AdminHome } from './Admin/AdminHome';
import { useEffect, useRef } from 'react';
import styled from "styled-components"
import { AdminLogin } from './Admin/AdminLogin';

function App() {
  const inputRef = useRef(null)

  useEffect(()=>{
    // inputRef.current.focus()
  }, [])

  return (
    <DIV>
      <AdminHome />

    

      {/* <AdminLogin /> */}
      

    </DIV>
  );
}

export default App;

const DIV = styled.div`



`

const StyledInput = styled.input`
  border: 2px solid black; /* Set default border color */
  transition: border-color 0.3s ease; /* Add a smooth transition effect */

  &:focus {
    border-color: blue; /* Change border color when focused */
    outline: none; /* Remove default focus outline */
  }
  `
