import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState } from "react"
import {useAuth} from "./auth.js"
import { useLocation } from 'react-router-dom'

export const Login = () => {
    const [user,setUser]=useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectpath = location.state?.path || "/"

    const handleLogin = ()=>{
        auth.login(user)
        navigate(redirectpath,{replace:true})
    }
  return (
    <div><p>Login</p>
    <label>
        UserName:{""}
        <input type='text' onChange={(e)=> {setUser(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
    </label>
    </div>
  )
}
 export default Login