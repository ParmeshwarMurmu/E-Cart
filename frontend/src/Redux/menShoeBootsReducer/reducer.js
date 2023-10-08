import { MEN_FORMAL_SHOES_ERROR } from "../menFormalShoesReducer/action"
import { MEN_SHOES_BOOTS_LOADING, MEN_SHOES_BOOTS_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    mensBoots: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case MEN_SHOES_BOOTS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case MEN_SHOES_BOOTS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    mensBoots: payload,
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