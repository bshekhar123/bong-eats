import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Foods from './components/Foods'
import Footer from './components/Footer'
 

const App = () => {
  return (
    <div><Navbar />
    <Hero/>
    <HeadlineCards/>
    <Foods/>
     <Footer/>
    </div>
  )
}

export default App