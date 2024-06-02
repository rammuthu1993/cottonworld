import React from 'react'
import Buyonline from "./Buyonline"

export default function Purchase(probs) {
    
  return (
    <div>
     {probs.liked.map((v)=>(
        <div>{v.img}</div>
     ))}
    </div>
  )
}
