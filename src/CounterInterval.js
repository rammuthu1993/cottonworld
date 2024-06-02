import React,{useState,useEffect} from "react"
/* import React, { Component } from 'react'

export default class CounterInterval extends Component {
    constructor(probs){
        super(probs)
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
         this.setState({count:this.state.count+1})
    }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
 *///


export default function CounterInterval() {
    const [count,setCount] = useState(0)

   const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
     
    useEffect(()=>{
       const interval = setInterval(tick,1000)
        return ()=>{
          clearInterval(interval)  
        }
    },[])
  return (
    <div>
      {count}
    </div>
  )
}
