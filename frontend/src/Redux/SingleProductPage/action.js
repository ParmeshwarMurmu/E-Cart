import axios from "axios"

export const SINGLE_PAGE_LOADING = 'SINGLE_PAGE_LOADING'
export const SINGLE_PAGE_ERROR = 'SINGLE_PAGE_ERROR'
export const SINGLE_PAGE_DATA = 'SINGLE_PAGE_DATA'

export const singlePageLoadingAction = ()=>{

    return {type: SINGLE_PAGE_LOADING}
}

export const singlePageErrorAction = ()=>{

    return {type: SINGLE_PAGE_ERROR}
}


export const singlePageDataSuccessAction = (payload)=>{

    return {type: SINGLE_PAGE_DATA, payload: payload}
}

export const singlePageData = (id)=>()=>{

    axios.get('http://localhost:8080/adminMen/add/men')

}

