
import { WOMEN_SHOES_HEELS_TRENDING_ERROR, WOMEN_SHOES_HEELS_TRENDING_LOADING, WOMEN_SHOES_HEELS_TRENDING_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    heels: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case WOMEN_SHOES_HEELS_TRENDING_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case WOMEN_SHOES_HEELS_TRENDING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                heels: payload,
                isData: true,
                isError: false
            }

        case WOMEN_SHOES_HEELS_TRENDING_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state
    }

}