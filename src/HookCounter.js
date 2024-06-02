import React from 'react'
import { useState } from 'react'

function HookCounter() {
   /*  const [count,setCount] = useState(0)
    const incrementFive = ()=>{
        for( let i=0;i<5;i++){
            setCount(prevCount => prevCount+1)
        }    
    } */

    const [name,setName] = useState({Firstname:"",Lastname:""})
  return (
    <div>
     {/*  <button onClick={()=>setCount(prevCount=>prevCount=0)}>count{count}</button> */}
     <form>
     <input type="text" value={name.Firstname} onChange={e=> setName({...name,Firstname:e.target.value})}/>
     <input type="text" value={name.Lastnametname} onChange={e=> setName({...name,Lastname:e.target.value})}/>
     <h2>Fname:{name.Firstname}</h2>
     <h2>Lname:{name.Lastname}</h2>
     <h2>{JSON.stringify(name)}</h2>
     </form>
    </div>
  )
}

export default HookCounter
