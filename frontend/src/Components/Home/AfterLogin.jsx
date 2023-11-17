import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import styled from "styled-components"
import { appContent } from '../../Context/ContextApi'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { singleUserData } from '../../Redux/singleUserReducer/action'


export const AfterLogin = () => {

  const {isAuth} = useContext(appContent)

  const dispatch = useDispatch()

  const {user, isLoading, isData} = useSelector((store)=>{

    return {
      user: store.singleUserReducer.user,
      isLoading: store.singleUserReducer.isLoading,
      isData: store.singleUserReducer.isData,
    }
  }, shallowEqual)
   
 

  const userDispatchFunction = ()=>{
    const userId = localStorage.getItem('E-Cart_userId')
    dispatch(singleUserData(userId))
  }

  console.log("user", user)

 

  useEffect(()=>{

    if(isAuth){
      userDispatchFunction()
    }

  }, [])


  return (
    <DIV>
        <Wrap>
          <WrapItem>
            <Avatar
              size='sm'
              name={user.firstName}
              src={''}
            />{' '}
          </WrapItem>
          
        </Wrap>

     
    </DIV>
  )
}

const DIV = styled.div`

margin-left: 20px;
margin-top: 4px;
/* margin-top: 50px; */
/* border: 2px solid red; */
display: flex;
/* justify-content: center; */
align-items: center;
justify-content: space-between;


`

