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
      <div className='carrousell'>
        <Card 
        img = "src/assets/zaferesUSA.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
        />
      </div>
    </div>
  )
}

export default App
