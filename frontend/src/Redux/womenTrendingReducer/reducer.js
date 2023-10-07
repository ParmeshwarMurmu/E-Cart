import { SINGLE_PAGE_DATA, SINGLE_PAGE_ERROR, SINGLE_PAGE_LOADING } from "./action"

const initialState = {
    isLoading: false,
    data: {},
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case SINGLE_PAGE_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case SINGLE_PAGE_DATA:
                return {
                    ...state,
                    isLoading: false,
                    data: payload,
                    isData: true
                }

                case SINGLE_PAGE_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}