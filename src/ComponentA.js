import React,{useContext} from 'react'
import { CountText } from './App'

export default function ComponentA() {
    const countText = useContext(CountText)
  return (
    <div>
        CountA-{countText.countState}
      <button onClick={()=>countText.countDispatch("increment")}>Increment</button>
      <button onClick={()=>countText.countDispatch("decrement")}>Decrement</button>
      <button onClick={()=>countText.countDispatch("reset")}>Reset</button>
    </div>
  )
}
