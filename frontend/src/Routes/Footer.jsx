"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { Link } from "react-router-dom";
import styled from "styled-components";


const Logo = (props) => {
  return (
    <Flex alignItems="center" direction="row">
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Image src={""} alt="Omkar" width={"10%"} />
        <Image src={""} alt="Omkar" width={"50%"} />
      </Link>
    </Flex>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <DIV id="aboutSection">
    <Box
      bg={ '#003399'}
      color={'white'}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}>
          <Stack spacing={6}>
            {/* <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box> */}
            <Text fontSize={"sm"}>© 2023 E-Cart. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a">About us</Box>
            <Box as="a">Blog</Box>
            <Box as="a">Contact us</Box>
            <Box as="a">Pricing</Box>
            <Box as="a">Testimonials</Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a">Help Center</Box>
            <Box as="a">Terms of Service</Box>
            <Box as="a">Legal</Box>
            <Box as="a">Privacy Policy</Box>
            <Box as="a">Satus</Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </DIV>
  );
}


const DIV = styled.div`


`