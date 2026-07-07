import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './Signup'
import  Login  from './Login'
import  Dashboard  from "./Dashboard"
export const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup/>} />

            <Route index element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}