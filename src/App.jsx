import './App.css'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Get from './Components/Get_In'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import QnA from './Components/QnA'
import Testimonials from './Components/Testimonials'
import Trusted from './Components/Trusted'
import Upgrade from './Components/Upgrade'
import Use from './Components/Use'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Use/>
      <Upgrade />
      <Features />
      <Testimonials />
      <QnA />
      <Get />
      <Footer />
      </>
  )
}

export default App
