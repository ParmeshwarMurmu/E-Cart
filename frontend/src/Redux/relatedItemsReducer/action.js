import axios from "axios"

export const RELATED_ITEMS_LOADING = 'RELATED_ITEMS_LOADING'
export const RELATED_ITEMS_SUCCESS = 'RELATED_ITEMS_SUCCESS'
export const RELATED_ITEMS_ERROR = 'RELATED_ITEMS_ERROR'


export const relatedItemsLoadingAction = ()=>{

    return {type: RELATED_ITEMS_LOADING}
}

export const relatedItemsSuccessAction = (payload)=>{

    return {type: RELATED_ITEMS_SUCCESS, payload: payload}
}

export const relatedItemsErrorAction = ()=>{

    return {type: RELATED_ITEMS_ERROR}
}



export const relatedItemsData = (category, type, id)=>(dispatch)=>{
    
    dispatch(relatedItemsLoadingAction())
    axios.get(`https://e-cart-5jh7.onrender.com/singleProduct/relatedItems/${category}/${type}/${id}`)
    .then((res)=>{
      console.log("%%",res.data)
      dispatch(relatedItemsSuccessAction(res.data.relatedItems))
    })
    .catch((err)=>{
      dispatch(relatedItemsErrorAction())
    })

}