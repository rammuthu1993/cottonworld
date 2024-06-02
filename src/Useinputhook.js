import React,{useState} from 'react'

export default function Useinputhook(initialValue) {
     const [value,setValue] = useState(initialValue)
     const reset = () =>{
        setValue(initialValue)
     }
     const bind = {
        value,
        onChange:e=>{setValue(e.target.value)}
     }
     return [value,bind,reset]
  
}
