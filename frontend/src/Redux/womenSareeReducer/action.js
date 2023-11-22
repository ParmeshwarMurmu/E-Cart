import axios from "axios"

export const WOMEN_SAREE_LOADING = 'WOMEN_SAREE_LOADING'
export const WOMEN_SAREE_SUCCESS = 'WOMEN_SAREE_SUCCESS'
export const WOMEN_SAREE_ERROR = 'WOMEN_SAREE_ERROR'


export const womenSareeLoadingAction = ()=>{

    return {type: WOMEN_SAREE_LOADING}
}

export const womenSareeSuccessAction = (payload)=>{

    return {type: WOMEN_SAREE_SUCCESS, payload: payload}
}

export const womenSareeErrorAction = ()=>{

    return {type: WOMEN_SAREE_ERROR}
}



export const womenSareeData = ()=>(dispatch)=>{
    
    dispatch(womenSareeLoadingAction())
    axios.get(`https://e-cart-5jh7.onrender.com/women/saree`)
    .then((res)=>{
      dispatch(womenSareeSuccessAction(res.data.data))
    })
    .catch((err)=>{
      dispatch(womenSareeErrorAction())
    })

}