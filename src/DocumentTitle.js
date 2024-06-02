import { useEffect } from "react"
import React from 'react'

export default function DocumentTitle(count) {
    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])
  return (
    <div>
      
    </div>
  )
}
