import React from 'react'
import { useState } from 'react'
import DataFetching from './DataFetching'

export const UserContext = React.createContext()
export default function Hookmap() {
  
    const [items,setItem] = useState([])
    const addItem = ()=>{
        setItem([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
   
  return (
    <div>
      <UserContext.Provider value={"Muthukumar"}>
        <DataFetching/>
      </UserContext.Provider>
        <button onClick={addItem}>Add</button>
        <ul>
        {items.map(item=> (
            <li key={item.id}>{item.id}:{item.value}</li>
        ))}
        </ul>
     
    </div>
  )
}
