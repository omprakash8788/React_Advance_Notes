import React from 'react'
import { useReducer } from 'react'



const reducer=(state, param)=>{
    return state+1;
    console.log(param);
}
const initiValue=0

const Counter = () => {
    const [count, dispatch]=useReducer(reducer, initiValue)


    const add =()=>{
        dispatch({name:"om"})
        // console.log(count);
    }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Counter


/*

  flow of code 
  add()=> dispatch()-> reducer(state, param)


  1. To make any change is state ,we need to return new state
  2. whatever arg we pass in duspatch will be 


 */
