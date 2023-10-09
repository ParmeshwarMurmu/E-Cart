import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { Button, Tooltip, useToast } from '@chakra-ui/react';
import { appContent } from '../../Context/ContextApi';

export const SignInLogo = () => {

  const { isAuth, setIsAuth } = useContext(appContent)
  const navigate = useNavigate()
  const toast = useToast()

  const logoutHandler = () => {
    setIsAuth(false)
    toast({
      title: 'Loged Out',
      description: `You have been loged out succefully`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })


    navigate('/')
  }

  return (
    <DIV>



      <Tooltip label={isAuth ? 'Logout' : 'Login'} placement='bottom'>

        <Button style={{}} p={0} pb={4} variant={'none'}>
          {
            isAuth ? <BiLogOut fontSize={'30px'} onClick={logoutHandler} /> : <Link to={'/login'}><BiLogIn fontSize={'30px'} />  </Link>
          }
        </Button>

      </Tooltip>



    </DIV>
  )
}

const DIV = styled.div`
/* border: 2px solid red; */

.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(15, 15, 16);
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1em;
  /* font-weight: 600; */
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 100px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}


/* .card_header {
  display: flex;
  align-items: center;
}



.Btn {

  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  color: white;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
}

.svgIcon {
  width: 16px;
}

.svgIcon path {
  fill: white;
}

.Btn::before {
  width: 100px;
  height: 100px;
  position: absolute;
  content: "";
  background-color: white;
  left: -100%;
  top: 0;
  transition-duration: .3s;
  mix-blend-mode: difference;
}

.Btn:hover::before {
  transition-duration: .3s;
  transform: translate(100%,-50%);
  border-radius: 0;
}

.Btn:active {
  transform: translate(5px,5px);
  transition-duration: .3s;
} */






`
