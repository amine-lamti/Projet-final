import {GET_CLIENTCAR, CLEAR_CURRENTCAR} from "../actions/types"
const initialestate = {
    cars:[],
    



}
const Clientcar =(state=initialestate,action)=>{
    switch(action.type){
        case GET_CLIENTCAR:
            return {...state,
                cars:action.payload}  
                    case CLEAR_CURRENTCAR:
                        return {
                            ...state,
                            cars:[]
                        }
        default:
            return state
    }
}
export default Clientcar