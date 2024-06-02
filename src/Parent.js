import React from 'react'

const Parent = (props) => {
function rand(){
    let names = ["Muthu","Kumar","ramasamy","Nallammal"]
    let i = Math.floor(Math.random()*4)
    
    return  names[i]
}
function one(){
  return <p>hai</p>
}
function two(){
  return <p>muthu</p>
}
  return (
    <div>
      <p>{rand()}</p>  
      <p>This Wonder World</p>
      <table>
        <tr><th>Name</th><th>School</th><th>isMarried</th></tr>
        <tr><td>{props.name}</td><td>{props.school}</td><td>{props.isMarried ? {one}:{two}}</td></tr>
      </table>
    </div>
  )
}

export default Parent
