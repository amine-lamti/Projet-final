import{GET_AGENCYCAR} from "./types"

const initialestate={
    cars:[],
    resrevations:null
}

const Agencyreducer=(state=initialestate,action)=>{
    switch(action.type){
        case GET_AGENCYCAR:
            return{...state,
            cars:action.payload
        }
        default:
            return state
    }
}
export default Agencyreducer