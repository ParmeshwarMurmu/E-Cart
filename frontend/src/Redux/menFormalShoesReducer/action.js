import axios from "axios"

export const MEN_FORMAL_SHOES_LOADING = 'MEN_FORMAL_SHOES_LOADING'
export const MEN_FORMAL_SHOES_SUCCESS = 'MEN_FORMAL_SHOES_SUCCESS'
export const MEN_FORMAL_SHOES_ERROR = 'MEN_FORMAL_SHOES_ERROR'


export const menFormalShoesLoadingAction = ()=>{
    return {type: MEN_FORMAL_SHOES_LOADING}
}

export const menFormalShoesSuccessAction = (payload)=>{
    return {type: MEN_FORMAL_SHOES_SUCCESS, payload: payload}
}

export const menFormalShoesErrorAction = ()=>{
    return {type: MEN_FORMAL_SHOES_ERROR}
}

export const menFormalShoesData = ()=>(dispatch)=>{
 
    dispatch(menFormalShoesLoadingAction())
    axios.get(`https://e-cart-5jh7.onrender.com/shoes/male/formalShoes`)
    .then((res)=>{
     dispatch(menFormalShoesSuccessAction(res.data.formalShoes))
    })
    .then((err)=>{
     dispatch(menFormalShoesErrorAction())
    })


}