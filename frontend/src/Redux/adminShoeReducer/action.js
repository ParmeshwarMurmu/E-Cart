
import axios from "axios"



export const shoeTitle = 'Title'
export const shoeImages = 'Images'
export const shoeBrand = 'Brand'
export const shoeColor = 'Color'
export const shoePrice = 'Price'
export const shoeCategory = 'Category'
export const shoeSize = 'Size'
export const shoeGender = 'Gender'
export const resetShoe = 'ResetShoe'


export const shoeTitleSuccessAction = (payload) => {
    return { type: shoeTitle, payload: payload }
}

export const shoeImageSuccessAction = (payload) => {
    return { type: shoeImages, payload: payload }
}

export const shoeBrandSuccessAction = (payload) => {
    return { type: shoeBrand, payload: payload }
}


export const shoeColorSuccessAction = (payload) => {
    return { type: shoeColor, payload: payload }
}

export const shoePriceSuccessAction = (payload) => {
    return { type: shoePrice, payload: payload }
}

export const shoeCategorySuccessAction = (payload) => {
    return { type: shoeCategory, payload: payload }
}


export const shoeGenderSuccessAction = (payload) => {
    return { type: shoeGender, payload: payload }
}


export const shoeSizeSuccessAction = (payload) => {
    return { type: shoeSize, payload: payload }
}


export const shoeResetSuccessAction = () => {
    return { type: resetShoe }
}





