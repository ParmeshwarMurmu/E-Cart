import { SINGLE_USER_ERROR, SINGLE_USER_LOADING, SINGLE_USER_SUCCESS } from "./action"

const initialState = {
    user: {},
    isLoading: false,
    isError: false,
    isData: false
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SINGLE_USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SINGLE_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                isLoading: false
            }

            case SINGLE_USER_ERROR:
            return {
                ...state,
                isError: false
            }
            
        default:
            return state
    }

}