import {MEN_TRENDING_SHOES_LOADING, MEN_TRENDING_SHOES_SUCCESS, MEN_TRENDING_SHOES_ERROR} from './action'

const initialState = {
    isLoading: false,
    menCasualShoes: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case MEN_TRENDING_SHOES_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case MEN_TRENDING_SHOES_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    menCasualShoes: payload,
                    isData: true
                }

                case MEN_TRENDING_SHOES_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}