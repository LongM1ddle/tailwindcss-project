import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { RegisterModule } from './components/RegisterModule/registerModule'
import { LoginModule } from './components/loginModule/LoginModule'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<RegisterModule/>}></Route>    
  <Route path="login" element={<LoginModule/>}></Route>
  </Routes>
    </>
  )
}

export default App
