import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className='min-h-screen'></section>
    </main>
  )
}

export default App