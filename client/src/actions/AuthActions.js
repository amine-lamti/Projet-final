import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERRORS, CLEAR_ERRORS, LOGOUT, USER_LOADED } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => dispatch => {
  if(localStorage.token){
      setAuthToken(localStorage.token)
  }
    axios.get('/api/auth')
         .then(res => dispatch ({
             type: USER_LOADED,
             payload: res.data
         }))
         .catch(err => dispatch ({
             type: AUTH_ERRORS
         }))
}
// Register User
export const register = FormData => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'

        }
    }
    axios.post('/api/client', FormData, config)
         .then(res => { 
             dispatch({
             type: REGISTER_SUCCESS,
             payload: res.data
         })
         dispatch(loadUser())
        })
         .catch(err => dispatch ({
             type: REGISTER_FAIL,
             payload: err.response.data.msg
         }))
}
// Login User
export const login = formData => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'

        }
    }
    axios.post('/api/auth', formData, config)
         .then(res => { 
             dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data
         })
         dispatch(loadUser())
        })
         .catch(err => dispatch ({
           type: LOGIN_FAIL,
           payload: err.response.data.msg
         }))
}


// Logout User
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT     
    })
}

// Clear Errors
export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}