import { RELATED_ITEMS_ERROR, RELATED_ITEMS_LOADING, RELATED_ITEMS_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    relatedItems: [],
    isRelatedData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case RELATED_ITEMS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case RELATED_ITEMS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    relatedItems: payload,
                    isRelatedData: true,
                    isError: false
                }

                case RELATED_ITEMS_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}