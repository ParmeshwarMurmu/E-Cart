import axios from "axios"
import { useDispatch } from "react-redux"

export const SINGLE_PAGE_LOADING = 'SINGLE_PAGE_LOADING'
export const SINGLE_PAGE_ERROR = 'SINGLE_PAGE_ERROR'
export const SINGLE_PAGE_DATA = 'SINGLE_PAGE_DATA'

export const singlePageLoadingAction = ()=>{

    return {type: SINGLE_PAGE_LOADING}
}

export const singlePageErrorAction = ()=>{

    return {type: SINGLE_PAGE_ERROR}
}


export const singlePageDataSuccessAction = (payload)=>{

    return {type: SINGLE_PAGE_DATA, payload: payload}
}

export const singlePageData = (id, category)=>(dispatch)=>{

    dispatch(singlePageLoadingAction())
    axios.get(`https://full-4qyv.onrender.com/singleProduct/${category}/${id}`)
    .then((res)=>{
      dispatch(singlePageDataSuccessAction(res.data.msg))
    })
    .then((err)=>{
      dispatch(singlePageErrorAction())
    })

}

