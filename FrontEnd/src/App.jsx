import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <HeroSection/>
       <FeatureSection/>
    </>
  )
}

export default App
