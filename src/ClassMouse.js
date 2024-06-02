import React,{ useState,useEffect } from "react";
/* import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(probs){
            super(probs)
            this.state= {
                x:0,
                y:0
            }
        }
        logMousePosition =e=>{
            this.setState({x: e.clientX, y: e.clientY})
        } 

        componentDidMount() {  
        window.addEventListener("mousemove",this.logMousePosition)
        }
    
  render() {
    return (
      <div>
        X :{this.state.x} Y:{this.state.y}
      </div>
    )
  }
} */



export default function ClassMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

   const logMousePosition=(e)=> {
     console.log('hai');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("hai")
      window.addEventListener("mousemove",logMousePosition)  
      return ()=> {
        console.log("bye");
        window.removeEventListener("mousemove",logMousePosition)
      }
       
    },[])
  return (
    <div>
      x:{x},Y:{y}
    </div>
  )
}
