import React from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/hero'
import Navbar from './components/navBar'
import data from './data.js'

function App() {
  const cards = data.map(item => { 
    return <Card
      key={item.id}
      item={item}
      />
   })

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className='carrousell'>
        {cards}
      </div>
    </div>
  )
}

export default App
