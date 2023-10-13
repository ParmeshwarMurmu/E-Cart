import axios from "axios"

export const SINGLE_USER_LOADING = 'SINGLE_USER_LOADING'
export const SINGLE_USER_SUCCESS = 'SINGLE_USER_SUCCESS'
export const SINGLE_USER_ERROR = 'SINGLE_USER_ERROR'


export const singleUserLoadingAction = ()=>{

    return {type: SINGLE_USER_LOADING}

}


export const singleUserSuccessAction = (payload)=>{

    return {type: SINGLE_USER_SUCCESS, payload: payload}

}

export const singleUserErrorAction = ()=>{

    return {type: SINGLE_USER_ERROR}

}


export const singleUserData = (id)=>(dispatch)=>{

    dispatch(singleUserLoadingAction())
    axios.get(`http://localhost:8080/user/singleUser/${id}`)
    .then((res) => {
    dispatch(singleUserSuccessAction(res.data.user))
        
    })
    .catch((err) => {
       dispatch(singleUserErrorAction())
    })


}