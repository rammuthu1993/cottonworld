import React, { useEffect, useRef, useState,useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import { ContextProvider } from './Project';


export default function Showcart() {
  const {order,cart,setCart} = useContext(ContextProvider)
             console.log(order);
             const navigate = useNavigate()
             const [norder,setNorder] = useState("")
             const [btn,setBtn] = useState(true)
             let name = ""
             let name1 = ""
             let condition = ""
            /*  localStorage.setItem("cart",JSON.stringify(cart)) */

const handleAddcart = (index)=>{

   /* name = order.map((item)=> item.name) */
   name = order[0].name
   console.log(name);
   name1 = cart.map((v)=> v.name)
   console.log(name1) 
   console.log(name1.includes(name));
   condition = name1.includes(name) 
   console.log(index);
  /*   bill.push(...order)
   console.log(bill); */
    if(cart.length==0){
    setCart([...cart,...order])
    console.log(cart);
   /*  let obj = JSON.stringify(cart)
     localStorage.setItem("cart",obj)
    console.log(localStorage.setItem("cart",obj)); */
    /* navigate("/vieworder") */
  }

  else if(condition) {
       window.alert("This item is already added to cart")
     }
  else {
      setCart([...cart,...order])
      console.log(cart);
     
      /* navigate("/vieworder") */
     }
     /* localStorage.setItem("cart",JSON.stringify(cart)) */
     setBtn(false)
  }

const handleRemove=(id)=>{
  console.log(id);
  setCart(cart.filter((item)=> item.id!==id))
   setBtn(true)
}
/* useEffect(()=>{
  setCart([...cart,order])
  console.log(cart);
},[cart]) */

let change = useRef()

const [src,setSrc] = useState([])


const pic = order.map((v)=>{ return v.imgs})

const handleChange= (k) =>{
 //setimgs(!imges)

  console.log(k);
  change.current.src=require(`${order[0].imgs[k]}`)
} 

let i = -1;
let j = -1;
  return (
    <>
      
      {order.map((product,index)=>(
        
        <div key={product.id} style={{border:'2px solid blue',width:'300px',height:'300px'}}>
            
         <div>
            <img id='img' ref={change} src={require(`${product.img}`)} style={{width:'100%',height:'250px'}} />
            
        </div>

        <div>
        <p style={{textAlign:'center'}}><b style={{color:'blue'}}>Name:</b>{product.name}</p>
            <p style={{textAlign:'center'}}><b style={{color:'blue',textAlign:'center'}}>Price:</b>{product.price}</p>
            <button style={{backgroundColor:btn ? "green" : "red",color:'white',padding:'5px'}} onClick={()=>handleAddcart(index)}>AddCart</button> &nbsp; &nbsp;
            <button style={{backgroundColor:btn ? "red" : "green",color:'white',padding:'5px'}} onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
        
            

            <div style={{display:"flex"}}>
       
          <div  style={{width:'100px',height:'100px'}}><img  src={require(`${product.imgs[++i]}`)} onMouseOver={()=>handleChange(0)} style={{width:'100%'}}/></div>
           <div  style={{width:'100px'}}><img src={require(`${product.imgs[++i]}`)} onMouseOver={()=>handleChange(1)} style={{width:'100%'}} /></div>
          <div  style={{width:'100px',height:'100px'}}><img src={require(`${product.imgs[++i]}`)} onMouseOver={()=>handleChange(2)} style={{width:'100%'}} /></div>
          <div  style={{width:'100px',height:'100px'}}><img src={require(`${product.imgs[++i]}`)} onMouseOver={()=>handleChange(3)} style={{width:'100%'}} /></div> 
          </div>
          </div>     
      
          
        ))}   
        
         
        
        
         
    </>
  )
}
