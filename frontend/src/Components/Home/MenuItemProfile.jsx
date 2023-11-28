import React, { useContext } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from '@chakra-ui/react'

import styled from "styled-components"
import { AfterLogin } from './AfterLogin'
import { shallowEqual, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { appContent } from '../../Context/ContextApi'
import { BiLogOut } from "react-icons/bi";

export const MenuItemProfile = () => {

  const { isAuth, setIsAuth } = useContext(appContent)
  const toast = useToast();

  const { user, } = useSelector((store) => {

    return {
      user: store.singleUserReducer.user,
      isLoading: store.singleUserReducer.isLoading,
      isData: store.singleUserReducer.isData,
    }
  }, shallowEqual)

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
        <MenuButton >
          <AfterLogin />
        </MenuButton>
        <MenuList>
          <MenuItem color={'black'}><svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z" fill="#000000"></path></svg>{user.firstName}</MenuItem>
          <MenuItem>Profile</MenuItem>
          <Link to={'/cart'}><MenuItem>Your Cart</MenuItem></Link>
          <Link to={'/yourOrders'}><MenuItem>Your Orders</MenuItem></Link>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Delete Account</MenuItem>
          {
            isAuth && <MenuItem onClick={logoutHandler}><BiLogOut fontSize={'20px'} />Logout</MenuItem>
          }

        </MenuList>
      </Menu>
    </DIV>
  )
}

const DIV = styled.div`

svg {
  width: 20px;
  margin-right: 5px;
}
    
`
