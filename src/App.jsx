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
import Boxes from './components/Boxes'
import Footer from './components/Footer'
import ScrolleTrigger from './components/ScrolleTrigger'
import Tailwind from './components/Tailwind'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       {/* <GSAP/> */}
       {/* <Boxes/> */}
       {/* <GSAPSelector/> */}
       {/* <GSAPtimeline/> */}
       
       {/* <HeroSection/>
       <FeatureSection/>
       <ScrolleTrigger/>
       <Workflow/>
       <Pricing/>
       <Footer/> */}
       <Tailwind/>
    </>
  )
}

export default App
