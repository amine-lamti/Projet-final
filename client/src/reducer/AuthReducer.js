import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERRORS, CLEAR_ERRORS, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null, 
    error: null
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }

    
}

export default AuthReducer

