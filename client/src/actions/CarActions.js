import{GET_CLIENTCAR,GET_AGENCYCAR} from "./types"
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'


export const getclientcar=()=>dispatch=>{
    axios.get("/api/clientcar")
    .then((res)=>dispatch({
        type:GET_CLIENTCAR,
        payload:res.data
    }))
}
export  const getagencycar=()=>dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    axios.get("/api/agencycar")
    .then(()=>dispatch({
        type:GET_AGENCY,
        payload:res.data
    }))
}