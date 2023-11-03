import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter2 = () => {
    const [state, setFn] = useCounter(0, 2)
  return (
    <>
    <h1>Counter: {state}</h1>
    <button onClick={setFn}>Add</button>
    </>
  )
}

export default Counter2

/*
suppose there are 100 number of code 

*/