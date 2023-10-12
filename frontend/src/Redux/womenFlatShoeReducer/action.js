import axios from "axios"

export const WOMEN_FLAT_SHOES_LOADING = 'WOMEN_FLAT_SHOES_LOADING'
export const WOMEN_FLAT_SHOES_SUCCESS = 'WOMEN_FLAT_SHOES_SUCCESS'
export const WOMEN_FLAT_SHOES_ERROR = 'WOMEN_FLAT_SHOES_ERROR'


export const womenFlatShoesLoadingAction = ()=>{

    return {type: WOMEN_FLAT_SHOES_LOADING}
}

export const womenFlatShoesSuccessAction = (payload)=>{

    return {type: WOMEN_FLAT_SHOES_SUCCESS, payload: payload}
}

export const womenFlatShoesErrorAction = ()=>{

    return {type: WOMEN_FLAT_SHOES_ERROR}
}



export const womenFlatShoesData = ()=>(dispatch)=>{
    
    dispatch(womenFlatShoesLoadingAction())
    axios.get(`https://full-4qyv.onrender.com/shoes/female/flatShoes`)
    .then((res)=>{
    
        dispatch(womenFlatShoesSuccessAction(res.data.flatShoes))
      
    })
    .catch((err)=>{
      dispatch(womenFlatShoesErrorAction())
    })

}