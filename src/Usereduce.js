import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case "increment":
           return state+1
        case "decrement":
           return state-1
        case "reset":
            return state = initialState   
        default: 
            return state    

    }

}
export default function Usereduce() {
   const [count,dispatch] = useReducer(reducer,initialState)
   const [counttwo,dispatchtwo] = useReducer(reducer,initialState)
  return (
    <div>
      <p>Count-{count}</p>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
      <div>
        <p>Count2-{counttwo}</p>
      <button onClick={()=>dispatchtwo("increment")}>Increment</button>
      <button onClick={()=>dispatchtwo("decrement")}>Decrement</button>
      <button onClick={()=>dispatchtwo("reset")}>Reset</button>
    </div>
    </div>
  )
}
