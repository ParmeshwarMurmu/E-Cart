import { SERACH_DATA_ERROR, SERACH_DATA_LOADING, SERACH_DATA_SUCCESS, SERACH_TITLE } from "./action"


const initialState = {
    category: "",
    searchData: [],
    isLoading: false,
    isError: false,
    isData: false

}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SERACH_TITLE:
            return {
                ...state,
                category: payload
            }

        case SERACH_DATA_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SERACH_DATA_SUCCESS:
            return {
                ...state,
                searchData: payload,
                isLoading: false
            }

        case SERACH_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return {
                ...state
            }
    }

}