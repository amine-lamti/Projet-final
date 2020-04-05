import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, type, id) => {
    return{
        type: SET_ALERT,
        payload: { msg, type, id}
}

}

export const removeAlert = id => {
    return{
        type: REMOVE_ALERT,
        payload: id
    }
}
