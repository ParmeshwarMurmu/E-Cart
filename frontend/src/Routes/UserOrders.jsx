import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userOrderData, userOrderErrorAction, userOrderLoadingAction, userOrderSuccessAction } from '../Redux/userOrderReducer/action'
import axios from 'axios'
import { store } from '../Redux/Store/store'
import styled from 'styled-components'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'

export const UserOrders = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('E-Cart_userId')

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
        dispatch(userOrderSuccessAction(res.data))

      })
      .catch((err) => {
        dispatch(userOrderErrorAction())

      })

  }



  useEffect(() => {

    userOrderData()

  }, [])


  return (
    <DIV>

      {
        isLoading ? <SingleProductLoader /> : <div>


        </div>
      }

    </DIV>
  )
}

const DIV = styled.div`

`