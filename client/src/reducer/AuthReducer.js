import { USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERRORS, CLEAR_ERRORS, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null, 
    error: null
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
        case AUTH_ERRORS:
        case REGISTER_FAIL:
            localStorage.removeItem('token') 
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }    
        default:
            return state
    }

    
}

export default AuthReducer

