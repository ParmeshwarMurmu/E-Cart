import { EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, RESET } from "./action"

const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case EMAIL:
            return {
                ...state,
                email: payload
            }

        case PASSWORD:
            return {
                ...state,
                password: payload
            }

            case FIRST_NAME:
            return {
                ...state,
                firstName: payload
            }

            case LAST_NAME:
            return {
                ...state,
                lastName: payload
            }

            case RESET:
                return {
                    ...initialState
                }

        default:
            return state
    }

}