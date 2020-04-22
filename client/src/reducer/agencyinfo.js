import {
    GET_AGENCYCAR, CLEAR_CURRENTCAR, CAR_ERR, SAVED_CAR, DELETE_CAR,
    UPDATE_CAR,CLEARSAVED_CAR,
} from "../actions/types"

const initialestate = {
    cars: [],
    err: null,
    saved: null



}

const Agencyreducer = (state = initialestate, action) => {
    switch (action.type) {
        case GET_AGENCYCAR:
            return {
                ...state,
                cars: action.payload
            }
        case CLEAR_CURRENTCAR:
            return {
                ...state,
                cars:[]
            }
           
        
        case CAR_ERR:
            return {
                ...state,
                err: action.payload
            }
        case SAVED_CAR:
            return {
                ...state,
                saved: action.payload
            }
            
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(el => el._id !== action.payload)
            }
        case UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map(el => el._id === action.payload._id ? action.payload : el)
            }
            case CLEARSAVED_CAR:
                return{
                    ...state,
                    saved:null
                }
        default:
            return state
    }
}
export default Agencyreducer