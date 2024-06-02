import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { UserContext } from './Hookmap'

function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idfromButtonclick,setIdfromButtonclick] = useState(1)

    const handleEvent = ()=>{
      setIdfromButtonclick(id)
    }       

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonclick}`)
        .then(res=> {setPost(res.data)})
        console.log(post); 
    },[idfromButtonclick]) 
  return (
    <div>
      <UserContext.Consumer>
        {
          user=>{
          return <div>{user}</div>
          }
        }
      </UserContext.Consumer>
      <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
      <button onClick={handleEvent}>fetch data</button>
      <p>{post.title}</p>
{/*       <ul>
       {post.map(post=>(
        
          <li key={post.id}>{post.title}</li>
        
       ))}
       </ul> */}
    </div>
  )
}

export default DataFetching
