import axios from 'axios'
import {GET_USERS} from './actionsTypes'


export const getAllUsers=()=>dispatch=>{

axios.get('/api/user')
.then(res=>dispatch({type:GET_USERS,payload:res.data}))
.catch(err=>console.log(err))
}
export const addUser=(formData)=>dispatch=>{
    axios.post('/api/user',formData)
    .then(()=>dispatch(getAllUsers()))
    .catch(err=>console.log(err))
}
export const deleteUser=(id)=>dispatch=>{
    axios.delete('/api/user'+id)
    .then(()=>dispatch(getAllUsers()))
    .catch(err=>console.log(err))
}
export const updateUser=(id,formData)=>dispatch=>{
    axios.put('/api/user'+id,formData)
    .then(()=>dispatch(getAllUsers()))
    .catch(err=>console.log(err))
}