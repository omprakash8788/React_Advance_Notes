import React, { useState } from 'react'

const Auth = ({children}) => {
    const [auth]=useState(false)
    if(auth){
        return children;
    }
    else{
        return <h1>Login to continue</h1>

    }
}

export default Auth

// Higher order component 
// component take another as parameter 
// Function 