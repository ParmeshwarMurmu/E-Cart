import {
    MEN_TRENDING_LOADING,
    MEN_TRENDING_SUCCESS,
    MEN_TRENDING_ERROR
} from './action'

const initialState = {

    menTrending:[],
    isLoading: false,
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){
        
        case MEN_TRENDING_LOADING:
        return{
            ...state,
            isLoading: true,
            isError: false
        }

        case  MEN_TRENDING_SUCCESS:
            return{
                ...state,
                menTrending: payload,
                isError: false,
                isData: true,
                isLoading: false
            }

            case  MEN_TRENDING_ERROR:
                return{
                    ...state,
                    isError: true,
                    isLoading: false
                }
        default: 
        return state
    }
}