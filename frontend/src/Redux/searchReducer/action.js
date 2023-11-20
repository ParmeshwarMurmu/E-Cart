export const SERACH_TITLE = 'SEARCH_TITLE'
export const SERACH_DATA_LOADING = 'SEARCH_DATA_LOADING'
export const SERACH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS'
export const SERACH_DATA_ERROR = 'SEARCH_DATA_ERROR'

export const searchTitleAction = (payload)=>{

    return {type:SERACH_TITLE, payload}
}

export const searchDataLoadingAction = ()=>{

    return {type:SERACH_DATA_LOADING}
}

export const searchDataSuccessAction = (payload)=>{

    return {type:SERACH_DATA_SUCCESS, payload}
}

export const searchDataFailureAction = ()=>{

    return {type:SERACH_DATA_ERROR}
}