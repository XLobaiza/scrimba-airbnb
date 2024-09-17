import React from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/hero'
import Navbar from './components/navBar'
import data from './data.js'

function App() {
  const experiencesOnline = data.map(datas => { 
    return <Card
        img = {datas.coverImg}
        rating = {datas.stats.rating}
        reviewCount = {datas.stats.reviewCount}
        location = {datas.location}
        title = {datas.title}
        price = {datas.price}
        cost ={datas.const}
      />
   })

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className='carrousell'>
        {experiencesOnline}
      </div>
    </div>
  )
}

export default App
