export const EMAIL = 'EMAIL'
export const PASSWORD = 'PASSWORD'

export const emaiAction = (payload)=>{
    return {type: EMAIL, payload}

}

export const passwordAction = (payload)=>{
    return {type: PASSWORD, payload}

}