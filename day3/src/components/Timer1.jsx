import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer1 = () => {
    const [show, setShow]=useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setShow((pre)=>!pre)
        }, 2000)
    },[])
    
  return (
    <div>
      {show &&  <h1>Timer-1</h1> } 
    </div>
  )
}

export default Timer1