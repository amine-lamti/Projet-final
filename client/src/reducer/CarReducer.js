import { ADD_CAR, DELETE_CAR, UPDATE_CAR, SAVE_CAR, CLEAR_CAR } from '../actions/types'

const initialState = {
    car:[],
saved: null
}




const CarReducer = (state=initialState, action) => {
    switch(action.type){
          case ADD_CAR:
              return {
                ...state,
                car: [... state.car, action.payload]}
          case DELETE_CAR:
              return {
               ...state,   
                car: state.car.filter(el => el.id !== action.payload)}
          case SAVE_CAR:
              return {
                  ...state,
                saved: action.payload}     
          case UPDATE_CAR:
              return {
                 ...state,
                 car: state.car.map(el => el.id === action.payload.id ? action.payload : el)}
           case CLEAR_CAR:
               return {
                ...state, saved: null}     
              default:
            return state
    }
}

export default CarReducer