import React, { useEffect, useState,useCallback,useRef,useContext } from 'react'
import './Project.css'
import { json } from 'react-router-dom'
import { ContextProvider } from './Project'

export default function Vieworder() {
  const {cart,setCart} = useContext(ContextProvider)
  let total = 0
  const change = useRef()
  let storage = []
   /* storage = JSON.parse(localStorage.getItem('cart'))
   console.log(storage); */
   /* if(cart.length==0){ 
    storage = JSON.parse(localStorage.getItem('cart'))
    setCart([...storage])
   }  */
   /* if(cart.length==0){
    setCart([...storage])
   } */
   /* const addCount = useCallback((j)=>{
    cart[j].Qnty = ++cart[j].Qnty
   console.log(cart[j].Qnty);
   },[]) */
   const addCount = (j)=>{
setCart(cart.map((item)=> j===item.id ? {...item,Qnty:item.Qnty+(item.Qnty<10 ? 1 : 0)}:item))
   }
    const removeCount =(j)=>{
    setCart(cart.map((v,i)=> j===v.id ? {...v,Qnty:v.Qnty >1 ? v.Qnty-1 : 1 }: v))
   }
   const handleRemove=(id)=>{
    setCart(cart.filter((item)=> item.id!==id))
    localStorage.setItem("cart",JSON.stringify(cart))
   }
   /*  useEffect(()=>{
    setTotal(cart.reduce((a,c)=>a+parseInt(c.price1),0))
     console.log(total);
     
  },[cart] ) */
 
  return (
    <div>
      <table>
        <tr>
        <th>Items</th><th>Name</th><th>Price</th><th>Brand</th><th>Qty</th><th>Amount</th></tr>
        <tbody>
        {cart.map((product,i)=>
          { 
            total +=product.price*product.Qnty
          return(
          
          <tr key={product.id}><td><img src={require(`${product.img}`)} style={{width:'100px',height:'100px'}}/></td><td>{product.name}</td><td>Rs.{product.price}</td><td>{product.Brand}</td><td ><button onClick={()=>removeCount(product.id)}>-</button><span ref={change}>{product.Qnty}</span>&nbsp;<button onClick={()=>addCount(product.id)}>+</button></td><td>Rs.{product.price1*product.Qnty}</td><td><button onClick={()=>handleRemove(product.id)}>Remove</button></td></tr>
            
        )})}
        <tr><td colSpan={5}>Total</td><td>Rs.{total}</td></tr>
        </tbody>
      </table>
    </div>
  )
}
