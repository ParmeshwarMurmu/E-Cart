import { USER_ORDER_ERROR, USER_ORDER_LOADING, USER_ORDER_SUCCESS } from "./action";


const initialState = {
    userOrder: [],
    isLoading: false,
    isError: false,
    isData: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case USER_ORDER_LOADING:
            return {
                ...state,
                isLoading: true

            }

        case USER_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isData: true,
                userOrder: payload

            }

        case USER_ORDER_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true

            }


        default:
            return {
                ...state
            }
    }
}