import { combineReducers } from 'redux'
import CarReducer from './CarReducer'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'


export default combineReducers({car: CarReducer, auth: AuthReducer, alert: AlertReducer})