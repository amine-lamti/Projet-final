import {GET_CLIENTCAR} from "../actions/types"
const initialestate = {
    cars:[],
    



}
const Clientcar =(state=initialestate,action)=>{
    switch(action.type){
        case GET_CLIENTCAR:
            return {...state,
                cars:action.payload}
        default:
            return state
    }
}
export default Clientcar