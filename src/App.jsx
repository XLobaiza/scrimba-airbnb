import React from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/hero'
import Navbar from './components/navBar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Card />
    </div>
  )
}

export default App
