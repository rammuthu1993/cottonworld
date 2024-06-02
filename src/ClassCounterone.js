import React from "react";
import {useState,useEffect } from "react";
import { Component } from 'react'

/* export default class ClassCounterone extends Component {
    constructor(Probs){
        super(Probs)
        this.state = {
            count:0,
            name:""
        }
    }

    componentDidMount(){
      document.title=`you have clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProbs,prevState){
        console.log(prevState.count);
        console.log(this.state.count);
        if(!prevState.count==this.state.count){
        console.log("hai");
        document.title=`you have clicked ${this.state.count} times`
        }
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e=>this.setState({name: e.target.value})}/>
        
        <button onClick={()=>this.setState({count:this.state.count+1})}>click{this.state.count}times</button>
      </div>
    )
  }
} */



export default function ClassCounterone() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(()=>{
        console.log(name);
        document.title = `you have clicked ${count} times`
    },[count])
  return (
    <div>
      <input type="text" value={name} onChange={e=> setName(e.target.value)} /> 
      <button onClick={()=>setCount(count+1)}>count{count}times</button>
    </div>
  )
} 
