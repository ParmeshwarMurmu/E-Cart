import { ALL_MEN_PRODUCT_ERROR, ALL_MEN_PRODUCT_LOADING, ALL_MEN_PRODUCT_SUCCESS } from "./action"

const initialState = {
    isLoading: false,
    data: [],
    allBrands: [],
    allColors: [],
    allCategory: [],
    allGender: [],
    totalData: "",
    isData: false,
    isError: false
}

export const reducer = (state = initialState, {type, payload})=>{

    switch(type){

        case ALL_MEN_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
            }

            case ALL_MEN_PRODUCT_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    data: payload.data,
                    allBrands: payload.allBrands,
                    allCategory:payload.allCategory,
                    allColors: payload.allColors,
                    allGender:payload.allGender,
                    totalData: payload.totalData,
                    isData: true
                }

                case ALL_MEN_PRODUCT_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isError:true,
                    }

        default:
            return state
    }

}