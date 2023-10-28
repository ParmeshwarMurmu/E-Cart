

export const USER_EMAIL = "USER_EMAIL";
export const USER_ADDESSS = "USER_ADDESSS";
export const USER_STATE = "USER_STATE";
export const USER_DISTRICT = "USER_DISTRICT";
export const USER_PINCODE = "USER_PINCODE";
export const USER_EXPMONTH = "USER_EXPMONTH";
export const USER_EXPYEAR = "USER_EXPYEAR";
export const USER_CVV = "USER_CVV";
export const USER_CARD_NUMBER = "USER_CARD_NUMBER";
export const USER_PAYMENT_MODE = "USER_PAYMENT_MODE";


export const userEmailAction = (payload)=>{
    return {type: USER_EMAIL, payload: payload}
}

export const userAddressAction = (payload)=>{
    return {type: USER_ADDESSS, payload: payload}
}

export const userStateAction = (payload)=>{
    return {type: USER_STATE, payload: payload}
}

export const userDistrictAction = (payload)=>{
    return {type: USER_DISTRICT, payload: payload}
}

export const userPincodeAction = (payload)=>{
    return {type: USER_PINCODE, payload: payload}
}

export const userExpmonthAction = (payload)=>{
    return {type: USER_EXPMONTH, payload: payload}
}

export const userExpyearAction = (payload)=>{
    return {type: USER_EXPYEAR, payload: payload}
}

export const userCvvAction = (payload)=>{
    return {type: USER_CVV, payload: payload}
}

export const userCardNumberAction = (payload)=>{
    return {type: USER_CARD_NUMBER, payload: payload}
}

export const userPaymentModeAction = (payload)=>{
    return {type: USER_PAYMENT_MODE, payload: payload}
}