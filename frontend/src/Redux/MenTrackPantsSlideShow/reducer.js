import { error, loading, trackPants } from "./action"

const initialState = {

    trackPants:[],
    isLoading: false,
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){
        
        case loading:
        return{
            ...state,
            isLoading: true,
            isError: false
        }

        case trackPants :
            return{
                ...state,
                trackPants: payload,
                isError: false,
                isData: true,
                isLoading: false
            }

            case error:
                return{
                    ...state,
                    isError: true,
                    isLoading: false
                }
        default: 
        return state
    }
}