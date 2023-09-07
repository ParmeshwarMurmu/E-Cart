



export const womenTitle = 'Title'
export const womenImages = 'Images'
export const womenBrand = 'Brand'
export const womenColor = 'Color'
export const womenPrice = 'Price'
export const womenCategory = 'Category'
export const womenSize = 'Size'
export const resetWomen = 'ResetWomen'


export const womentitleSuccess = (payload) => {
    return { type: womenTitle, payload: payload }
}

export const womenimageSuccess = (payload) => {
    return { type: womenImages, payload: payload }
}

export const womenbrandSuccess = (payload) => {
    return { type: womenBrand, payload: payload }
}


export const womencolorSuccess = (payload) => {
    return { type: womenColor, payload: payload }
}

export const womenpriceSuccess = (payload) => {
    return { type: womenPrice, payload: payload }
}

export const womencategorySuccess = (payload) => {
    return { type: womenCategory, payload: payload }
}

export const womensizeSuccess = (payload) => {
    return { type: womenSize, payload: payload }
}


export const womenresetSuccess = () => {
    return { type: resetWomen }
}






