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