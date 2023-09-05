import { menBrand, menCategory, menColor, menImages, menPrice, menSize, menTitle, resetMen } from "./action"

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

        case menTitle:
            return {
                ...state,
                title: payload
            }

        case menImages:
            return {
                ...state,
                images: payload
            }

        case menBrand:
            return {
                ...state,
                brand: payload
            }

        case menColor:
            return {
                ...state,
                color: payload
            }

        case menPrice:
            return {
                ...state,
                price: payload
            }

        case menCategory:
            return {
                ...state,
                category: payload
            }

        case menSize:
            return {
                ...state,
                size: payload
            }

            case resetMen:
                return {
                    ...initialState
                }

        default:
            return state
    }

}