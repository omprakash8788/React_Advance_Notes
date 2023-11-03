import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AddProduct from './AddProduct'
import ShowProduct from './ShowProduct'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/showproduct' element={<ShowProduct/>}/>
        <Route path='*' element={<h1>404 page not found</h1>}/>
    </Routes>
  )
}

export default MainRoute