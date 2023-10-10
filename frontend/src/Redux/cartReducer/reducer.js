import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./action";

const initialState = {
    isLoding:"",
    cartData: [],
    isError: "",
    isData: ""
}

export const reducer = (state = initialState.cartData, {type, payload})=>{

    switch (type) {
        case CART_LOADING:
            return {
                ...state,
                isLoding: true
            }

            case CART_SUCCESS:
            return {
                ...state,
                isLoding: false,
                cartData: payload,
                isData: true
            }

            case CART_ERROR:
                return {
                    ...state,
                    isLoding: false,
                    isError:true
                    
                   
                }
    
        default:
            return {
                state
            }
    }
}