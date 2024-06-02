import React,{useState,useMemo} from 'react'

export default function Counterone() {
    const [counterone,setCounterone] = useState(0)
    const [countertwo,setCountertwo] = useState(0)

    const setCountone= ()=>{
        setCounterone(counterone+1)
    }
    const setCounttwo= ()=>{
        setCountertwo(countertwo+1)
    }

    const isEven = useMemo(()=>{
        let i=0
       while(i<200000000) i++
       
      return counterone % 2==0
       
    },[counterone])
     
  return (
    <div>
      <div><button onClick={setCountone}>count1= {counterone}is {isEven ? "Even" : "odd"}</button></div>
      <div><button onClick={setCounttwo}>count2= {countertwo}</button></div>
    </div>
  )
}
