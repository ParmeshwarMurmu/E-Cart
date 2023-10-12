import axios from "axios"

export const MEN_TRENDING_LOADING = "MEN_TRENDING_LOADING"
export const MEN_TRENDING_SUCCESS = "MENTRENDING_SUCCESS"
export const MEN_TRENDING_ERROR = "MEN_TRENDING_ERROR"




export const menTrendingLoadingAction = ()=>{
    return {type: MEN_TRENDING_LOADING}
}

export const menTrendingSuccessAction = (payload)=>{
    return {type: MEN_TRENDING_SUCCESS, payload: payload}
}

export const menTrendingErrorAction = ()=>{
    return {type: MEN_TRENDING_ERROR}
}

export const menTrendingData = ()=>(dispatch)=>{
    
    dispatch(menTrendingLoadingAction())
    axios.get('https://full-4qyv.onrender.com/home/men/category?category=casual shirts')
    .then((res) => {
        dispatch(menTrendingSuccessAction(res.data.category))
    })
    .catch((err) => {
        dispatch(menTrendingErrorAction())
    })
}