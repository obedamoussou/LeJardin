import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import FeatureStrip from './components/FeatureStrip'
import AllInclusive from './components/AllInclusive'
import Program from './components/Program'
import Stay from './components/Stay'
import GuestsReasons from './components/GuestsReasons'
import Faq from './components/Faq'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import BackgroundMusic from './components/BackgroundMusic'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-ember-600 via-ember-400 to-ember-500"
      />

      <Navbar />
      <BackgroundMusic />

      <main>
        <Hero />
        {/* <FeatureStrip /> */}
        <AllInclusive />
        <Program />
        <Stay />
        <GuestsReasons />
        <div className="pb-8 pt-4">
          <Reserve />
          <Faq />
        </div>
      </main>

      <Footer />
    </div>
  )
}
