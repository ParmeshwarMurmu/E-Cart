import axios from "axios"

export const ALL_MEN_PRODUCT_LOADING = 'ALL_MEN_PRODUCT_LOADING'
export const ALL_MEN_PRODUCT_SUCCESS = 'ALL_MEN_PRODUCT_SUCCESS'
export const ALL_MEN_PRODUCT_ERROR = 'ALL_MEN_PRODUCT_ERROR'


export const allMenProductLoadingAction = ()=>{
    return {type: ALL_MEN_PRODUCT_LOADING}
}

export const allMenProductSuccessAction = (payload)=>{
    return {type: ALL_MEN_PRODUCT_SUCCESS, payload: payload}
}

export const allMenProductErrorAction = ()=>{
    return {type: ALL_MEN_PRODUCT_ERROR}
}

export const allProductData = (category, obj, page)=>(dispatch)=>{

    console.log(category, obj);
 
    dispatch(allMenProductLoadingAction())
    axios.get(`http://localhost:8080/allProducts/${category}?page=${page}&limit=10`, obj)
    .then((res)=>{
        console.log("&&");
        console.log(res.data);
     dispatch(allMenProductSuccessAction(res.data))
    })
    .then((err)=>{
     dispatch(allMenProductErrorAction())
    })


}