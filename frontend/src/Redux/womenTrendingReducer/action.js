import axios from "axios"
import { useDispatch } from "react-redux"

export const WOMEN_TRENDING_LOADING = 'WOMEN_TRENDING_LOADING'
export const WOMEN_TRENDING_SUCCESS = 'WOMEN_TRENDING_SUCCESS'
export const WOMEN_TRENDING_ERROR = 'WOMEN_TRENDING_ERROR'


export const womenTrendingLoadingAction = ()=>{

    return {type: WOMEN_TRENDING_LOADING}
}

export const womenTrendingErrorAction = ()=>{

    return {type: WOMEN_TRENDING_ERROR}
}


export const womenTrendingSuccessAction = (payload)=>{

    return {type: WOMEN_TRENDING_SUCCESS, payload: payload}
}

export const womenTrendingBackend = ()=>(dispatch)=>{

    dispatch(womenTrendingLoadingAction())
    axios.get(`https://e-cart-5jh7.onrender.com/home/women/category?category=lehenga cholis`)
    .then((res)=>{
      dispatch(womenTrendingSuccessAction(res.data.data))
    })
    .then((err)=>{
      dispatch(womenTrendingErrorAction())
    })

}

