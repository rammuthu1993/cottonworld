import React,{useEffect,useState} from 'react'
import DocumentTitle from './DocumentTitle'

export default function Customhookone() {
             const [count,setCount] = useState(0)
       DocumentTitle(count)      
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}
