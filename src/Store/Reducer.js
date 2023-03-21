export const initialState = {
    login: null,
    authToken: null,
    loginRef: null,
    type : null,
}

export const actionTypes = {
    log_in: 'log_in',
    log_out: 'log_out',
    set_authToken: 'set_authToken',
    login_ref: 'login_ref',
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.log_in:
            return {
                ...state,
                authToken: action.authToken,
                login: true,
                type : action.userType
            }
        case actionTypes.log_out:
            return {
                ...state,
                authToken: null,
                login: false,
                type : null
            }
        case actionTypes.set_authToken:
            return {
                ...state,
                authToken: action.authToken
            }
        default:
            return state
    }
}

export default reducer