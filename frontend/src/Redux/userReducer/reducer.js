import { EMAIL, PASSWORD } from "./action"

const initialState = {
    email: "",
    password: ""
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

        default:
            return state
    }

}