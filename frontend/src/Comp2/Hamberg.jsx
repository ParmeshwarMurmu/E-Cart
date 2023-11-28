import { Button, IconButton, Input, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BiLogOut, BiLogIn, BiSolidUser } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
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
      {/* <Button ref={btnRef} variant={'none'} p={0} m={0} colorScheme='teal' onClick={onOpen}>
        <GiHamburgerMenu fontSize={'30px'} color='white'/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          

          <DrawerBody style={{ marginTop: '50px' }}>
        
            <div className='userLoginSection'>
              {
                isAuth === true ? <div>
                  <Tooltip label={'Logout'} placement='bottom'>
                    <Button variant={'none'} fontSize={'18px'} onClick={logoutHandler}><BiLogOut fontSize={'25px'} color='white' /></Button>
                  </Tooltip>
                </div> : <div>
                  <Tooltip label={'Existing User'} placement='bottom'>
                    <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}><BiLogIn fontSize={'25px'} color='white' /> <span style={{ marginLeft: "5px" }}>Login</span></Button></Link>
                  </Tooltip>
                </div>
              }


              {
                isAuth === true ? "" : <div>
                  <Tooltip label={'New User ?'} placement='bottom'>
                    <Link to={'/signUp'}><Button variant={'none'} fontSize={'18px'}><BiSolidUser fontSize={'20px'} color='white' /><span style={{ marginLeft: "5px" }}>Sign Up</span></Button></Link>
                  </Tooltip>
                </div>
              }
            </div>

            <div className='about' style={{ marginLeft: '10px', marginRight: "10px" }}>
              <Tooltip label={'About'} placement='bottom'>
                <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}>About</Button></Link>
              </Tooltip>
            </div>

            <div className='contact'>
              <Tooltip label={'Contact'} placement='bottom'>
                <Link to={'/login'}><Button variant={'none'} fontSize={'18px'}>Contact</Button></Link>
              </Tooltip>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}

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