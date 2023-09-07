import { resetWomen, womenBrand, womenCategory, womenColor, womenImages, womenPrice, womenSize, womenTitle } from "./action"

const initialState = {
    title: "",
    images: [],
    brand: "",
    color: "",
    price: "",
    category: "",
    size: [],

}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case womenTitle:
            return {
                ...state,
                title: payload
            }

        case womenImages:
            return {
                ...state,
                images: payload
            }

        case womenBrand:
            return {
                ...state,
                brand: payload
            }

        case womenColor:
            return {
                ...state,
                color: payload
            }

        case womenPrice:
            return {
                ...state,
                price: payload
            }

        case womenCategory:
            return {
                ...state,
                category: payload
            }

        case womenSize:
            return {
                ...state,
                size: payload
            }

        case resetWomen:
            return {
                ...initialState
            }


        default:
            return state
    }

}