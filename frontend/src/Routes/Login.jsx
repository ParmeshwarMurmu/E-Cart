import React, { useContext, useState } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Highlight,
    InputRightElement,
    InputGroup,
    FormErrorMessage,
    useToast,
    Checkbox,
    Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, Navigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { emaiAction, passwordAction, ressetAction } from '../Redux/userReducer/action';
import { useNavigate } from 'react-router-dom';
import { appContent } from '../Context/ContextApi';



export const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const toast = useToast();
    const navigate = useNavigate();
    const {setIsAuth} = useContext(appContent)


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

 
  const loginHandler = ()=>{

    axios.post('http://localhost:8080/user/login', data)
    .then((res)=>{
       console.log(res.data);
       localStorage.setItem("token", res.data.token)
        toast({
          title: 'Login',
          description: `${res.data.msg}`,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })

        dispatch(ressetAction())
        setIsAuth(true)
        navigate('/');
        
      
  
      
    })
    .catch((err)=>{
      toast({
        title: 'Error Occured',
        description: `Cannot Login`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    })

  
  }

    return (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
                <Image alt={"Login Image"} objectFit={"none"} src={"https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1696865065~exp=1696865665~hmac=4d1403e398c4d59f83ead8db5c8178698f01eaa418f3946f8438824a8cd9db81"} />
            </Flex>
            <Flex p={8} flex={1} align={"center"} justify={"center"} bg={"gray.100"}>
                <Stack spacing={4} w={"full"} maxW={{ base: "xs", lg: "md" }}>
                    <Heading fontSize={"2xl"}>Sign in to your account</Heading>
                    <FormControl
                        id="email"
                    >
                        <FormLabel>Email address</FormLabel>
                        <div style={{ position: "relative", minHeight: "70px" }}>
                            <Input
                            value={email}
                            onChange={(e)=>{
                             dispatch(emaiAction(e.target.value))
                           }}
                               placeholder='Email'
                                type="email"
                                bg={"white.100"}
                                size={{ base: "sm", sm: "sm", md: "md" }}
                            />{" "}
                            <FormErrorMessage>

                            </FormErrorMessage>
                        </div>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <div style={{ position: "relative", minHeight: "70px" }}>
                            <InputGroup>
                                <Input
                                     value={password}
                                     onChange={(e)=>{
                                      dispatch(passwordAction(e.target.value))
                                    }}
                                    placeholder='Password'
                                    type={showPassword ? "text" : "password"}
                                    bg={"white.100"}
                                    size={{ base: "sm", sm: "sm", md: "md" }}
                                />{" "}
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                             
                            </FormErrorMessage>
                        </div>
                    </FormControl>
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}>
                        <Checkbox bg={"white.100"} defaultChecked>
                            Remember me
                        </Checkbox>
                        <Link to={"/login/forgotpass"}>
                            <Text color={"blue.500"}>Forgot password?</Text>
                        </Link>
                    </Stack>
                    <Stack spacing={6} pt={6}>
                        <Button
                           
                            bgGradient="linear(to-r, green.100, green.500)"
                            _hover={{
                                bgGradient: "linear(to-r, green.500, green.100, green.100)",
                            }}
                            variant={"solid"}
                            size={{ base: "sm", sm: "sm", md: "md" }}
                            onClick={loginHandler}
                        >
                            Sign in
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Link to="/signUp">
                            <Highlight
                                query="Register"
                                styles={{ px: "1", py: "1", color: "blue.600" }}>
                                New User? Register Here
                            </Highlight>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    );
}
