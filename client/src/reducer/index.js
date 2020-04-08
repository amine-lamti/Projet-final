import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import Clientcar from  "./clientCarReducer"


export default combineReducers({ auth: AuthReducer, alert: AlertReducer,Clientcar})