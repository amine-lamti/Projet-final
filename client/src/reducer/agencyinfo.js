import{GET_AGENCYCAR,CLEAR_CURRENTCAR} from "../actions/types"

const initialestate={
    cars:[],
    resrevations:[]
}

const Agencyreducer=(state=initialestate,action)=>{
    switch(action.type){
        case GET_AGENCYCAR:
            return{...state,
            cars:action.payload
        }
        case CLEAR_CURRENTCAR:
            return{
                ...state,
                cars:[]
            }
       
        default:
            return state
    }
}
export default Agencyreducer