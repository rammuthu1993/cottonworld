import { useAuth } from "./auth.js";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import "./Project.css"
import {NavLink, BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./Home"
import Products from "./Products";
import Buyonline from "./Buyonline";
import Lyout from "./Lyout"
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import FeaturedProducts from "./FeaturedProducts";
import User from "./User";
import UserDetails from "./UserDetails";
import { Admin } from "./Admin";
import Profile from "./Profile.js";
import { AuthProvider } from "./auth.js";
import Login from "./Login.js"
import { RequireAuth } from "./RequireAuth.js";
import { Cartshop } from "./Cartshop.js";
import Showcart from "./Showcart.js";
import { useNavigate } from "react-router-dom";
import Vieworder from "./Vieworder.js";


const LazyProduct = React.lazy(()=> import("./Products.js"))
const LazyBuy = React.lazy(()=> import( './Buyonline.js'))

export const ContextProvider = createContext()

const Project = () => {
  const [order,setOrder] = useState([])
  const [img,setImg] = useState([])
  const [cart,setCart] = useState([])

  const navigate = useNavigate()
  let [dress,setDress] = useState(
    [{Qnty:1,id:1,name:"Nicky Boy",Brand:"otto",img:"./img/d1.webp",price:250,price1:250,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:2,name:"Look Mark",Brand:"otto",img:"./img/d2.webp",price:375,price1:375,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:3,name:"CB colebro",Brand:"otto",img:"./img/d3.webp",price:275,price1:275,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:4,name:"Lymio Casual",Brand:"otto",img:"./img/d4.webp",price:256,price1:256,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:5,name:"DEELMO",Brand:"otto",img:"./img/d5.webp",price:250,price1:250,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:6,name:"Finivo Fashion",Brand:"otto",img:"./img/d6.webp",price:1250,price1:1250,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:7,name:"Leriya Fashion",Brand:"otto",img:"./img/d7.webp",price:250,price1:250,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:8,name:"Hems Trends",Brand:"otto",img:"./img/d8.webp",price:650,price1:650,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:9,name:"Fuber Men",Brand:"otto",img:"./img/d9.webp",price:750,price1:750,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:10,name:"Zakod",Brand:"otto",img:"./img/d10.webp",price:550,price1:550,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']},
    {Qnty:1,id:11,name:"Valveera",Brand:"otto",img:"./img/d11.webp",price:350,price1:350,imgs:['./img/d1.webp','./img/d10.webp','./img/d11.webp','./img/d2.webp']}
    ])

const navStyle = ({isActive})=>{
  
   return {
    fontWeight:isActive ? "bold" : "normal",
    textDecoration:isActive ? "none" : "underline",
   }
}

const auth = useAuth

  return (
   <div>
    
     <Navbar/>
     <div className='main'>

            <ul className="navbar" >
                <li><NavLink style={navStyle} to="">Home</NavLink></li>
                <li><NavLink style={navStyle} to="products">Products</NavLink></li>
                <li><NavLink style={navStyle} to="buy">Buyonline</NavLink></li>
                <li><NavLink style={navStyle} to="user" >User</NavLink></li>
                <li><NavLink style={navStyle} to="profile">Profile</NavLink></li> 
                <li>{!auth.user && (
                  <NavLink style={navStyle}  to="login">Login</NavLink>
                )}</li> 
            </ul>

            <ul className='navbar1'>
              <li onClick={()=>{navigate('/vieworder')}}><div style={{width:'30px',height:'20px',borderRadius:'100%',backgroundColor:'red',color:'white',textAlign:'center',cursor:"pointer"}}>{cart.length}</div></li>
              <li><NavLink to="login">Login</NavLink></li>
              <li><NavLink to="signup">SignUp</NavLink></li>
            </ul>
        
        </div>
        <ContextProvider.Provider value={{order,setOrder,cart,setCart,dress,setDress}}> 
            <Routes>
                
                
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<React.Suspense fallback="Loading..."><LazyProduct /></React.Suspense>}>
                <Route index element={<Lyout/>}/>
                <Route path="lyout" element={<Lyout/>}/>  
                <Route path="feature" element={<FeaturedProducts/>}/>  
                
                </Route> 

                <Route path='user' element={<User/>}>
                <Route path=':userId' element={<UserDetails/>}/>  
                <Route path="admin" element={<Admin/>}/>
                </Route>    
                <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>   
                <Route path="login" element={<Login/>}/>         
                <Route path="/buy" element={<React.Suspense fallback = "Loading..."> <LazyBuy /></React.Suspense>}/>
                <Route path="cartshop" element={<Cartshop />}/>
                <Route path="showcart" element={<Showcart />}/>
                <Route path="/vieworder" element={<Vieworder />} />
                <Route path="*" element={<NoMatch />}/>
            </Routes>
            </ContextProvider.Provider>
            <Outlet/>

           
        
   </div>
  )
}

export default Project