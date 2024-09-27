import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Card></Card>
    </div>
  )
}


export default App
