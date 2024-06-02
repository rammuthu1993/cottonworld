import React,{useState} from 'react'
import ClassMouse from './ClassMouse'


export default function MouseContainer() {
    const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
      {display && <ClassMouse/>}
    </div>
  )
}
