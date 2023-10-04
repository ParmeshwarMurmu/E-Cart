export const trackPants = 'trackPants'
export const loading = 'loading'
export const error = 'error'

export const trackPantsLoading = () => {
    return { type: loading}
}

export const trackPantsSuccess = (payload) => {
    return { type: trackPants, payload: payload }
}

export const trackPantsFailure = () => {
    return { type: error }
}
