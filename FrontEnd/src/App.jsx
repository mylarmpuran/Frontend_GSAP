import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import GSAP from './components/GSAP'
import GSAPtimeline from './components/GSAPtimeline'
import GSAPSelector from './components/GSAPSelector'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       {/* <GSAP/> */}
       <GSAPSelector/>
       <GSAPtimeline/>
       <HeroSection/>
       <FeatureSection/>
       <Workflow/>
       <Pricing/>
    </>
  )
}

export default App
