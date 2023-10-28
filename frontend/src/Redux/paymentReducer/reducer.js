import { USER_ADDESSS, USER_CARD_NUMBER, USER_CVV, USER_DISTRICT, USER_EMAIL, USER_EXPMONTH, USER_EXPYEAR, USER_PINCODE, USER_STATE } from "./action";

const initialState = {
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
};

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_EMAIL:
            return {
                ...state,
                email: payload
            }

        case USER_ADDESSS:
            return {
                ...state,
                address: payload
            }

        case USER_STATE:
            return {
                ...state,
                state: payload
            }

        case USER_DISTRICT:
            return {
                ...state,
                district: payload
            }

        case USER_PINCODE:
            return {
                ...state,
                pincode: payload
            }

        case USER_EXPMONTH:
            return {
                ...state,
                expMonth: payload
            }

        case USER_EXPYEAR:
            return {
                ...state,
                expYear: payload
            }

        case USER_CVV:
            return {
                ...state,
                cvv: payload
            }


        case USER_CARD_NUMBER:
            return {
                ...state,
                cardNumber: payload
            }


        default:
            break;
    }

}