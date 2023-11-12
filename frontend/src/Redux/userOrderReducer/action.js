import axios from "axios"


export const USER_ORDER_LOADING = 'USER_ORDER_LOADING'
export const USER_ORDER_SUCCESS = 'USER_ORDER_SUCCESS'
export const USER_ORDER_ERROR = 'USER_ORDER_ERROR'


export const userOrderLoadingAction = ()=>{
    return {type: USER_ORDER_LOADING}
}

export const userOrderSuccessAction = (payload)=>{
    return {type: USER_ORDER_SUCCESS, payload}
}

export const userOrderErrorAction = ()=>{
    return {type: USER_ORDER_ERROR}
}


