export const menTitle = 'Title'
export const menImages = 'Images'
export const menBrand = 'Brand'
export const menColor = 'Color'
export const menPrice = 'Price'
export const menCategory = 'Category'
export const menSize = 'Size'
export const resetMen = 'ResetMen'

export const titleSuccess = (payload)=>{
    return {type: menTitle, payload: payload}
}

export const imageSuccess = (payload)=>{
    return {type: menImages, payload: payload}
}

export const brandSuccess = (payload)=>{
    return {type: menBrand, payload: payload}
}


export const colorSuccess = (payload)=>{
    return {type: menColor, payload: payload}
}

export const priceSuccess = (payload)=>{
    return {type: menPrice, payload: payload}
}

export const categorySuccess = (payload)=>{
    return {type: menCategory, payload: payload}
}

export const sizeSuccess = (payload)=>{
    return {type: menSize, payload: payload}
}


export const resetSuccess = ()=>{
    return {type: resetMen}
}

export const addMenData= (data)=>(dispatch)=>{
    console.log(data);
}




