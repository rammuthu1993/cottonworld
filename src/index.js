import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieApi from './MovieApi';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Project from './Project';
import Hooks from './Hooks';
import Hookmap from './Hookmap';
import ContextA from './ContextA';
import ClassCounterone from './ClassCounterone';
import ClassMouse from './ClassMouse';
import MouseContainer from './MouseContainer';
import CounterInterval from './CounterInterval';
import DataFetching from './DataFetching';
import Usereduce from './Usereduce';
import CounterTwo from "./CounterTwo";
import App from './App';
import FetchReduce from './FetchReduce';
import FetchReduceTwo from "./FetchReduceTwo"
import UseCallback from './UseCallback';
import Counterone from './Counterone';
import UseRef from './UseRef';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';
import Parent1 from './Parent1';
import Forms from './Forms';
import HookCounter from './HookCounter';
import User from './User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <CounterTwo/> */}
     {/* <Usereduce/> */}
     {/* <DataFetching/>  */}
     {/* <CounterInterval/> */}
    {/* <MouseContainer/> */}
     {/* <ClassMouse/> */}
    {/* <ClassCounterone /> */}
     {/* <BrowserRouter/> */}
     {/* <Hookmap/> */}
     {/* <Usereduce/> */}
    {/* <Usereduce/> */}
     {/* <FetchReduce /> */}
      {/* <FetchReduceTwo/>  */}
      {/* <UseCallback/> */}
      {/* <Counterone/> */}
     {/* <UseRef/> */}
     {/* <ClassTimer/> */}
    {/* <HookTimer/> */}
    {/* <BrowserRouter>
    <Project/> 
    </BrowserRouter> */}
    {/* <App/> */}
    {/* <Forms/> */}
    {/* <HookCounter/> */}
    {/* <MovieApi/> */}
    <User/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
