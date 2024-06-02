import React, { Component } from 'react'

export default class ClassTimer extends Component {
    interval
    constructor(probs){
        super(probs)
        this.state={
            timer:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        Classtimer - {this.state.timer}
        <button on onClick={()=>clearInterval(this.interval)}>Clear</button>
      </div>
    )
  }
}
