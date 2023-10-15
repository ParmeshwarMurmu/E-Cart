import { RELATED_ITEMS_ERROR, RELATED_ITEMS_LOADING, RELATED_ITEMS_SUCCESS } from "./action"

const initialState = {
    isLoadingRelated: false,
    relatedItems: [],
    isRelatedData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case RELATED_ITEMS_LOADING:
            return {
                ...state,
                isLoadingRelated: true,
            }

            case RELATED_ITEMS_SUCCESS:
                return {
                    ...state,
                    isLoadingRelated: false,
                    relatedItems: payload,
                    isRelatedData: true,
                    isError: false
                }

                case RELATED_ITEMS_ERROR:
                    return {
                        ...state,
                        isLoadingRelated: false,
                        isError:true,
                    }

        default:
            return state
    }

}