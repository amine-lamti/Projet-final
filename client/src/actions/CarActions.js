import{GET_CLIENTCAR,GET_AGENCYCAR,CLEAR_CURRENTCAR,ADD_CAR,CAR_ERR} from "./types"
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
export const addcar =(newcar)=>dispatch=>{
    const config = {
        headers: {
            'Content-type':'application/json'
                }
    }
    axios.post("/api/agencycar",newcar,config)
    .then((res)=>dispatch({
        type:ADD_CAR,
        payload:res.data
    })) 
    .catch(err=>dispatch({
        type:CAR_ERR,
        payload:err.response.msg
    }))
}



