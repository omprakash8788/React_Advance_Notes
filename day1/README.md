## Day-1 
## Topic- useEffect

Q. What is useEffect
Ans - It is a hooks
Example...
Calling API
Setting up subscription
Update the dom element 
Working with setTimeout or setInterval


Q. What is the purpose of hook
Ans - The Effect hooks perform side effect in functional components

Q. What is impure function 
Ans - 

<!-- This is pure function -->
function sum(a,b){
    return a+b
}
sum(3,5) // 8
<!-- This is impure function -->
let c=9;
function sum(a,b){
    return a+b
}
sum(3,5) // 8


# useEffect - How many ways of using useEffect
1. Without an array of dependency
   useEffect(()=>{
    // logic
   })
   The callback is triggered whenever the component renders
    1. when the state of components changes




   ------------------------

 import React, { useState } from 'react'
 const Counter = () => {
    const [count, setCount]=useState(0)

    const inc=()=>{
        setCount(count+1)
        
    }

    const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
   <h1>Counter:{count}</h1>
   <button onClick={inc}>Inc</button>
   <button onClick={dec}>Dec</button>

    </div>
  )
 }

 export default Counter


   ------------------------
   senario 
   1. state change
   2. props change
   3. mounting phase
   4. unmounting phase

   A. useEffect without array of 
    - on component mounting 
    - on component re-render 

 




2. UseEffect 
    With an empty array of dependency 
    useEffect(()=>{
        //logic
    },[])

 Exp.....
 import React, { useEffect, useState } from 'react'

 const Counter = () => {
    const [count, setCount]=useState(0)

    useEffect(()=>{
        console.log("inside useEffect");
    },[])

    const inc=()=>{
        setCount(count+1)
    
    }

    const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
   <h1>Counter:{count}</h1>
   <button onClick={inc}>Inc</button>
   <button onClick={dec}>Dec</button>

    </div>
  )
 }

 export default Counter
  
    B. useEffect with [] <-- this is empty array
    - on component mounting


3. useEffect with [state/variable]

  import React, { useEffect, useState } from 'react'

  const Counter = () => {
    const [count, setCount]=useState(0)

    let state =0

    useEffect(()=>{
        console.log("inside useEffect");
    },[count])

    const inc=()=>{
        setCount(count+1)
    
    }

    const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
   <h1>Counter:{count}</h1>
   <button onClick={inc}>Inc</button>
   <button onClick={dec}>Dec</button>

    </div>
  )
 }

 export default Counter

   
 - on component mounting
 - if the state / variable inside array changes

  


4. useEffect - with a cleanup function

  cleanup function - setInterval 


  useEffect (()=>{
    // logic
    return()=>{}  <--- cleanup function
  },[])

  Why cleanup function - 
  - During unmounting
  - when the value inside array changes


    Example..
      import React, { useEffect, useState } from 'react'

 const Counter = () => {
    const [count, setCount]=useState(0)


    useEffect(()=>{
     const id = setInterval(()=>{

            console.log("inside useEffect");
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[count])

    const inc=()=>{
        setCount(count+1)
    
    }

    const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
   <h1>Counter:{count}</h1>
   <button onClick={inc}>Inc</button>
   <button onClick={dec}>Dec</button>

    </div>
  )
 }

 export default Counter   

 ## App.js 

   import { useState } from 'react';
   import './App.css';
   import Counter from './component/Counter';

 function App() {
  const [show, setShow]=useState(false)
  return (
    <div className="App">
      {show && <Counter/>}
      <button onClick={()=>setShow(!show)}>Show counter</button>
    </div>
  );
 }

 export default App;




Q. Can we used multiple useEffect 
Ans - yes


   import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)


    console.log("A");
  useEffect(()=>{
    console.log("1");
    return ()=>{
        console.log("2");
    }
  },[])

  useEffect(()=>{
    console.log("3");
    return ()=>{
        console.log("4");
    }
  },[]) 
  
  useEffect(()=>{
    console.log("4");
    return ()=>{
        console.log("6");
    }
  },[])

  console.log("B");

    const inc=()=>{
        setCount(count+1)
    
    }

    const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
   <h1>Counter:{count}</h1>
   <button onClick={inc}>Inc</button>
   <button onClick={dec}>Dec</button>

    </div>
  )
 }

 export default Counter

 ## App.js
     import { useState } from 'react';
 import './App.css';
 import Counter from './component/Counter';

 function App() {
  const [show, setShow]=useState(false)
  return (
    <div className="App">
      {show && <Counter/>}
      <button onClick={()=>setShow(!show)}>Show counter</button>
    </div>
  );
 }

 export default App;



## --------------- React Routing -------------------
 install -npm i react-router-dom

 wrap index.js with BrowserRouter



What is page 
Ans - Pages of a combination of components



