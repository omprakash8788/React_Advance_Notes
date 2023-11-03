
import { useState } from 'react'

const useCounter = (iniVal, payload) => {
    const [state, setState]=useState(iniVal);

    let fun=()=>{
        setState((pre)=>pre+payload)
    }

  return [state, fun]
}

export default useCounter