import { useState } from 'react'
import logo from './logo.svg'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/landing/Landing'
import Testimonial from './components/Testimonials/Testimonial'
import Review from './components/Reviews/Review'

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <Testimonial/>
      <Review/>
    </div>
  )
}

export default App
