import { WOMEN_FLAT_SHOES_ERROR, WOMEN_FLAT_SHOES_LOADING, WOMEN_FLAT_SHOES_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    flatShoes: [],
    isData: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case WOMEN_FLAT_SHOES_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case WOMEN_FLAT_SHOES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                flatShoes: payload,
                isData: true,
                isError: false
            }

        case WOMEN_FLAT_SHOES_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state
    }

}