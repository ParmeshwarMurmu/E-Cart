import { Button, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {BiLogIn, BiSolidUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { appContent } from '../Context/ContextApi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Hamberg = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const { isAuth, setIsAuth } = useContext(appContent);


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


  return (
    <DIV>
      

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<GiHamburgerMenu fontSize={'30px'} color='white' />}
          variant='none'
        />
        <MenuList>
          {
            isAuth === true ? "" : <MenuItem >
              <Link to={'/signUp'}><Button variant={'none'} fontSize={'18px'}><BiSolidUser fontSize={'20px'} color='black' /><span>Sign Up</span></Button></Link>
            </MenuItem>
          }

          {
            isAuth === true ? "" : <MenuItem >
              <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}><BiLogIn fontSize={'25px'} color='black' /> <span>Login</span></Button></Link>
            </MenuItem>
          }

          <MenuItem>
            <div style={{ paddingLeft: "22px" }}>
              <Text>About</Text>
            </div>
          </MenuItem>
          <MenuItem >
            <div style={{ paddingLeft: "22px" }}>
              <Text>Contact</Text>
            </div>
          </MenuItem>

          <MenuGroup title='Help' style={{ paddingLeft: "22px" }}>
            <MenuItem><div style={{ paddingLeft: "22px" }}>
              <Text>Docs</Text>
            </div></MenuItem>
            <MenuItem>
              <div style={{ paddingLeft: "22px" }}>
                <Text>FAOs</Text>
              </div></MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </DIV>
  )

}


const DIV = styled.div`

@media screen and (max-width: 420px) {
 
 .about{
   /* display: none; */
 }

 .contact{
   /* display: none; */
 }

}



`