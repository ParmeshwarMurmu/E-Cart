import { WOMEN_KURTAS_KURTIS_ERROR, WOMEN_KURTAS_KURTIS_SUCCESS, WOMEN_KURTAS_KURTIS_LOADING } from "./action"

const initialState = {
    isLoading: false,
    womenKurtasKurtisData: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case WOMEN_KURTAS_KURTIS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case WOMEN_KURTAS_KURTIS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    womenKurtasKurtisData: payload,
                    isData: true
                }

                case WOMEN_KURTAS_KURTIS_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}