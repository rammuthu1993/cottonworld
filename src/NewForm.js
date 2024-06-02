import React,{useState} from 'react'

export default function NewForm() {
    const [inputs,setInputs] = useState({})

    const handleChange = (e)=>{
       const name = e.target.name    
       const value = e.target.value
        setInputs(values=> ({...values,[name]:value}))
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs);
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="fname" value={inputs.fname || ""} onChange={handleChange}/>
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}
