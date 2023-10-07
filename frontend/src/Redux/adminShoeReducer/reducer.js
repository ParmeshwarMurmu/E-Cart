import { resetShoe, shoeBrand, shoeCategory, shoeColor, shoeGender, shoeImages, shoePrice, shoeSize, shoeTitle } from "./action"

const initialState = {
    title: "",
    images: [],
    brand: "",
    gender: "",
    color: "",
    price: "",
    category: "",
    size: [],
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case shoeTitle:
            return {
                ...state,
                title: payload
            }

        case shoeImages:
            return {
                ...state,
                images: payload
            }

        case shoeBrand:
            return {
                ...state,
                brand: payload
            }

        case shoeColor:
            return {
                ...state,
                color: payload
            }

            case shoeGender:
                return {
                    ...state,
                    gender: payload
                }

        case shoePrice:
            return {
                ...state,
                price: payload
            }

        case shoeCategory:
            return {
                ...state,
                category: payload
            }

        case shoeSize:
            return {
                ...state,
                size: payload
            }

        case resetShoe:
            return {
                ...initialState
            }

        default:
            return state
    }

}