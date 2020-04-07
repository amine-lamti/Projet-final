import { ADD_CAR, DELETE_CAR, UPDATE_CAR, SAVE_CAR, CLEAR_CAR } from './types'

export const addCar = newCar => dispatch => {
    dispatch({
        type: ADD_CAR,
        payload: newCar
    })
}

export const deleteCar = id => {
    return{
        type: DELETE_CAR,
        payload: id
    }
} 

export const saveCar = car => {
    return{
        type: SAVE_CAR,
        payload: car
    }
}

export const editCar = updatedCar => {
    return{
        type: UPDATE_CAR,
        payload: updatedCar 
    }
}

export const clearCar = () => {
    return{
        type: CLEAR_CAR
    }
}