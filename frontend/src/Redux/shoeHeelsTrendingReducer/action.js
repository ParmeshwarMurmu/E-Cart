
import axios from "axios"

export const WOMEN_SHOES_HEELS_TRENDING_LOADING = 'WOMEN_SHOES_HEELS_TRENDING_LOADING'
export const WOMEN_SHOES_HEELS_TRENDING_SUCCESS = 'WOMEN_SHOES_HEELS_TRENDING_SUCCESS'
export const WOMEN_SHOES_HEELS_TRENDING_ERROR = 'WOMEN_SHOES_HEELS_TRENDING_ERROR'



export const womenShoesHeelsTrendingLoadingAction = ()=>{

    return {type: WOMEN_SHOES_HEELS_TRENDING_LOADING}
}

export const womenShoesHeelsTrendingSuccessAction = (payload)=>{

    return {type: WOMEN_SHOES_HEELS_TRENDING_SUCCESS, payload: payload}
}

export const womenShoesHeelsTrendingErrorAction = ()=>{

    return {type: WOMEN_SHOES_HEELS_TRENDING_ERROR}
}



export const womenHeelsTrendingData = ()=>(dispatch)=>{
    
    dispatch(womenShoesHeelsTrendingLoadingAction())
    axios.get(`https://full-4qyv.onrender.com/shoes/female/heels`)
    .then((res)=>{
      dispatch(womenShoesHeelsTrendingSuccessAction(res.data.heels))
    })
    .catch((err)=>{
      dispatch(womenShoesHeelsTrendingErrorAction())
    })

}