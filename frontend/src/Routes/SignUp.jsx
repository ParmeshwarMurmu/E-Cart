import React, { useContext, useEffect, useState } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    InputGroup,
    InputRightElement,
    HStack,
    Box,
    Highlight,
    FormErrorMessage,
    useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { emaiAction, firstNameAction, lastNameAction, passwordAction, ressetAction } from '../Redux/userReducer/action';
import { appContent } from '../Context/ContextApi';


export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    const {isAuth, setIsAuth} = useContext(appContent)


    const toast = useToast();
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { email, password, firstName, lastName } = useSelector((store) => {

        return {
            email: store.userReducer.email,
            password: store.userReducer.password,
            firstName: store.userReducer.firstName,
            lastName: store.userReducer.lastName,
        }
    }, shallowEqual)

    let data = {
        email,
        password,
        firstName,
        lastName
    }


    const registerHandler = () => {

        console.log(data);
        axios.post('https://e-cart-5jh7.onrender.com/user/register', data)
            .then((res) => {

                toast({
                    title: 'SignUp',
                    description: `${res.data.msg}`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })

                dispatch(ressetAction())
                navigate('/login');

            })
            .catch((err) => {
                toast({
                    title: 'Error Occured',
                    description: `Cannot Add men item`,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            })


    }

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     console.log("token", token)
    //     if (token) {
    //       setIsAuth(true);
    //     }
    //   }, [setIsAuth, isAuth]);
    


    return (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
                <Image
                    alt={"Login Image"}
                    width={{ lg: "80%", xl: "80%" }}
                    mx="auto" // Center the image horizontally
                    display="block"
                    src={'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=626&ext=jpg&ga=GA1.1.9011224.1689068363&semt=ais'}
                />
            </Flex>
            <Flex
                p={5}
                flex={1}
                align={"baseline"}
                justify={"center"}
                bg={"gray.100"}>
                <Stack spacing={4} w={"full"} maxW={{ base: "xs", lg: "md" }}>
                    <Heading fontSize={"2xl"}>Register</Heading>
                    <HStack>
                        <Box>
                            <FormControl
                                id="firstName"
                                isRequired
                            >
                                <FormLabel>First Name</FormLabel>
                                <div
                                    style={{
                                        position: "relative",
                                        minHeight: "70px",
                                    }}>
                                    <Input
                                        name="firstName"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => {
                                            dispatch(firstNameAction(e.target.value))
                                        }}
                                        type="text"
                                        bg={"white.100"}
                                        size={{ base: "sm", md: "md" }}
                                    />
                                    <FormErrorMessage>

                                    </FormErrorMessage>
                                </div>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl
                                id="lastName"
                                isRequired
                            >
                                <FormLabel>Last Name</FormLabel>{" "}
                                <div style={{ position: "relative", minHeight: "70px" }}>
                                    <Input
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => {
                                            dispatch(lastNameAction(e.target.value))
                                        }}
                                        placeholder="Last Name"
                                        type="text"
                                        bg={"white.100"}
                                        size={{ base: "sm", md: "md" }}
                                    />
                                    <FormErrorMessage>

                                    </FormErrorMessage>
                                </div>
                            </FormControl>
                        </Box>
                    </HStack>

                    <FormControl
                        id="email"
                        isRequired
                    >
                        <FormLabel>Email address</FormLabel>
                        <div style={{ position: "relative", minHeight: "70px" }}>
                            <Input
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    dispatch(emaiAction(e.target.value))
                                }}
                                placeholder="Email"
                                type="email"
                                bg={"white.100"}
                                size={{ base: "sm", md: "md" }}
                            />
                            <FormErrorMessage>

                            </FormErrorMessage>
                        </div>
                    </FormControl>
                    <FormControl
                        id="password"
                        isRequired
                    >
                        <FormLabel>Password</FormLabel>
                        <div style={{ position: "relative", minHeight: "70px" }}>
                            <InputGroup>
                                <Input
                                    name="pass"
                                    value={password}
                                    onChange={(e) => {
                                        dispatch(passwordAction(e.target.value))
                                    }}
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    bg={"white.100"}
                                    size={{ base: "sm", md: "md" }}
                                />
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
                    <Stack spacing={6}>
                        <Button

                            bgGradient="linear(to-r, green.100, green.500)"
                            _hover={{
                                bgGradient: "linear(to-r, green.500, green.100, green.100)",
                            }}
                            variant={"solid"}
                            size={{ base: "sm", md: "md" }}
                            onClick={registerHandler}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Link to="/login">
                            <Highlight
                                query="Login"
                                styles={{ px: "1", py: "1", color: "blue.600" }}>
                                Already a user? Login
                            </Highlight>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    );
}
