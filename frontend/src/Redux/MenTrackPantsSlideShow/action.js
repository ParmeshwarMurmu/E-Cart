import axios from "axios"

export const trackPants = 'trackPants'
export const loading = 'loading'
export const error = 'error'

export const trackPantsLoadingAction = () => {
    return { type: loading}
}

export const trackPantsSuccessAction = (payload) => {
    return { type: trackPants, payload: payload }
}

export const trackPantsFailureAction = () => {
    return { type: error }
}

export const trackPantsData = ()=>(dispatch)=>{

    dispatch(trackPantsLoadingAction())
    axios.get('https://full-4qyv.onrender.com/home/men/category?category=formal shirts')
    .then((res) => {
        dispatch(trackPantsSuccessAction(res.data.category))
    })
    .catch((err) => {
        dispatch(trackPantsFailureAction())
    })
}