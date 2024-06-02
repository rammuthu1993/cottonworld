import React, { useEffect, useState,useContext } from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'
import Purchase from './Purchase'
import { useNavigate } from 'react-router-dom'
import { Cartshop } from './Cartshop'
import {ContextProvider} from './Project'


export default function Buyonline() {
const navigate = useNavigate()
   
  const {dress,order,setOrder} = useContext(ContextProvider)

  
  /*  let [liked,setLiked] = useState([])
  {dress.map((v,i,a)=>(
    liked.push(a[i])
  ))}
 */
 // console.log(liked);
  return (
    <>
    <div className='shirt'>
     {dress.map((product)=>(
 <Cartshop key={product.id} product={product} order={order} setOrder={setOrder}/>

))}



   {/*  <button style={{padding:"10px 20px"}} onClick={() => navigate(-1)}>Back</button>
    <div className='shirt'>
    
      {dress.map((v)=>(

        <div key={v.name} onClick={handleOrder}>
       <a href='/src/Purchase'><img src={require(`./img/${v.img}`)}/>
          <p>{v.name}</p>
          <p>{v.Brand}</p>
          <p>Rs.{v.price}</p>
          </a> 
        </div>
      ))}
 
    </div> */}
    </div>
    </>
  )
}

export{Buyonline}