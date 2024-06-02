import './Project.css'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Showcart from './Showcart'
import { useContext } from 'react'
import { ContextProvider } from './Project'

export const Cartshop = ({product}) => {
let {order,setOrder} = useContext(ContextProvider)

   const navigate = useNavigate()

    const handleOrder = ()=>{
     //  const name = order.map((v)=>{return v.name})
        if(order.length >= 0){
          order = []
        setOrder([...order,product])
        navigate("/showcart")
        }
       
/*        }
       else{
         window.alert("This item is already added to Cart")
       } */
    }
  console.log(order);
  return (
                     
        <div >
    
     <div key={product.name}  >
     <Link>
      <img src={require(`${product.img}`)}/>
        <p>{product.name}</p>
        <p>{product.Brand}</p>
        <p>Rs.{product.price}</p>
        <p>{product.qty}</p>
        </Link> 
      
        <button onClick={handleOrder}>Add cart</button>
        
      </div>
    <Outlet/>


    </div>
  )
}
