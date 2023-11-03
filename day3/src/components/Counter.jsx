import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount((pre)=>pre+1)}>Add</button>
    </>
  )
}

export default Counter