import {GET_CLIENTCAR} from "../actions/types"

const Clientcar =(state=[],action)=>{
    switch(action.type){
        case GET_CLIENTCAR:
            return [action.payload,...state]
        default:
            return state
    }
}
export default Clientcar