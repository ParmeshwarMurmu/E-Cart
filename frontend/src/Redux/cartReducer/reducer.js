import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./action";

const initialState = {
    isLoading:"",
    cartData: [],
    isError: "",
    isData: ""
}

export const reducer = (state = initialState.cartData, {type, payload})=>{

    switch (type) {
        case CART_LOADING:
            return {
                ...state,
                isLoading: true
            }

            case CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartData: payload,
                isData: true
            }

            case CART_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    isError:true
                    
                   
                }
    
        default:
            return {
                state
            }
    }
}