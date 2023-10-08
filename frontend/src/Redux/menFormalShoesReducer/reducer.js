import { MEN_FORMAL_SHOES_ERROR, MEN_FORMAL_SHOES_LOADING, MEN_FORMAL_SHOES_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    menFormalShoes: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case MEN_FORMAL_SHOES_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case MEN_FORMAL_SHOES_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    menFormalShoes: payload,
                    isData: true
                }

                case MEN_FORMAL_SHOES_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}