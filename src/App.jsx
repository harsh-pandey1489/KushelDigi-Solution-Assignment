import { useState } from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import OurServices from './pages/OurServices'
import WeUsePlatform from './component/WeUsePlatform'
import WorkingProcess from './component/WorkingProcess'
import Portfolio from './pages/Portfolio'
import Testimonial from './pages/Testimonial'
import WeAreKnowFor from './component/WeAreKnowFor'
import FAQ from './component/Faq'
import Consultation from './component/Consultant'
import ContactSection from './pages/ContactSection'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div className="pt-[101px] overflow-hidden relative">
        <Hero />
        <About />
        <OurServices/>
        <WeUsePlatform/>
        <WorkingProcess/>
        <Portfolio/>
        <Testimonial/>
        <WeAreKnowFor/>
        <FAQ/>
        <Consultation/>
        <ContactSection/>
        <Footer/>
      </div>
    
    </>
  )
}

export default App
