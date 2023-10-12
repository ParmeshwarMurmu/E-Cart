import axios from "axios"

export const MEN_TRENDING_SHOES_LOADING = 'MEN_TRENDING_SHOES_LOADING'
export const MEN_TRENDING_SHOES_SUCCESS = 'MEN_TRENDING_SHOES_SUCCESS'
export const MEN_TRENDING_SHOES_ERROR = 'MEN_TRENDING_SHOES_ERROR'


export const menTrendingShoesLoadingAction = ()=>{
    return {type: MEN_TRENDING_SHOES_LOADING}
}

export const menTrendingShoesSuccessAction = (payload)=>{
    return {type: MEN_TRENDING_SHOES_SUCCESS, payload: payload}
}

export const menTrendingShoesErrorAction = ()=>{
    return {type: MEN_TRENDING_SHOES_ERROR}
}

export const menTrendingShoesData = ()=>(dispatch)=>{
 
    dispatch(menTrendingShoesLoadingAction())
    axios.get(`https://full-4qyv.onrender.com/shoes/male/casualShoes`)
    .then((res)=>{
     dispatch(menTrendingShoesSuccessAction(res.data.casualShoes))
    })
    .then((err)=>{
     dispatch(menTrendingShoesErrorAction())
    })


}