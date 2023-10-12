import axios from "axios"

export const CART_LOADING = "CART_LAODING"
export const CART_SUCCESS = "CART_SUCCESS"
export const CART_ERROR = "CART_ERROR"

export const cartLoadingAction = ()=>{

    return {type: CART_LOADING}
}


export const cartSuccessAction = (payload)=>{

    return {type: CART_SUCCESS, payload: payload}
}


export const cartErrorAction = ()=>{

    return {type: CART_ERROR}
}

export const cartPageData = (token, userId)=>(dispatch)=>{
    console.log(token);
    dispatch(cartLoadingAction())
    axios.get(`https://full-4qyv.onrender.com/user/cart`,{userId}, {
        headers: {
            Authorization: `bearer ${token}`
          }
    })
    .then((res)=>{
      dispatch(cartSuccessAction(res.data.cart))
    })
    .then((err)=>{
      dispatch(cartErrorAction())
    })
}