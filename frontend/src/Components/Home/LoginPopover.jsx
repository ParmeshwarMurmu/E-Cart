import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  ButtonGroup,
  Text,
  TagRightIcon,
  useToast,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { AdminLogin } from '../../Admin/AdminLogin'
import { theme } from '../../DefaultTheme'
import { SignInLogo } from './SignInLogo'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { emaiAction, passwordAction } from '../../Redux/userReducer/action'
import axios from 'axios'

export const LoginPopover = () => {
  const initialFocusRef = React.useRef()
  const inputRef = useRef(null);
  const toast = useToast();
  const [state, setState] = useState("login")
  
  const dispatch = useDispatch()
  const {email, password} = useSelector((store)=>{

    return {
      email: store.userReducer.email,
      password: store.userReducer.password,
    }
  }, shallowEqual)
 
  let data = {
    email,
   password
  }

  const registerHandler = ()=>{

   console.log(data);
    axios.post('http://localhost:8080/user/register', data)
    .then((res)=>{
      
        toast({
          title: 'SignUp',
          description: `${res.data.msg}`,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      
      
  
      
    })
    .catch((err)=>{
      toast({
        title: 'Error Occured',
        description: `Cannot Add men item`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    })

  
  }


  const SignUpHandler = () => {

    setState("signUp")

  }

  const LoginHandler = ()=>{
    setState('login')

  }




  return (
    <DIV theme={state}>
      <Popover
        // initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button p={0} m={0} h={0} variant={'none'}>
          <SignInLogo />
          </Button>
          
        </PopoverTrigger>
        <PopoverContent className='parent' color='black' borderColor='blue.800' mt={8} >
          <PopoverHeader className='loginHeading' fontWeight='bold' border='0' color={'black'}

          >
            {
              state === 'login' ? <Text fontSize='2xl' >Login</Text> : <Text fontSize='2xl'>SignUp</Text>
            }
          </PopoverHeader>
          {/* <PopoverArrow  bg='blue.800' /> */}
          <PopoverCloseButton />
          <PopoverBody>


            {/* Admin Login */}
            

             {
               state === 'login' ?
            

            <div>
                <div className='loginForm'>
                  <Input type='email' placeholder='Email' p={2} mb={4} mt={4} className='inp'
                   
                   />


                  <Input type='password' placeholder='Password' p={2}className='inp'/>

                
                </div>

                <div>
                  <Text fontSize='xs' color={'blue.600'} mt={1}>Don't have an account ? <span className='signUp' onClick={SignUpHandler}>Sign Up</span></Text>
                </div>
              </div> 

              :

              <div>
                <div className='loginForm'>
                  <Input type='email' placeholder='Email' p={2} mb={4} mt={4} ref={inputRef} className='inp' 
                  onChange={(e)=>{
                    dispatch(emaiAction(e.target.value))
                  }}
                  
                  />
                  <Input type='password' placeholder='Password' p={2}  className='inp'
                    onChange={(e)=>{
                      dispatch(passwordAction(e.target.value))
                    }}
                  />
                  
                </div>

                <div>
                  <Text fontSize='xs' color={'blue.600'} mt={1} >Already have an account ? <span className='signUp' onClick={LoginHandler}>Login</span></Text>
                </div>
              </div> 
} 

          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent={'center'}
            // justifyContent='space-between'
            pb={4}
          >

            <ButtonGroup size='md' >
              {
                state === 'login' ? <Button width={'100%'} colorScheme='blue' >
                Login
              </Button>
               : <Button colorScheme='blue' 
               onClick={registerHandler}
               >
               SignUp
             </Button>
              }
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </DIV>
  )
}

const DIV = styled.div`

.parent{

  width:60%;
  z-index: 5;
  
 
}

.loginHeading{
  /* border: 2px solid black; */
  background-color: #63B3ED;
  text-align: center;
  /* font-family: ${props => (props.theme.fontfamily)}; */
  /* width: 30%; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 6px;
}

.inp{
  background-color: #E2E8F0;
}

.loginForm{
  /* background-color: aliceblue; */
}

.loginBtn{
  display: flex;
  justify-content: center;
  align-items: center;
}

.signUp{
  text-decoration: underline;
}

.signUp:hover{
  cursor: pointer;
}

`
