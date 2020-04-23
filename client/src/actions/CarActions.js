import{GET_CLIENTCAR,GET_AGENCYCAR,CLEAR_CURRENTCAR,ADD_CAR,CAR_ERR,DELETE_CAR,EDIT_RESREVATION,UPDATE_CAR,CLEARSAVED_CAR,SAVED_CAR} from "./types"
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
        payload:err.msg
    }))
}
export const editcar=(updatedcar)=>dispatch=>{
    const config = {
        headers: {
            'Content-type':'application/json'
                }
    }
    axios.put(`/api/agencycar/${updatedcar._id}`,updatedcar,config)
     .then((res)=>dispatch({
         type:UPDATE_CAR,
         payload:updatedcar
     }))
     .catch(err=>dispatch({
        type:CAR_ERR,
        payload:err.msg
    }))
}
export const deletecar=(id)=>dispatch=>{
    const config = {
        headers: {
            'Content-type':'application/json'
                }
    }
    axios.delete(`/api/agencycar/${id}`,config)
    .then(()=>dispatch({
        type:DELETE_CAR,
        payload:id
    })) 
    .catch(err=>dispatch({
        type:CAR_ERR,
        payload:err.response.msg
    }))
}
export const saved=(cartoupdate)=>dispatch =>{
        dispatch({
            type:SAVED_CAR,
            payload:cartoupdate
        })

}
export const clearsave=()=>dispatch=>{
    dispatch ({
        type:CLEARSAVED_CAR,
        
    })
}
export const reserver=(reservation)=>dispatch=>{
    const config = {
        headers: {
            'Content-type':'application/json'
                }
    }
    axios.put(`/api/agencycar/api/${reservation.id}`,reservation,config)
    .then(res=>dispatch({
        type:EDIT_RESREVATION,
        payload:reservation
    }))
    .catch(err=>dispatch({
        type:CAR_ERR,
        payload:err.response.msg
    }))
}






