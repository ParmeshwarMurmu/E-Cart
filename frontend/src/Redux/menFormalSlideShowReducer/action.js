import axios from "axios"

export const MEN_FORMAL_LOADING = "MEN_FORMAL_LOADING"
export const MEN_FORMAL_SUCCESS = "MEN_FORMAL_SUCCESS"
export const MEN_FORMAL_ERROR = "MEN_FORMAL_ERROR"




export const menFormalLoadingAction = ()=>{
    return {type: MEN_FORMAL_LOADING}
}

export const menFormalSuccessAction = (payload)=>{
    return {type: MEN_FORMAL_SUCCESS, payload: payload}
}

export const menFormalErrorAction = ()=>{
    return {type: MEN_FORMAL_ERROR}
}

export const menFormalData = ()=>(dispatch)=>{
    
    dispatch(menFormalLoadingAction())
    axios.get('http://localhost:8080/home/men/category?category=formal shirts')
    .then((res) => {
        dispatch(menFormalSuccessAction(res.data.category))
    })
    .catch((err) => {
        dispatch(menFormalErrorAction())
    })
}