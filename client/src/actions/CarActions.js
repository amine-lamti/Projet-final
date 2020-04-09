import{GET_CLIENTCAR,GET_AGENCYCAR,CLEAR_CURRENTCAR} from "./types"
import axios from 'axios'

export const getclientcar=()=>dispatch=>{
    const config = {
        headers: {
            'Content-type': 'application/json'

        }
    }
    axios.get("/api/clientcar",config)
    .then((res)=>dispatch({
        type:GET_CLIENTCAR,
        payload:res.data
    }))
}
export  const getagencycar=()=>dispatch=>{
    const config = {
        headers: {
            'Content-type':'application/json'
                }
    }
    axios.get("/api/agencycar",config)
    .then((res)=>dispatch({
        type:GET_AGENCYCAR,
        payload:res.data
    }))
}
export const clearcars=()=>dispatch=>{
    dispatch({
        type:CLEAR_CURRENTCAR,
    })
}
export const clearcars=()=>dispatch=>{
    dispatch({
        type:CLEAR_CURRENTCAR,
    })
}