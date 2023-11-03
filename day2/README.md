## Topic - State Management 


What is state management 
Ans - 

state - state  is a 'data '

Management - Management means
             1. Storing the data
             2. Accessing the data
             3. Modifying the data


Q How many hook do you know 
1. useState
2. useEffect
3. useReducer
4. useRef


1. useState 
 - Local data -management hook
 - Formate of writing useState
 const data=useState(1)
 const state=data[0]
 const setState=data[1]

  OR

  const [count, setCount]=useState(0)

  count = varible to access data
  setCount=  function to update the data
  useState(0)= initial state to store the data

  useState(1) = initial state to store the data . The initial state store , both 'primitive' and 'non primitive' data-type

  ## Primitive data type - There are total 7 primitive data type ( string , null, boolean bigint , symbol ,undefined ,number)


 ## useState   
  Ways to initialising an useState hook
   1. Passing the variable containing the initial data
     const data = number ||3
     const [state, setState]=useState(data)


 Exp.............

 import './App.css';
 import {useState} from 'react'

 let num=0

 function App() {
  
  const [count, setCount]=useState(num)
  // console.log(state);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
  }

 export default App;
  
   
    2. Passing the data recived from the props

     const Component=({count})=>{
        const [state, setSstate]=useState(count)

        return <div>{count}</div>
     }





----------------------------------------

## useReducer 

What is useReducer - data management hook

Syntax 
const [state, dispatch]= useReducer(()=>{},30)

state= variable to access data
dispath= function to dispatch action obj to the reducer function
() = reducer function , to modify the data
30 = initial state to store the data


let counter =0


















