import React,{useReducer,useEffect} from 'react'
import axios from "axios"

const initialState={
    loading:true,
    post:{},
    error:""
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
          return {  loading:false,
            post: action.payload,
            error:''
    }
        case 'FETCH_ERROR':
        return {  loading:false,
          post:{},
          error: action.payload
  }
  default :
  return state
}
}
export default function FetchReduceTwo() {
   const [state,dispatch] = useReducer(reducer,initialState)

   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/post")
    .then(response=>{
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
    })
    .catch(err=>{
        dispatch({type:'FETCH_ERROR',payload:err.message})
    })
},[])
  return (
    <div>
    {state.loading ? "Loading" : state.post.title}
    {state.error ? state.error : null}   
    </div>
  )
}
