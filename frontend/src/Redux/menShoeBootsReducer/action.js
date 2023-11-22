import axios from "axios"

export const MEN_SHOES_BOOTS_LOADING = 'MEN_SHOES_BOOTS_LOADING'
export const MEN_SHOES_BOOTS_SUCCESS = 'MEN_SHOES_BOOTS_SUCCESS'
export const MEN_SHOES_BOOTS_ERROR = 'MEN_SHOES_BOOTS_ERROR'


export const menShoesBootsLoadingAction = ()=>{
    return {type: MEN_SHOES_BOOTS_LOADING}
}

export const menShoesBootsSuccessAction = (payload)=>{
    return {type: MEN_SHOES_BOOTS_SUCCESS, payload: payload}
}

export const menShoesBootsErrorAction = ()=>{
    return {type: MEN_SHOES_BOOTS_ERROR}
}

export const menShoesBootsData = ()=>(dispatch)=>{
 
    dispatch(menShoesBootsLoadingAction())
    axios.get(`https://e-cart-5jh7.onrender.com/shoes/male/boots`)
    .then((res)=>{
     dispatch(menShoesBootsSuccessAction(res.data.boots))
    })
    .then((err)=>{
     dispatch(menShoesBootsErrorAction())
    })


}