import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {userOrderErrorAction, userOrderLoadingAction, userOrderSuccessAction } from '../Redux/userOrderReducer/action'
import axios from 'axios'
import { store } from '../Redux/Store/store'
import styled from 'styled-components'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'
import { UserOrderComponent } from '../Components/UserOrderComponent'
import { CartPage } from '../Components/Home/CartPage'
import { appContent } from '../Context/ContextApi'



export const UserOrders = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('E-Cart_userId')
  const {isAuth} = useContext(appContent)

  const { userOrder, isLoading, isError, isData } = useSelector((store) => {

    return {
      userOrder: store.userOrderReducer.userOrder,
      isLoading: store.userOrderReducer.isLoading,
      isError: store.userOrderReducer.isError,
      isData: store.userOrderReducer.isData,
    }
  })

  const userOrderData = () => {
    dispatch(userOrderLoadingAction())
    axios.get(`http://localhost:8080/user/userOrder`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res);
        dispatch(userOrderSuccessAction(res.data.userOrder))

      })
      .catch((err) => {
        dispatch(userOrderErrorAction())

      })

  }



  useEffect(() => {

    userOrderData()

  }, [])

  console.log("UserCart isAuth", isAuth);


  return (
    <DIV>

      {
        isLoading ? <SingleProductLoader /> : <div>
          {
            userOrder.map((el)=>(
              <UserOrderComponent {...el} />
            ))
          }
        </div>
      }

    </DIV>
  )
}


const DIV = styled.div`

`