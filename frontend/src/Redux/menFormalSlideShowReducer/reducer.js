import { MEN_FORMAL_ERROR, MEN_FORMAL_LOADING, MEN_FORMAL_SUCCESS } from "./action"


const initialState = {

    menFormal:[],
    isLoading: false,
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){
        
        case MEN_FORMAL_LOADING:
        return{
            ...state,
            isLoading: true,
            isError: false
        }

        case MEN_FORMAL_SUCCESS :
            return{
                ...state,
                menFormal: payload,
                isError: false,
                isData: true,
                isLoading: false
            }

            case MEN_FORMAL_ERROR:
                return{
                    ...state,
                    isError: true,
                    isLoading: false
                }
        default: 
        return state
    }
}