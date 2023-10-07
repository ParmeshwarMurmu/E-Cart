import { WOMEN_SAREE_ERROR, WOMEN_SAREE_LOADING, WOMEN_SAREE_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    data: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case WOMEN_SAREE_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case WOMEN_SAREE_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    data: payload,
                    isData: true,
                    isError: false
                }

                case WOMEN_SAREE_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}