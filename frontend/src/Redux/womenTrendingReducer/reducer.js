import { WOMEN_TRENDING_ERROR, WOMEN_TRENDING_LOADING, WOMEN_TRENDING_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    womenTrendingData: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case WOMEN_TRENDING_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case WOMEN_TRENDING_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    womenTrendingData: payload,
                    isData: true
                }

                case WOMEN_TRENDING_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}