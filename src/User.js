import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

function User() {
  const[searchParams,setSearchParams] = useSearchParams()
  const activeUsers = searchParams.get("filter") === "active"
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet/>
      <div>
           <button onClick={()=>setSearchParams({filter:"active"})}>Active Users</button>
           <button onClick={()=>setSearchParams()}>Reset</button>
      </div>
      {activeUsers ? (<h2>show active</h2>) : (<h2>All users</h2>)}
    </div>
  )
}

export default User
