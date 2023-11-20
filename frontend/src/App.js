

import { useContext, useEffect, useState } from 'react';
import styled from "styled-components"

import { Main } from './Routes/Main';
import { Navbar } from './Routes/Navbar';
import { Notification } from './Components/Home/Notification';
import { Count } from './Components/Home/Count';
import { SignInLogo } from './Components/Home/SignInLogo';

import { MenuItemProfile } from './Components/Home/MenuItemProfile';
import { theme } from './DefaultTheme';

import { appContent } from './Context/ContextApi';
import { Link, useSearchParams } from 'react-router-dom';

import { BiLogOut, BiLogIn, BiSolidUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import { Footer } from './Routes/Footer';


import { Hamberg } from './Comp2/Hamberg';
import { Button, Tooltip, useToast } from '@chakra-ui/react';

function App() {

  const [icon, setIcon] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()
  const { isAuth, setIsAuth } = useContext(appContent)
  const toast = useToast();

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    setIsAuth(false)
    toast({
      title: 'Logout',
      description: `loged out Successfully`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  console.log("app isAuth", isAuth);



  return (
    <DIV theme={theme} isAuth={isAuth}>



      <div>

        <div className='nav'>


          <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div >
              <Navbar />
            </div>





            <div className='loginSection' >

              {
                isAuth === true ? <div className='logout'>
                  <Tooltip label={'Logout'} placement='bottom'>
                    <Button variant={'none'} fontSize={'18px'} onClick={logoutHandler}><BiLogOut fontSize={'25px'} color='white' /></Button>
                  </Tooltip>
                </div> : <div className='userSection'>
                  <Tooltip label={'Existing User'} placement='bottom'>
                    <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}><BiLogIn fontSize={'25px'} color='white' /> <span style={{ marginLeft: "5px" , color: 'white'}}>Login</span></Button></Link>
                  </Tooltip>
                </div>
              }


              {
                isAuth === true ? "" : <div className='signUp'>
                  <Tooltip label={'New User ?'} placement='bottom'>
                    <Link to={'/signUp'}><Button variant={'none'} fontSize={'18px'}><BiSolidUser fontSize={'20px'} color='white' /><span style={{ marginLeft: "5px" , color: 'white'}}>Sign Up</span></Button></Link>
                  </Tooltip>
                </div>
              }



              {/* <div>
                <Notification />
              </div> */}

              <div className='cart'>
                <Count />
              </div>

              {/* <div>
                <SignInLogo />
              </div> */}

              {
                isAuth && <div>
                  <MenuItemProfile />
                </div>
              }

              <div className='hamberg'>
              <Hamberg />
              </div>

            </div>

          </div>


        </div>

      </div>

      <hr />


      <div style={{ marginTop: "80px", }}>
        <Main />
      </div>


      <div className='footer'>
        <Footer />
      </div>


    </DIV>
  );
}

export default App;

const DIV = styled.div`



margin: 0px;
/* padding: 0px; */
/* padding-top: 60px; */
/* margin-top: 50px; */
font-family: Verdana, Geneva, Tahoma, sans-serif;


.nav{
    
    position: fixed;
    width: 100%;
    top: 0px;
    background-color: #003399;
    padding: 5px 0px 5px 0px;
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
  /* margin-bottom: 100px; */
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
  /* width: 20%; */
  justify-content: space-between;
  /* border: 2px solid red; */
  padding-top: 5px;
}

.footer{

  margin-top: 50px;
}


.hamberg{
  display: none;
}



@media screen and (max-width: 770px) {

  .hamberg{
    display: block;
  }

  .cart{
    display: none;
  }

  .userSection{
    display: none;
  }

  .signUp{
    display: none;
  }

  .logout{
    display: none;
  }

      
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
