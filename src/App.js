/* import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import React,{useState} from 'react';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Hai "MuthuKumar"</p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


/*const App = () => {
  const name = "Welcome Muthukumar"
  const [num, setdata] = useState(0)
  const [arr, setArr] = useState([{
    name:"muthu",
    color:"black",
    img:"proj.jpeg"
  },
  {
    name:"kumar",
    color:"black",
    img:"proj.jpeg"
  }])
  console.log(num);
  function set(e){
    document.getElementById('name').innerHTML =e.target.innerHTML
  }
  
  return(
    <>
    { <p>{name} <Parent/></p> }
    <Parent name="Muthu" school="MDK" isMarried={true} />
     
    <img src= {require("./img/proj.jpeg")} style={{width:"300px",height:"200px"}}/>
    <p>{num}</p>
    <button onClick={() =>{setdata(num+1)}}>inc</button>
    <button onClick={() =>{setdata(0)}}>reset</button>
    <button onClick={() =>{setdata(num-1)}}>dec</button>
    <div id='name'></div>
    <button onClick={(e)=> set(e)}>set</button>
    
    </>
  )
}
export default App */

import React,{useReducer} from 'react'
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"

export const CountText = React.createContext()
const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case "increment":
           return state+1
        case "decrement":
           return state-1
        case "reset":
            return state = initialState   
        default: 
            return state    

    }

}
export default function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountText.Provider value={{countState:count,countDispatch:dispatch}}>
    <div>
      <p>count-{count}</p>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountText.Provider>
  )
}


