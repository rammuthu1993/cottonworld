import React,{useState} from 'react'
import Useinputhook from './Useinputhook'

export default function Forms() {
    const [fname,bindFname,resetFname] = Useinputhook("")
    const [lname,bindLname,resetLname] = Useinputhook("")
   const submitHandler=(e)=>{
       e.preventDefault();
       alert(`hello ${fname} ${lname}`)
       resetFname()
       resetLname()
    }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input {...bindFname} type="text" value={fname} />
        <input {...bindLname}  type="text" value={lname}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
