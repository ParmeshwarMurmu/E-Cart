import axios from "axios"
import { useDispatch } from "react-redux"

export const WOMEN_KURTAS_KURTIS_LOADING = 'WOMEN_KURTAS_KURTIS_LOADING'
export const WOMEN_KURTAS_KURTIS_SUCCESS = 'WOMEN_KURTAS_KURTIS_SUCCESS'
export const WOMEN_KURTAS_KURTIS_ERROR = 'WOMEN_KURTAS_KURTIS_ERROR'


export const womenKurtasKurtisLoadingAction = ()=>{

    return {type: WOMEN_KURTAS_KURTIS_LOADING}
}

export const womenKurtasKurtisErrorAction = ()=>{

    return {type: WOMEN_KURTAS_KURTIS_ERROR}
}


export const womenKurtasKurtisSuccessAction = (payload)=>{

    return {type: WOMEN_KURTAS_KURTIS_SUCCESS, payload: payload}
}

export const womenKurtasKurtisBackend = ()=>(dispatch)=>{

   dispatch(womenKurtasKurtisLoadingAction())
    axios.get(`http://localhost:8080/home/women/category?category=kurtas kurtis`)
    .then((res)=>{
    dispatch(womenKurtasKurtisSuccessAction(res.data.data))
    })
    .then((err)=>{
      dispatch(womenKurtasKurtisErrorAction())
    })

}

