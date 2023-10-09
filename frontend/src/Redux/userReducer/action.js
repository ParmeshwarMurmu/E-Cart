export const EMAIL = 'EMAIL'
export const PASSWORD = 'PASSWORD'
export const RESET = "RESET"
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'

export const emaiAction = (payload)=>{
    return {type: EMAIL, payload}

}

export const firstNameAction = (payload)=>{
    return {type: FIRST_NAME, payload}

}

export const lastNameAction = (payload)=>{
    return {type: LAST_NAME, payload}

}

export const passwordAction = (payload)=>{
    return {type: PASSWORD, payload}

}

export const ressetAction = ()=>{
    return {type: RESET}

}